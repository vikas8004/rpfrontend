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
import logo from "../../assests/logo.jpg";
import { fixDateIssue } from "../../utils/fixDateIssue.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import {useNavigate} from "react-router-dom"
const AdmissionPdf = () => {
  const { regestrationPdf } = useContext(tokenContext);
//   console.log(regestrationPdf);
  const navigate=useNavigate()
  return (
    <>
      <VStack
        mt={"60px"}
        width={"100%"}
        height={"90vh"}
        className="admissionPdf"
        overflowY={"auto"}
      >
        <HStack width={"83%"} justifyContent={"flex-end"}>
          <VStack>
            <Image src={logo} boxSize={"60px"} />
          </VStack>
          <Heading
            as={"h3"}
            size={"md"}
            fontWeight={"500"}
            width={"90%"}
            textAlign={"center"}
            fontSize={"25px"}
            zIndex={100}
            mt={"-20px"}
          >
            {regestrationPdf.schoolName === "rp adarsh inter college"
              ? "RP Adarsh Inter College Rehar Basti"
              : "Ram Belas Memorial Public Convent School Charkaila Bahdeela Basti"}
          </Heading>
          <VStack>
            <Image
              src={regestrationPdf.image.secure_url}
              boxSize={"70px"}
              rounded={"md"}
              position={"relative"}
              top={"30px"}
              right={"5px"}
            />
          </VStack>
        </HStack>
        <HStack width={"90%"} justifyContent="space-between">
          <VStack width={"100%"}>
            <Heading
              fontWeight={"400"}
              fontSize={"23px"}
              width={"100%"}
              textAlign={"center"}
              mt={"-25px"}
            >
              Admission Form {"2023-2024"}
            </Heading>
          </VStack>
        </HStack>
        <VStack width={"100%"} mt={"-15px"}>
          <Text width={"78%"}>S.No ...........</Text>
          <TableContainer width={"80%"} border={"2px solid black"}>
            <Table variant="simple" size={"sm"} width={"100%"}>
              <Tbody width={"100%"}>
                <Tr width={"100%"} borderBottom={"1px solid black"}>
                  <Td width={"30%"}>Name</Td>
                  <Td width={"40%"}>
                    {doFirstLetterCapital(regestrationPdf.fullName)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Roll No</Td>
                  <Td>{regestrationPdf.rollno}</Td>
                </Tr>
                <Tr>
                  <Td>Registration No</Td>
                  <Td>{regestrationPdf.regestrationNo}</Td>
                </Tr>
                <Tr>
                  <Td>Class</Td>
                  <Td>{regestrationPdf.standard}</Td>
                </Tr>
                <Tr>
                  <Td>Father's Name</Td>
                  <Td>{doFirstLetterCapital(regestrationPdf.fatherName)}</Td>
                </Tr>
                <Tr>
                  <Td>Father's Occupation</Td>
                  <Td>
                    {doFirstLetterCapital(regestrationPdf.fatherOccupation)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Mother's name</Td>
                  <Td>{doFirstLetterCapital(regestrationPdf.motherName)}</Td>
                </Tr>
                <Tr>
                  <Td>Address</Td>
                  <Td>{doFirstLetterCapital(regestrationPdf.address)}</Td>
                </Tr>
                <Tr>
                  <Td>Category</Td>
                  <Td>{regestrationPdf.category}</Td>
                </Tr>
                <Tr>
                  <Td>Relegion</Td>
                  <Td>{doFirstLetterCapital(regestrationPdf.relegion)}</Td>
                </Tr>
                <Tr>
                  <Td>Date of Birth</Td>
                  <Td>{fixDateIssue(regestrationPdf.dob)}</Td>
                </Tr>
                <Tr>
                  <Td>Last School</Td>
                  <Td>{doFirstLetterCapital(regestrationPdf.lastSchool)}</Td>
                </Tr>
                <Tr>
                  <Td>Aadhar No</Td>
                  <Td>{regestrationPdf.aadharNo}</Td>
                </Tr>
                <Tr>
                  <Td>Gender</Td>
                  <Td>{doFirstLetterCapital(regestrationPdf.gender)}</Td>
                </Tr>
                <Tr>
                  <Td>Mobile No</Td>
                  <Td>{regestrationPdf.mobileNo}</Td>
                </Tr>
                <Tr>
                  <Td>Subjects</Td>
                  <Td>{regestrationPdf.subjects[0]}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
        <HStack>
          <Button
            onClick={() => window.print()}
            bg={"tomato"}
            mb={"20px"}
            size={"md"}
            
            color={"white"}className="noPrint"
          >
            Print
          </Button>
          <Button
            onClick={() =>navigate("/dashboard/student/registration")}
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
