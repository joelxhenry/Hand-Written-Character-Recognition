import React from 'react'
import Bar from './bar.component'
import { HStack, Text, Box, VStack } from '@chakra-ui/react'
import { useDataContext } from '../../provider/index'

export default function Graph() {
  const { response } = useDataContext()

  return (
    <HStack
      borderBottom={'1px'}
      height={'200px'}
      alignItems={'end'}
      justifyContent={'left'}
      w={'full'}
    >
      {response ? (
        response.map((res) => {
          if (res.val < 0.01) return <div key={res.ch} />
          return (
            <Bar val={res.val} key={res.ch} color={'green.400'} ch={res.ch} />
          )
        })
      ) : (
        <></>
      )}
    </HStack>
  )
}
