import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../../provider'

export default function Canvas() {
  const { handler } = useDataContext()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  const reduceCanvas = useRef<HTMLCanvasElement | null>(null)

  const handleResize = () => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (canvas && parent) {
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }
    const context = canvas ? canvas.getContext('2d') : null
    if (context) {
      context.lineCap = 'round'
      context.strokeStyle = 'black'
      context.lineWidth = 20
      contextRef.current = context
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const canvas = reduceCanvas.current
    if (!canvas) return

    canvas.width = 28
    canvas.height = 28
  }, [])

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current?.beginPath()
    contextRef.current?.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const endDrawing = () => {
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return
    context?.closePath()
    setIsDrawing(false)
  }

  const draw = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) return
    const { offsetX, offsetY } = nativeEvent
    contextRef.current?.lineTo(offsetX, offsetY)
    contextRef.current?.stroke()
    toBlob()
  }

  const clear = () => {
    const canvas = canvasRef.current
    const ctx = contextRef.current

    const redCanvas = reduceCanvas.current
    const redCtx = redCanvas?.getContext('2d')

    if (!canvas || !ctx || !redCanvas || !redCtx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    redCtx.clearRect(0, 0, redCanvas.width, redCanvas.height)
    toBlob()
  }

  const toBlob = () => {
    const canvas = canvasRef.current
    const context = contextRef.current

    const reduced = reduceCanvas.current
    const ctx = reduced?.getContext('2d')
    if (!canvas || !context || !reduced || !ctx) return

    const image = new Image()
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 28, 28)
      handler(ctx.getImageData(0, 0, 28, 28), reduced.toDataURL('image/png'))
    }
    image.src = canvas.toDataURL()
  }

  return (
    <Box h={'full'} position={'relative'}>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        style={{
          background: 'white',
        }}
      />

      <canvas ref={reduceCanvas} hidden />

      <Button
        size={'lg'}
        colorScheme={'green'}
        position={'absolute'}
        bottom={5}
        right={5}
        borderRadius={'full'}
        onClick={clear}
      >
        Clear
      </Button>
    </Box>
  )
}
