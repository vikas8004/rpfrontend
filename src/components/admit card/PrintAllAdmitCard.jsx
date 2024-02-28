import React, { useContext } from "react";
import {
  HStack,
  Box,
  Button,
  Select,
  useToast,
  Heading,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import { fixDateIssue } from "../../utils/fixDateIssue.jsx";
import { tokenContext } from "../../context";
import logo from "../../assests/logo.jpg";
import { BiRightArrow } from "react-icons/bi";
import lessOpaque from "../../assests/lessOpaque.png"
const PrintAllAdmitCard = () => {
  const { admitCard } = useContext(tokenContext);
  console.log(admitCard);
  const navigate = useNavigate();
  return (
    <HStack width={"100%"} flexDir={"column"} className="admitcard2"height={"100vh"}>
      {admitCard ? (
        admitCard.foundedRes.map((el, i) => {
          // console.log(el);
          return (
            <VStack key={i} zIndex={"-67"} width={"100%"} height={"50%"}>
              <VStack
                
                width={["100%", "90%"]}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TableContainer
                  width={["100%", "100%"]}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  border={"1px solid black"}
                  padding={1}
                  bgImage={lessOpaque}
                  backgroundPosition={"center"}
                  backgroundSize={"contain"}
               
                 bgRepeat={"no-repeat"}
                
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
                      <Heading fontSize={"15px"} ml={10}>
                        {el?.schoolName === "rp adarsh inter college"
                          ? "R P ADARSH INTER COLLEGE REHAR BASTI"
                          : " Ram Belas Memorial Public Convent School Bahdeela Charkaila Basti"}
                      </Heading>
                      <Text fontWeight={500} >{`${doFirstLetterCapital(
                        admitCard.term
                      )} Examination-${el.year}`}</Text>
                      <Heading size={"md"} >Admit Card</Heading>
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
                        <Td>{doFirstLetterCapital(el.fullName)}</Td>
                        <Td colSpan={3} rowSpan={3}>
                          <Image
                            src={el.image.secure_url}
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
                        <Td>{el.rollno}</Td>
                      </Tr>
                      <Tr>
                        <Th>Class</Th>
                        <Td colSpan={2}>{el.standard}</Td>
                      </Tr>
                      <Tr>
                        <Th>Father's Name</Th>
                        <Td colSpan={2}>
                          {doFirstLetterCapital(el.fatherName)}
                        </Td>
                      </Tr>
                      <Tr>
                        <Th>Gender</Th>
                        <Td colSpan={2}>{el.gender}</Td>
                      </Tr>
                      <Tr>
                        <Th>Dob</Th>
                        <Td colSpan={2}>{fixDateIssue(el.dob)}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <VStack alignItems={"flex-start"} width={["100%", "100%"]}>
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
                      If any student is caught doing cheating during the exam
                      he/she would be thrown out of the exam.
                    </ListItem>
                  </List>
                  <HStack
                    width={"100%"}
                    justifyContent={"space-between"}
                    mt={3}
                  >
                    <Box width={"30%"} borderBottom={"1px dotted black"}></Box>
                    <Box width={"30%"} borderBottom={"1px dotted black"}></Box>
                  </HStack>
                  <HStack width={"100%"} 
                  justifyContent={"space-between"}
                  >
                    <Box width={"30%"} textAlign={"center"}>
                      Class Teacher
                    </Box>
                    <Box width={"30%"} textAlign={"center"} >
                      Principal
                    </Box>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          );
        })
      ) : (
        <>
          <Button
            onClick={() =>
              navigate("/dashboard/student/admitcard/print-admit-card")
            }
            bg={"tomato"}
            mt={"10"}
          >
            Go To AdmitCard
          </Button>
        </>
      )}
    </HStack>
  );
};

export default PrintAllAdmitCard;
