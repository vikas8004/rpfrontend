import React, { useEffect, useState } from "react";
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
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../utils/constnats.jsx";
import axios from "axios";

import logo from "../../assests/logo.jpg";
import { BiRightArrow } from "react-icons/bi";
import { tokenContext } from "../../context.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import { fixDateIssue } from "../../utils/fixDateIssue.jsx";
const PrintAdmitCard = () => {
  const initialValues = {
    schoolName: "",
    standard: "",
    term: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("required"),
    standard: Yup.string().required("required"),
    term: Yup.string().required("required"),
  });
  const onSubmit = (values) => {
    setLoading(true);
    console.log(values);
    axios
      .post(`${baseUrl}/api/v1/student/admitcard/print-admit-card`, values)
      .then((stu) => {
        console.log(stu);
        if (stu.status === 200) {
          console.log(stu.data);
          toast({
            description: "Data fetched successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });

          // console.log(stu.data);
          setData(stu.data.data);
          // console.log(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setData("");
        toast({
          description: "No record found",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });

        setLoading(false);
      });

    setLoading(false);
  };
  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ];
  const term = ["quaterly", "halfyearly", "annually"];
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  return (
    <>
      <VStack width={"100%"} height={"100%"}>
        <HStack width={"100%"} className="admitcard-fetchDetails">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{ width: "100%" }}>
              <HStack justifyContent={"space-between"}>
                <Box width={["80%", "33%"]}>
                  <Field name="schoolName">
                    {(props) => {
                      const { from, field, meta } = props;
                      return (
                        <>
                          <Select
                            placeholder="School"
                            {...field}
                            name="schoolName"
                            width={"100%"}
                            fontSize={"16px"}
                          >
                            <option value="rp adarsh inter college">
                              RP Adarsh Inter College Rehar Basti
                            </option>
                            <option value="rbmp convent school">
                              Ram Belas Memorial Public Convent School Bahdeela
                              Charkaila Basti
                            </option>
                          </Select>
                        </>
                      );
                    }}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    className="error"
                    name="schoolName"
                  />
                </Box>

                <Box width={["80%", "20%"]}>
                  <Field name="standard">
                    {(props) => {
                      const { form, meta, field } = props;
                      return (
                        <>
                          <Select
                            placeholder="Class"
                            {...field}
                            name="standard"
                            width={"100%"}
                            fontSize={"16px"}
                          >
                            {classes.map((ele, i) => (
                              <option key={i} value={ele}>
                                {ele}
                              </option>
                            ))}
                          </Select>
                        </>
                      );
                    }}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    className="error"
                    name="standard"
                  />
                </Box>
                <Box width={["80%", "33%"]}>
                  <Field name="term">
                    {(props) => {
                      const { form, meta, field } = props;
                      return (
                        <>
                          <Select
                            placeholder="Term"
                            {...field}
                            name="term"
                            width={"100%"}
                            fontSize={"16px"}
                          >
                            {term.map((ele, i) => (
                              <option key={i} value={ele}>
                                {doFirstLetterCapital(ele)}
                              </option>
                            ))}
                          </Select>
                        </>
                      );
                    }}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    className="error"
                    name="term"
                  />
                </Box>
                <Box width={["80%", "20%"]} mr={2}>
                  <Button
                    type={"submit"}
                    width={"100%"}
                    variant={"outline"}
                    colorScheme="blue"
                    isLoading={loading}
                    loadingText="Fetching..."
                  >
                    Fetch
                  </Button>
                </Box>
              </HStack>
            </Form>
          </Formik>
        </HStack>
        <HStack width={"100%"} flexDir={"column"} className="admitcard2">
          {data ? (
            data.foundedRes.map((el, i) => {
              // console.log(el);
              return (
                <VStack key={i}>
                  <VStack
                    mt={"10px"}
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
                          <Heading fontSize={"15px"} ml={10}>
                            {el?.schoolName === "rp adarsh inter college"
                              ? "R P ADARSH INTER COLLEGE REHAR BASTI"
                              : " Ram Belas Memorial Public Convent School Bahdeela Charkaila Basti"}
                          </Heading>
                          <Text fontWeight={500}>{`${doFirstLetterCapital(
                            data.term
                          )} Examination-${el.year}`}</Text>
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
                          If admit card is lost then student have to pay Rs. 50
                          as penality.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={BiRightArrow} color="black.500" />
                          If any student is caught doing cheating during the
                          exam he/she would be thrown out of the exam.
                        </ListItem>
                      </List>
                      <HStack
                        width={"100%"}
                        justifyContent={"space-between"}
                        mt={4}
                      >
                        <Box
                          width={"30%"}
                          borderBottom={"1px dotted black"}
                        ></Box>
                        <Box
                          width={"30%"}
                          borderBottom={"1px dotted black"}
                        ></Box>
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
                  </VStack>
                </VStack>
              );
            })
          ) : (
            <>
              <Text>Nothing to show</Text>
            </>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default PrintAdmitCard;
