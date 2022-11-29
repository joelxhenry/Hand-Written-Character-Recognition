import React from "react";
import Bar from "./bar.component";
import { HStack, Text, Box } from "@chakra-ui/react";
import { useDataContext } from "../../provider/index";

export default function Graph() {
  const { response } = useDataContext();

  return (
    <HStack
      pt={12}
      px={10}
      borderX={"2px"}
      borderBottom={"2px"}
      h={"40vh"}
      alignItems={"end"}
      justifyContent={"space-evenly"}
      minW={"100%"}
    >
      {response ? (
        response.map((res) => {
          return (
            <Bar val={res.val} key={res.ch} color={"green.400"} ch={res.ch} />
          );
        })
      ) : (
        <></>
      )}
    </HStack>
  );
}
