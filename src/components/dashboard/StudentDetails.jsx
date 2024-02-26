import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Image,
  useToast 
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../utils/constnats.jsx";
import axios from "axios";

import { MdEditNote } from "react-icons/md";
const StudentDetails = () => {
  const initialValues = {
    schoolName: "",
    standard: "",
    year: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("required"),
    standard: Yup.string().required("required"),
    year: Yup.string().required("required"),
  });
  const onSubmit = (values) => {
    setLoading(true);
    console.log(values);
    axios
      .post(`${baseUrl}/api/v1/student/details`, values)
      .then((stu) => {
        // console.log(stu);
        if (stu.status === 200) {
          toast({
            
            description: "Data fetched successfully",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:"top-right"
          })
        
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
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:"top-right"
        })
      
        setLoading(false);
      });

    
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
  const year = ["2023-2024", "2024-2025"];
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalStudentRPAIC, setTotalStudentRPAIC] = useState(0);
  const [totalStudentRBMP, setTotalStudentRBMP] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast=useToast()

  useEffect(() => {
    fetch(`${baseUrl}/api/v1/student/totalstudent`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        res.data.map((el) => {
          if (el._id === "rp adarsh inter college") {
            setTotalStudentRPAIC(el.count);
          } else {
            setTotalStudentRBMP(el.count);
          }
        });
      });
  }, []);
  return (
    <>
      <VStack width={"100%"} height={"100%"} mt={"10px"}>
        <VStack width={"95%"} paddingX={"0"}>
          <HStack justifyContent={"space-between"} width={"100%"}>
            <Box letterSpacing={"2px"}>RBYMPCS</Box>
            <Box>{totalStudentRBMP}</Box>
          </HStack>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Box letterSpacing={"2px"}>RPAIC</Box>
            <Box>{totalStudentRPAIC}</Box>
          </HStack>
        </VStack>
        <HStack width={"100%"}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{ width: "100%" }}>
              <HStack justifyContent={"space-between"}>
                <Box width={["80%","33%"]}>
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

                <Box width={["80%","20%"]}>
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
                <Box width={["80%","33%"]}>
                  <Field name="year">
                    {(props) => {
                      const { form, meta, field } = props;
                      return (
                        <>
                          <Select
                            placeholder="Year"
                            {...field}
                            name="year"
                            width={"100%"}
                            fontSize={"16px"}
                          >
                            {year.map((ele, i) => (
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
                    name="year"
                  />
                </Box>
                <Box width={["80%","20%"]} mr={2}>
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
        <HStack width={"100%"} justifyContent="center" overflowY={"scroll"}>
          {data ? (
            <TableContainer width={"100%"}>
              <Table variant="simple" width={"100%"} size={"sm"}>
                <TableCaption placement="top">Student's List</TableCaption>
                <Thead width={"100%"}>
                  <Tr width={"100%"}>
                    <Th textAlign={"center"} width={"20%"}>
                      S.No
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      Name
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      Roll No
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      {/* Edit */}
                      Dob
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      Image
                    </Th>
                  </Tr>
                </Thead>
                <Tbody width={"100%"}>
                  {data?.map((ele, i) => {
                    return (
                      <Tr width={"100%"} key={i}>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"10%"}
                        >
                          {i + 1}
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"30%"}
                        >
                          {ele.fullName.toUpperCase()}
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"20%"}
                        >
                          {ele.rollno}
                        </Td>
                        <Td
                          textAlign={"center"}
                          justifyContent={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"20%"}
                        >
                          {/* <Button bg={"transparent"} _hover={{ bg: "none" }}>
                            <MdEditNote style={{ fontSize: "30px" }} />
                          </Button> */}
                          {new Date(ele.dob).toLocaleDateString()}
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"20%"}
                        >
                          <Avatar src={ele.image.secure_url} />
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Text mt={5}>Nothing To Show</Text>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default StudentDetails;
