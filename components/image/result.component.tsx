import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'
import { useDataContext } from '../../provider/index'
import { useEffect, useState } from 'react'

export default function ResultComponent() {
  const { response } = useDataContext()

  const [val, setVal] = useState<{ ch: string; val: number }>()

  useEffect(() => {
    if (!response) return
    const arr = JSON.parse(JSON.stringify(response))
    arr.sort(
      (a: { ch: string; val: number }, b: { ch: string; val: number }) =>
        a.val - b.val,
    )
    const val = arr[25]
    setVal(val)
  }, [response])

  return (
    <Center
      fontSize={'9xl'}
      fontWeight={'medium'}
      lineHeight={'short'}
      textAlign={'center'}
      boxShadow={'xl'}
      bg={'whiteAlpha.600'}
      w={'full'}
      style={{
        aspectRatio: '1/1',
      }}
      textColor={'green.500'}
    >
      {val ? val.ch : ''}
    </Center>
  )
}
