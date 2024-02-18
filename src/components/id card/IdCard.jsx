import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Select,
  Heading,
  Input,
  useToast,
  Avatar,
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../utils/constnats.jsx";
import axios from "axios";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";

const IdCard = () => {
  const initialValues = {
    schoolName: "",
    standard: "",
    rollno: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("required"),
    standard: Yup.string().required("required"),
    rollno: Yup.string().required("required"),
  });
  const onSubmit = (values) => {
    setLoading(true);
    console.log(values);
    axios
      .post(`${baseUrl}/api/v1/student/idcard`, values)
      .then((stu) => {
        // console.log(stu);
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
  const year = ["2023-2024", "2024-2025"];
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  return (
    <>
      <VStack width={"100%"} height={"100%"}>
        <HStack width={"90%"} justifyContent={"flex-end"}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{ width: "100%" }}>
              <HStack
                justifyContent={"space-between"}
                flexWrap={["wrap", "nowrap"]}
              >
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
                  <Field name="rollno">
                    {(props) => {
                      const { form, meta, field } = props;
                      return (
                        <>
                          <Input
                            placeholder="Rollno"
                            {...field}
                            name="rollno"
                            width={"100%"}
                            fontSize={"16px"}
                          ></Input>
                        </>
                      );
                    }}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    className="error"
                    name="rollno"
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
        <HStack width={"100%"} justifyContent="center" mt={10}>
          {data ? (
            <VStack boxShadow="xl" rounded={"xl"} width={"250px"}>
              <VStack
                bg={"rgb(255, 99, 71)"}
                width={"100%"}
                borderBottomLeftRadius={"1000px"}
                borderBottomRightRadius={"1000px"}
                pt={1}
                color={"white"}
              >
                {data.schoolName === "rp adarsh inter college" ? (
                  <>
                    <Heading as={"h3"} size="5xl" flexDir={"column"}>
                      RP Adarsh Inter College
                    </Heading>
                    <Text>Rehar Basti</Text>
                  </>
                ) : (
                  <>
                    <Heading as={"h3"} size="5xl" flexDir={"column"}>
                     RBYM Public Convent School
                    </Heading>
                    <Text>Bahdeela Charkaila Basti</Text>
                  </>
                )}
                <Box
                  border={"3px solid white"}
                  width={"85"}
                  rounded={"50%"}
                  mb={"-2px"}
                >
                  <Avatar boxSize={"80px"} border={"3px solid tomato"} src={data.image.secure_url}/>
                </Box>
              </VStack>
              <HStack justifyContent={"space-between"} width={"100%"} px={3}>
                <VStack width={"30%"}>
                  <Text width={"100%"}>Name </Text>
                  <Text width={"100%"}>Gender</Text>
                  <Text width={"100%"}>Roll No</Text>
                  <Text width={"100%"}>Class</Text>
                  <Text width={"100%"}>Guardian</Text>
                  <Text width={"100%"}>Phone</Text>
                  <Text width={"100%"}>Signature</Text>
                </VStack>
                <VStack width={"60%"}>
                  <Text width={"100%"}>{doFirstLetterCapital(data.fullName)}</Text>
                  <Text width={"100%"}>{doFirstLetterCapital(data.gender)}</Text>
                  <Text width={"100%"}> {data.rollno}</Text>
                  <Text width={"100%"}> {data.standard}</Text>
                  <Text width={"100%"}>{doFirstLetterCapital(data.fatherName)}</Text>
                  <Text width={"100%"}> {data.mobileNo}</Text>
                  <Text width={"100%"} >........................</Text>
                </VStack>
              </HStack>
              <HStack width={"100%"} bg={"tomato"}>
                <Text color={"white"} textAlign={"center"} width={"100%"} noOfLines={1}>
                {`Add : ${doFirstLetterCapital(data.address)}`}
                </Text>
              </HStack>
            </VStack>
          ) : (
            <Text mt={5}>
              Selcet the required field and click fetch buttton
            </Text>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default IdCard;
