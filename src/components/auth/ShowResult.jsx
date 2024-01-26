import React, { useContext } from "react";
import { tokenContext } from "../../context.jsx";
import { Button,Stack,VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ShowResult = (props) => {
  const { result } = useContext(tokenContext);
  const { Component } = props;
  return (
    <>
      {result ? (
        <Component />
      ) : (
        <VStack><Stack dir="column" mt={100} alignItems={"center"}><Link to={"/result/results"}>
        <Button bg={"tomato"} >Go To Results Page</Button>
      </Link></Stack></VStack>
      )}
    </>
  );
};

export default ShowResult;
