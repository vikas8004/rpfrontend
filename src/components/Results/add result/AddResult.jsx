import React, { useContext } from "react";
import { VStack, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddResult = () => {
  return (
    <>
      <VStack width={["100%", "80%"]} mt={"4"} height={"100%"}>
        <Box width={["90%","90%", "50%"]} mb={2}>
          <Link to={"/result/addresult/add-all-result"}>
            <Button width={"100%"}>Add All Result(1 to 8)</Button>
          </Link>
        </Box>

        <Box width={["90%","90%", "50%"]} mb={2}>
          <Link to={"/result/addresult/add-unit-test-result"}>
            <Button width={"100%"}>Add Unit Test( 1 to 8)</Button>
          </Link>
        </Box>
        <Box width={["90%","90%", "50%"]} mb={2}>
          <Link to={"/result/addresult/add-all-result9&10"}>
            <Button width={"100%"}>Add All Result(9 & 10)</Button>
          </Link>
        </Box>

        <Box width={["90%","90%", "50%"]} mb={2}>
          <Link to={"/result/addresult/add-unit-test-result9&10"}>
            <Button width={"100%"}>Add Unit Test( 9 & 10)</Button>
          </Link>
        </Box>
        <Box width={["90%","90%", "50%"]} mb={2}>
          <Link to={"/result/addresult/add-all-result11&12"}>
            <Button width={"100%"}>Add All Result(11 & 12)</Button>
          </Link>
        </Box>

        <Box width={["90%","90%", "50%"]} mb={2}>
          <Link to={"/result/addresult/add-unit-test-result11&12"}>
            <Button width={"100%"}>Add Unit Test( 11 & 12)</Button>
          </Link>
        </Box>
      </VStack>
    </>
  );
};

export default AddResult;
