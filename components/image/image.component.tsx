import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useDataContext } from '../../provider/index'

export default function ImageComponent() {
  const { image } = useDataContext()

  return (
    <Box
      boxShadow={'xl'}
      bg={'whiteAlpha.600'}
      w={'full'}
      style={{
        aspectRatio: '1/1',
      }}
    >
      {image ? <Image w={'full'} alt="Test Image" src={image} /> : <></>}
    </Box>
  )
}
