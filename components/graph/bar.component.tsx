import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Bar({
  val,
  color,
  ch,
}: {
  val: number;
  color: string;
  ch: string;
}) {
  return (
    <Box
      position={"relative"}
      alignItems={"end"}
      display={"flex"}
      bg={"whiteAlpha.500"}
      h={"100%"}
    >
      <Box transition={".25s"} px={2} h={`${val * 100}%`} bg={color}>
        <Box>
          <Text
          fontSize={'sm'}
            color={"gray.600"}
            fontWeight={"bold"}
            transform={"rotate(45deg)"}
          >{`${(val * 100).toFixed(1)}%`}</Text>
        </Box>
      </Box>
      <Text
        textColor={"green.900"}
        fontWeight={"bold"}
        position={"absolute"}
        bottom={5}
        left={0}
        right={0}
        textAlign={"center"}
      >
        {ch}
      </Text>
    </Box>
  );
}
