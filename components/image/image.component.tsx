import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useDataContext } from "../../provider/index";

export default function ImageComponent() {
  const { image } = useDataContext();

  return (
    <Box
      borderRadius={20}
      boxShadow={"xl"}
      bg={"whiteAlpha.600"}
      w={375}
      h={375}
    >
      {image ? <Image w={"full"} alt="Test Image" src={image} /> : <></>}
    </Box>
  );
}
