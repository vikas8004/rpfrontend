import React from "react";
import { HStack, VStack, Button,Text } from "@chakra-ui/react";
import { FaDirections } from "react-icons/fa";
import { MdAddCall,MdOutlineEmail } from "react-icons/md";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <HStack
        bgColor={"lightseagreen"}
        mt={"10px"}
        minH={"30vh"}
        justifyContent={"space-evenly"}
        alignItems={"flex-start"}
        position={"relative"}
      >
        <VStack width={"50%"} mt={3}  ml={3} alignItems={"flex-start"}>
            <Text  fontWeight={"bolder"}>Address</Text>
          <Link
            to={
              "https://www.google.com/maps/dir///@26.7548889,82.6536429,13z?entry=ttu"
            }
            target="_blank"
          >
            <Button variant={"outline"}>
              <FaDirections /> Direction
            </Button>
          </Link>
          <Text >Rehar Khuthan, Uttar Pradesh 272302 India</Text>
        </VStack>
        
        <HStack width={"50%"} mt={3} mr={3}   justifyContent={'flex-end'}>
          <Link to={"tel:9919146295"}><Button colorScheme="whatsapp"><MdAddCall /> <Text ml={2}>Call us</Text></Button></Link>
          <Link to={"mailto:mail@rpadarsh.com"}><Button colorScheme="whatsapp"><MdOutlineEmail /><Text ml={3}>Mail Us</Text></Button></Link>
        </HStack>
        <HStack position={"absolute"} bottom={3} fontSize={"20px"}>
        <Text fontSize={"17px"}>Made With Passion and <span id="heart">💗</span> by <Link style={{color:"tomato"}} to={"https://github.com/vikas8004"} target="_blank">Vikas Kumar</Link></Text>
      </HStack>
      </HStack>
      
    </>
  );
};

export default Footer;