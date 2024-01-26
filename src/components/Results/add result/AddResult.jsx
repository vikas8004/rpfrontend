import React, { useContext } from "react";
import { VStack, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddResult = () => {
  return (
    <>
      <VStack>
        <VStack
          mt={78}
          width={["100%", "60%"]}
          justifyContent={"center"}
          height={"80vh"}
        >
          <Box width={["56%", "40%"]} mb={5}>
            <Link to={"add-all-result"}>
              <Button width={"100%"}>Add All Result</Button>
            </Link>
          </Box>

          <Box width={["56%", "40%"]} mb={5}>
            <Link to={"add-unit-test-result"}>
              <Button width={"100%"}>Add Unit Test Result</Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
      )
    </>
  );
};

export default AddResult;
