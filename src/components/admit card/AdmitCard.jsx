import React, { useContext } from "react";
import {
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Image,
  Box,
  Button,
  HStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import logo from "../../assests/logo.jpg";
import { BiRightArrow } from "react-icons/bi";
import { tokenContext } from "../../context.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";

const AdmitCard = () => {
  const { admitCard, setAdmitCard } = useContext(tokenContext);
  console.log(admitCard);
  return (
    <>
      <VStack>
        <VStack
          mt={"80px"}
          width={["100%", "90%"]}
          justifyContent={"center"}
          alignItems={"center"}
          className="admitcard"
        >
          <TableContainer
            width={["100%", "60%"]}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            border={"1px solid black"}
            padding={2}
          >
            <HStack width={"80%"} mb={3}>
              <VStack width={"20%"}>
                <Image
                  src={logo}
                  width={["80px"]}
                  justifyContent={"center"}
                  alignItems={"center"}
                />
              </VStack>
              <VStack width={"80%"} alignItems={"center"}>
                <Heading fontSize={"15px"}>
                  {admitCard?.schoolName === "rp adarsh inter college"
                    ? "R P ADARSH INTER COLLEGE REHAR BASTI"
                    : " Ram Belas Memorial Public Convent School Bahdeela Charkaila Basti"}
                </Heading>
                <Text fontWeight={500}>{`${doFirstLetterCapital(admitCard.admitCardType)} Examination-${admitCard.year}`}</Text>
                <Heading size={"md"}>Admit Card</Heading>
              </VStack>
            </HStack>
            <Table
              className="admitcard"
              variant="simple"
              colorScheme="black"
              width={["95%", "100%"]}
              size={"sm"}
              //   border={"1px solid black"}
              textAlign={"center"}
              position={"relative"}
            >
              <Tbody>
                <Tr>
                  <Th>Name</Th>
                  <Td >{doFirstLetterCapital(admitCard.fullName)}</Td>
                  <Td colSpan={3} rowSpan={3}>
                    <Image
                      src={admitCard.image.secure_url}
                      boxSize={"80px"}
                      position={"absolute"}
                      top={"10%"}
                      right={"3%"}
                      rounded={"md"}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Th>Roll No</Th>
                  <Td>{admitCard.rollno}</Td>
                </Tr>
                <Tr>
                  <Th>Class</Th>
                  <Td colSpan={2}>{admitCard.standard}</Td>
                </Tr>
                <Tr>
                  <Th>Father's Name</Th>
                  <Td colSpan={2}>{doFirstLetterCapital(admitCard.fatherName)}</Td>
                </Tr>
                <Tr>
                  <Th>Mobile No</Th>
                  <Td colSpan={2}>{admitCard.mobileNo}</Td>
                </Tr>
                <Tr>
                  <Th>Address</Th>
                  <Td colSpan={2}>{doFirstLetterCapital(admitCard.address)}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <VStack alignItems={"flex-start"} width={["100%", "60%"]}>
            <Text width={"100%"} fontSize={"20px"} fontWeight={"500"}>
              Instructions :{" "}
            </Text>
            <List spacing={0}>
              <ListItem>
                <ListIcon as={BiRightArrow} color="black.500" />
                If admit card is lost then student have to pay Rs. 50 as
                penality.
              </ListItem>
              <ListItem>
                <ListIcon as={BiRightArrow} color="black.500" />
                If any student is caught doing cheating during the exam he/she
                would be thrown out of the exam.
              </ListItem>
            </List>
            <HStack width={"100%"} justifyContent={"space-between"} mt={7}>
              <Box width={"30%"} borderBottom={"1px dotted black"}></Box>
              <Box width={"30%"} borderBottom={"1px dotted black"}></Box>
            </HStack>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Box width={"30%"} textAlign={"center"}>
                Class Teacher
              </Box>
              <Box width={"30%"} textAlign={"center"}>
                Principal
              </Box>
            </HStack>
          </VStack>
          <Button
            mt={2}
            colorScheme="orange"
            mb={"4"}
            onClick={() => {
              window.print();
            }}
            className="printResult"
          >
            Print Admit Card
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default AdmitCard;
