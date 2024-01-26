import React, { useContext } from "react";
import { tokenContext } from "../../context.jsx";
import { Button,Stack,VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ShowConditionallyAdmitCard = (props) => {
  const { admitCard } = useContext(tokenContext);
  const { Component } = props;
  return (
    <>
      {admitCard ? (
        <Component />
      ) : (
        <VStack><Stack dir="column" mt={100} alignItems={"center"}><Link to={"/"}>
        <Button bg={"tomato"} >Go To Home</Button>
      </Link></Stack></VStack>
      )}
    </>
  );
};

export default ShowConditionallyAdmitCard;
