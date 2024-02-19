import React from "react";
import {
  VStack,
  Container,
  Box,
  Image,
  HStack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";
import Footer from "./Footer.jsx";
import student from "../assests/student.jpg";
import principal from "../assests/principal.jpg";
import registrar from "../assests/registrar.jpg";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { GiHumanPyramid } from "react-icons/gi";
import logo from "../assests/logo.png"
const Home = () => {
  return (
    <>
      <VStack
        justifyContent={"center"}
        width={"95vw"}
        boxSizing="border-box"
        mx={"auto"}
      >
        <HStack
          mt={"60px"}
          width={["100%", "100", "80%"]}
          alignItems={"center"}
          flexDirection={["column", "column", "row"]}
        >
          <HStack width={["100%", "100%", "50%"]} justifyContent={"center"}>
            <Image
              src={logo}
              width={["200px", "160px", "250px"]}
              height={["200px", "160px", "250px"]}
              rounded={"full"}
            ></Image>
          </HStack>
          <HStack width={["100%", "100%", "80%"]} justifyContent={"center"}>
            <Text
              width={"90%"}
              fontSize={"18px"}
              textAlign={"justify"}
              // mt={"60px"}
            >
              The aim of the RP ADARSH INTER COLLEGE is to create an ambience
              encouraging learning in a joyous environment and help students
              attain their educational and personal goals by developing their
              confidence and self-esteem. We are ranked among the Top schools of
              BASTI, and provide qulity content in our education through various
              programs.
            </Text>
          </HStack>
        </HStack>
        <Divider
          borderWidth={"1px"}
          borderColor={"tomato"}
          width={["90%", "90%", "80%"]}
          mt={"10px"}
        />
        <Heading
          color={"tomato"}
          width={["90%", "90%", "80%"]}
          fontSize={"25px"}
        >
          Principal's Desk
        </Heading>
        <HStack
          width={["90%", "90%", "80%"]}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={["column", "column", "row-reverse"]}
        >
          <VStack width={["100%", "100%", "50%"]}>
            <Image
              src={principal}
              width={["200px", "160px", "250px"]}
              height={["200px", "160px", "250px"]}
              rounded={"full"}
            />
          </VStack>
          <VStack width={["100%", "100%", "70%"]}>
            <Text width={"100%"} fontSize={"18px"} textAlign={"justify"}>
              “All our dreams can come true, if we have the encourage to pursue
              them. Always remember, you have the strength, the patience and the
              passion to reach for the stars to change the world . Aristotle
              once said, “Educating the mind without educating the heart is no
              education at all.” Even as we impart education to match the
              advancement in technology and globalization. Today the role of a
              school is not only to pursue academic excellence but also to
              motivate and empower its students to be lifelong learners,
              critical thinker and productive members of an ever changing global
              society.
            </Text>
          </VStack>
        </HStack>
        <HStack flexDirection={"column"} width={["90%", "90%", "80%"]}>
          <Text
            width={"100%"}
            fontWeight={"500"}
            fontSize={"19px"}
            color={"tomato"}
            textAlign={"left"}
            mt={"-10px"}
          >
            “They can conquer, who believe they can.”
          </Text>
          <Text
            textAlign={"right"}
            width={"100%"}
            fontWeight={"bolder"}
            fontSize={"17px"}
            mt={"-10px"}
          >
            Parmatma Yadav
          </Text>
          <Text
            textAlign={"right"}
            width={"100%"}
            fontWeight={"bolder"}
            mt={"-10px"}
          >
            (Principal)
          </Text>
        </HStack>
        <Divider
          borderWidth={"1px"}
          borderColor={"tomato"}
          width={["90%", "90%", "80%"]}
          mt={"10px"}
        />
        <Heading
          color={"tomato"}
          width={["90%", "90%", "80%"]}
          fontSize={"25px"}
          textAlign={"left"}
          my={"15px"}
        >
          Management Team
        </Heading>
        <HStack
          width={["90", "90", "80%"]}
          justifyContent={"space-evenly"}
          flexDirection={["column", "column", "row"]}
        >
          <VStack>
            <Image
              src={principal}
              boxSize={["250px", "250px", "200px"]}
              rounded={"full"}
            />
            <Text fontSize={"20px"}>Parmatma Yadav</Text>
            <Text mt={"-10px"}>Principal</Text>
          </VStack>
          <VStack>
            <Image
              src={registrar}
              boxSize={["250px", "250px", "200px"]}
              rounded={"full"}
            />
            <Text fontSize={"20px"}>Shani Yadav</Text>
            <Text mt={"-10px"}>Registrar</Text>
          </VStack>
          <VStack>
            <Image
              src={student}
              boxSize={["250px", "250px", "200px"]}
              rounded={"full"}
            />
            <Text fontSize={"20px"}>xyz</Text>
            <Text mt={"-10px"}>Manager</Text>
          </VStack>
        </HStack>
        <Divider
          borderWidth={"1px"}
          borderColor={"tomato"}
          width={["90%", "90%", "80%"]}
          mt={"10px"}
        />
        <VStack width={["90%", "90%", "80%"]}>
          <Heading
            color={"tomato"}
            fontSize={"25px"}
            width={"100%"}
            textAlign={"left"}
            fontWeight={"500"}
          >
            Our Strength
          </Heading>
          <HStack bg={"tomato"} width={["100%"]} justifyContent={"space-evenly"} color={"white"} fontSize={"20px"} py={5} boxSizing="border-box" rounded={"sm"} flexDir={["column","row","row"]}>
            <VStack width={["100%","33%","33%"]}><HStack><PiStudentBold style={{fontSize:"30px"}}/> <Text fontSize={["30px","20px","20px"]}>Students</Text></HStack><Text fontSize={"30px"}>1000+</Text></VStack>
            <VStack width={["100%","33%","33%"]}><HStack><GiTeacher style={{fontSize:"30px"}}/> <Text fontSize={["30px","20px","20px"]}>Teachers</Text></HStack><Text fontSize={"30px"}>20+</Text></VStack>
            <VStack width={["100%","33%","33%"]}><HStack><GiHumanPyramid style={{fontSize:"30px"}}/><Text fontSize={["30px","20px","20px"]}>Other Staffs</Text></HStack><Text fontSize={"30px"}>10+</Text></VStack>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default Home;
