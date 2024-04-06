import React, { ReactNode, useState } from 'react'
import { DataContext } from '.'
import { DataInterface } from './index'
import { predict } from '../app/model.client'
import { useEffect } from 'react'

const examine = (arr: number[]) => {
  let nw: number[] = []
  let n = 0
  while (n < arr.length) {
    nw.push(arr[n + 3] / 255)
    n += 4
  }

  return nw
}

export default function DataProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<{ src: string; data: number[] }>()
  const [response, setResponse] = useState<{ ch: string; val: number }[]>()
  const [loading, setLoading] = useState(false)

  const handler = async (image: ImageData, dataUrl: string) => {
    setImage({
      src: dataUrl,
      data: examine(Array.from(image.data)),
    })
  }

  const value: DataInterface = { handler, image: image?.src, response, loading }

  useEffect(() => {
    if (image) {
      setLoading(true)
      predict(image?.data, setResponse, () => setLoading(false))
    }
  }, [image])

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
