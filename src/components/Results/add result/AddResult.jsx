import React, { useContext } from "react";
import { VStack, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddResult = () => {
  return (
    <>
      
        <VStack
          width={["100%", "80%"]}
          mt={20}
          height={"100%"}
        >
          <Box width={["56%", "40%"]} mb={5}>
            <Link to={"/result/addresult/add-all-result"}>
              <Button width={"100%"}>Add All Result</Button>
            </Link>
          </Box>

          <Box width={["56%", "40%"]} mb={5}>
            <Link to={"/result/addresult/add-unit-test-result"}>
              <Button width={"100%"}>Add Unit Test</Button>
            </Link>
          </Box>
        </VStack>
      
    
    </>
  );
};

export default AddResult;