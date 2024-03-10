import { Box, Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

export default function Bar({
  val,
  color,
  ch,
}: {
  val: number
  color: string
  ch: string
}) {
  return (
    <VStack justifyContent={'end'} alignItems={'center'} h={`${val * 100}%`}>
      <Text
        fontSize={'x-small'}
        textColor={'green.900'}
        fontWeight={'bold'}
        textAlign={'center'}
        whiteSpace={'nowrap'}
        style={{
          writingMode: 'vertical-lr',
        }}
      >
        {`${ch} ${(val * 100).toFixed(0)}%`}
      </Text>
      <Box h={'full'} p={1} transition={'.25s'} bg={color}></Box>
    </VStack>
  )
}
