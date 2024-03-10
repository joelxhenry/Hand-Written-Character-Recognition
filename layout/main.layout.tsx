import { Heading, Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import CanvasComponent from '../components/canvas/canvas.component'
import Graph from '../components/graph/graph.component'
import ResultComponent from '../components/image/result.component'
import DataProvider from '../provider/data.provider'

export default function MainLayout() {
  return (
    <DataProvider>
      <Heading mb={20} mt={5}>
        Hand-Written Character Recognition
      </Heading>
      <Grid
        height={'full'}
        alignItems={'start'}
        templateColumns={'repeat(12,1fr)'}
      >
        <GridItem height={'full'} colSpan={{ base: 12, md: 12, lg: 7 }}>
          <Box
            w={'full'}
            style={{
              aspectRatio: '1/1',
            }}
            position={'sticky'}
            top={10}
          >
            <CanvasComponent />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 12, lg: 5 }}>
          <Graph />
          <ResultComponent />
        </GridItem>
      </Grid>
    </DataProvider>
  )
}
