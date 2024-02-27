import React, { useContext } from "react";
import {
  VStack,
  HStack,
  Box,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import { tokenContext } from "../../context.jsx";
import logo from "../../assests/logo.png";
import { fixDateIssue } from "../../utils/fixDateIssue.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import { useNavigate } from "react-router-dom";
import lessOpaque from "../../assests/lessOpaque.png"
const AdmissionPdf = () => {
  const { regestrationPdf } = useContext(tokenContext);
  console.log(regestrationPdf);
  const navigate = useNavigate();
  return (
    <>
      <VStack
        mt={"60px"}
        maxWidth={"700px"}
        className="admissionPdf"
        overflowY={"auto"}
        mx={"auto"}
        // border={"1px solid black"}
        bgImage={lessOpaque}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        <HStack width={"100%"} mt={"5px"}>
          <VStack width={"15%"} mt={-2} p={3}>
            <Image src={logo} boxSize={"60px"} />
          </VStack>
          <Heading
            as={"h3"}
            size={"md"}
            fontWeight={"500"}
            width={"85%"}
            textAlign={"center"}
            fontSize={"30px"}
            zIndex={100}
            color={"blue"}
            v
          >
            {regestrationPdf.schoolName === "rp adarsh inter college"
              ? "RP Adarsh Inter College Rehar Basti"
              : "RBMP Convent School Charkaila Bahdeela Basti"}
          </Heading>
        </HStack>
        <HStack width={"90%"} justifyContent="space-between" mt={"0px"}>
          <VStack width={"100%"}>
            <Heading
              fontWeight={"bolder"}
              fontSize={"20px"}
              px={1}
              textAlign={"center"}
              mt={"-25px"}
              
              ml={"50px"}
              
            >
              Admission Form {`${regestrationPdf.year}`}
            </Heading>
          </VStack>
          <VStack mt={"-10px"}>
            <Image
              src={regestrationPdf.image.secure_url}
              width={"130px"}
              height={"130px"}
              rounded={"md"}
            />
          </VStack>
        </HStack>
        <VStack width={"90%"} mt={"-35px"}>
          <Text width={"90%"} fontSize={"20px"}>
            S.No ...........
          </Text>
          <VStack width={"90%"}>
            <Text width={"100%"} fontWeight={"500"}>
              Name of Student : {doFirstLetterCapital(regestrationPdf.fullName)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Roll No of Student :{" "}
              {doFirstLetterCapital(regestrationPdf.rollno)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Registration No :{" "}
              {doFirstLetterCapital(regestrationPdf.regestrationNo)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Class : {doFirstLetterCapital(regestrationPdf.standard)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Father's Name : {doFirstLetterCapital(regestrationPdf.fatherName)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Father's Occupation :{" "}
              {doFirstLetterCapital(regestrationPdf.fatherOccupation)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Mother's Name : {doFirstLetterCapital(regestrationPdf.motherName)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Address : {doFirstLetterCapital(regestrationPdf.address)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Category : {doFirstLetterCapital(regestrationPdf.category)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Relegion : {doFirstLetterCapital(regestrationPdf.relegion)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Date Of Birth : {fixDateIssue(regestrationPdf.dob)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              LastSchool : {doFirstLetterCapital(regestrationPdf.lastSchool)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Aadhar No : {regestrationPdf.aadharNo}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Gender : {doFirstLetterCapital(regestrationPdf.gender)}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Mobile No : {regestrationPdf.mobileNo}
            </Text>
            <Text width={"100%"} fontWeight={"500"}>
              Subjects : {doFirstLetterCapital(regestrationPdf.subjects[0])}
            </Text>
          </VStack>
        </VStack>
      </VStack>
      <VStack maxWidth={"700px"} mx={"auto"}>
        {" "}
        <HStack>
          <Button
            onClick={() => window.print()}
            bg={"tomato"}
            mb={"20px"}
            size={"md"}
            color={"white"}
            className="noPrint"
          >
            Print
          </Button>
          <Button
            onClick={() => navigate("/dashboard/student/registration")}
            bg={"tomato"}
            mb={"20px"}
            size={"md"}
            py={"1"}
            color={"white"}
            className="noPrint"
          >
            Admission
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default AdmissionPdf;
