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
  Divider,
} from "@chakra-ui/react";
import { tokenContext } from "../../context.jsx";
import logo from "../../assests/logo.png";
import { fixDateIssue } from "../../utils/fixDateIssue.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import { useNavigate } from "react-router-dom";
import lessOpaque from "../../assests/lessOpaque.png";
const AdmissionPdf = () => {
  const { regestrationPdf } = useContext(tokenContext);
  // console.log(regestrationPdf);
  const navigate = useNavigate();
  return (
    <>
      <VStack
        mt={"60px"}
        maxWidth={"700px"}
        className="admissionPdf"
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
              mt={"-35px"}
              ml={"50px"}
            >
              Admission Form {`${regestrationPdf.year}`}
            </Heading>
          </VStack>
          <VStack mt={"-10px"}>
            <Image
              src={regestrationPdf.image.secure_url}
              width={"130px"}
              height={"100px"}
              rounded={"sm"}
            />
            <Image
              src={regestrationPdf.studentSignature.secure_url}
              width={"130px"}
              height={"25px"}
              rounded={"sm"}
              mt={"-6px"}
            />
          </VStack>
        </HStack>
        <VStack width={"90%"} mt={"-75px"}>
          <Text width={"90%"} fontSize={"20px"}>
            S.No ...........
          </Text>
          <VStack width={"90%"}>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Name of Student : {doFirstLetterCapital(regestrationPdf.fullName)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Roll No of Student :{" "}
              {doFirstLetterCapital(regestrationPdf.rollno)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Registration No :{" "}
              {doFirstLetterCapital(regestrationPdf.regestrationNo)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Class : {doFirstLetterCapital(regestrationPdf.standard)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Father's Name : {doFirstLetterCapital(regestrationPdf.fatherName)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Father's Occupation :{" "}
              {doFirstLetterCapital(regestrationPdf.fatherOccupation)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Mother's Name : {doFirstLetterCapital(regestrationPdf.motherName)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Address : {doFirstLetterCapital(regestrationPdf.address)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Category : {doFirstLetterCapital(regestrationPdf.category)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Relegion : {doFirstLetterCapital(regestrationPdf.relegion)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Date Of Birth : {fixDateIssue(regestrationPdf.dob)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              LastSchool : {doFirstLetterCapital(regestrationPdf.lastSchool)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Aadhar No : {regestrationPdf.aadharNo}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Gender : {doFirstLetterCapital(regestrationPdf.gender)}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Mobile No : {regestrationPdf.mobileNo}
            </Text>
            <Text width={"100%"} fontWeight={"500"} mt={"-2px"}>
              Subjects : {doFirstLetterCapital(regestrationPdf.subjects[0])}
            </Text>
          </VStack>
        </VStack>
        <VStack width={"90%"} mt={"-7px"}>
          <Heading fontSize={"18px"} width={"90%"} fontWeight={"600"}>
            Instructions :{" "}
          </Heading>
          <Text width={"90%"} textAlign={"justify"} fontWeight={"400"}mt={"-8px"}>
            1. Students are advised to maintain a standard of a good manner and
            and be in discipline.
          </Text>
          <Text width={"90%"} textAlign={"justify"} fontWeight={"400"}mt={"-8px"}>
            2. All the rules and regulation of the school must be followed by
            each students.
          </Text>
          <Text width={"90%"} textAlign={"justify"} fontWeight={"400"}mt={"-8px"}>
            3. Admission of the child without TC form & other documents shall be
            deemed as Provisional Admission and is liable to be cancelled unless
            al mandatory documents are sumitted within 10 days of admission.
          </Text> 
          <Text width={"90%"} textAlign={"justify"} fontWeight={"400"}mt={"-8px"}>
            4. Assessment test is compulsory for all candidates seeking fresh admission to school. No candidate will be admitted unless he/she has appeared in the test.
          </Text>
          <Text textAlign={"right"} width={"100%"} fontWeight={"700"} mt={"5px"}>Principal</Text>
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
          <Button
            onClick={() => navigate("/dashboard/student/registrationpdf")}
            bg={"tomato"}
            mb={"20px"}
            size={"md"}
            py={"1"}
            color={"white"}
            className="noPrint"
          >
            Print Other
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default AdmissionPdf;
