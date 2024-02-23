import React, { useContext, useState } from "react";
import { VStack, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { tokenContext } from "../../context";
const Results = () => {
  const {token}=useContext(tokenContext)
  return (
    <>
      <VStack>
        <VStack
          mt={78}
          width={["100%", "60%"]}
          justifyContent={"center"}
          height={"80vh"}
        >
          <Box width={"50%"} mb={5}>
            <Link to={"/result/results/quaterlyresult"}>
              <Button width={"100%"}>Quaterly Result</Button>
            </Link>
          </Box>
          <Box width={"50%"} mb={5}>
            <Link to={"/result/results/halfyearlyresult"}>
              <Button width={"100%"}>Halfyearly Result</Button>
            </Link>
          </Box>
          <Box width={"50%"} mb={5}>
            <Link to={"/result/results/annuallyresult"}>
              <Button width={"100%"}>Annual Result</Button>
            </Link>
          </Box>
          <Box width={"50%"} mb={5}>
            <Link to={"/dashboard/result/results/finalresult"}>
              <Button width={"100%"} isDisabled={token?false:true}>Final Result</Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
    </>
  );
};

export default Results;