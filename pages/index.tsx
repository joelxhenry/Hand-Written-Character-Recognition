import { Box } from "@chakra-ui/react";
import Head from "next/head";
import MainLayout from "../layout/main.layout";

export default function Home() {
  return (
    <Box py={10} px={{ base: 5, md: 40}} minH={'100vh'} bg={'whitesmoke'}>
      <Head>
        <title>Convolutional Neural Network</title>
        <meta name="description" content="Convolutional Neural Network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout />
    </Box>
  );
}
