import React from "react";
import { VStack, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <>
      <VStack>
        <VStack
          mt={78}
          width={["100%", "60%"]}
          justifyContent={"center"}
          height={"50vh"}
        >
          <Box width={"50%"} mb={10}>
            <Link to={"/result/results"}>
              <Button width={"100%"}>View Result</Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
    </>
  );
};

export default Result;