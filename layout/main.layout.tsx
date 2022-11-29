import {
  Heading,
  SimpleGrid,
  Box,
  HStack,
  Text,
  Grid,
  GridItem,
  Divider,
  Center,
} from "@chakra-ui/react";
import React from "react";
import CanvasComponent from "../components/canvas/canvas.component";
import Graph from "../components/graph/graph.component";
import ImageComponent from "../components/image/image.component";
import ResultComponent from "../components/image/result.component";
import DataProvider from "../provider/data.provider";

export default function MainLayout() {
  return (
    <DataProvider>
      <Grid
        templateRows={"repeat(2,1fr)"}
        alignItems={"center"}
        templateColumns={"repeat(12,1fr)"}
      >
        <GridItem h={"full"} rowSpan={2} py={10} px={2} colSpan={5}>
          <Box h={"80vh"} position={"sticky"} top={10}>
            <CanvasComponent />
          </Box>
        </GridItem>
        <GridItem h={"full"} rowSpan={2} px={10} colSpan={7}>
          <Box h={"full"}>
            <Heading px={10} pt={20}>Hand-Written Character Recognition</Heading>
            <HStack h={'full'} justifyContent={"space-around"}>
              <ImageComponent />
              <ResultComponent />
            </HStack>
            <Divider my={10} />
          </Box>
        </GridItem>
      </Grid>
      <Box
        borderRadius={10}
        dropShadow={"xl"}
        background={"blackAlpha.200"}
        p={10}
        mt={20}
      >
        <Graph />
      </Box>
    </DataProvider>
  );
}
