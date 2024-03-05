import React, { useContext, useState } from "react";
import {
  HStack,
  VStack,
  Input,
  Select,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { baseUrl } from "../../utils/constnats.jsx";
import axios from "axios";
import * as Yup from "yup";
import { tokenContext } from "../../context.jsx";
import { years } from "../../utils/constnats.jsx";
import { useNavigate } from "react-router-dom";
const UnitTestResult = () => {
  const initialValues = {
    test: "",
    year: "",
    schoolName: "",
    rollno: "",
  };
  const validationSchema = Yup.object({
    test: Yup.string().required("required"),
    year: Yup.string().required("required"),
    schoolName: Yup.string().required("required"),
    rollno: Yup.string().required("required"),
  });
  const onSubmit = async (values, opt) => {
    setLoading(true);
    // console.log(values);
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/student/all-unit-test-result`,
        values
      );
      if (res) {
        // console.log(res.data.data);
        setLoading(false);
        setUtResult(res.data.data);
        toast({
          description: "result fetched successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/show-unit-test-result")
        }, 1000);
      }
    } catch (error) {
      // console.log(error);
      setLoading(false);
      toast({
        description: error.response.data.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { setUtResult} = useContext(tokenContext);
  return (
    <>
      <HStack mt={"60px"} width={"full"}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form style={{ width: "100%" }}>
            <VStack
              width={"100%"}
              justifyContent={"center"}
              mt={"20"}
              gap={"15px"}
            >
              <Box
                width={["70%", "60%", "50%", "40%"]}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Field name={"test"}>
                  {({ field }) => {
                    // console.log(field);
                    return (
                      <Select
                        name={"test"}
                        {...field}
                        placeholder="Select test"
                        width={["100%", "80%", "90%", "80%"]}
                      >
                        <option value={"unittest1"}>Unit Test 1</option>
                        <option value={"unittest2"}>Unit Test 2</option>
                        <option value={"unittest3"}>Unit Test 3</option>
                      </Select>
                    );
                  }}
                </Field>
                <ErrorMessage name="test" component={"div"} className="error" />
              </Box>
              <Box
                width={["70%", "60%", "50%", "40%"]}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Field name={"schoolName"}>
                  {({ field }) => {
                    // console.log(field);
                    return (
                      <Select
                        name={"schoolName"}
                        {...field}
                        placeholder="Select school"
                        width={["100%", "80%", "90%", "80%"]}
                      >
                        <option value={"rp adarsh inter college"}>
                          RP Adarsh Inter College
                        </option>
                        <option value={"rbmp convent school"}>
                          RBMP Convent School
                        </option>
                      </Select>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="schoolName"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                width={["70%", "60%", "50%", "40%"]}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Field name={"year"}>
                  {({ field }) => {
                    // console.log(field);
                    return (
                      <Select
                        name={"year"}
                        {...field}
                        placeholder="Select year"
                        width={["100%", "80%", "90%", "80%"]}
                      >
                        {years.map((el, i) => {
                          return (
                            <option key={i} value={el}>
                              {el}
                            </option>
                          );
                        })}
                      </Select>
                    );
                  }}
                </Field>
                <ErrorMessage name="year" component={"div"} className="error" />
              </Box>
              <Box
                width={["70%", "60%", "50%", "40%"]}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Field name={"rollno"}>
                  {({ field }) => {
                    // console.log(field);
                    return (
                      <Input
                        name={"rollno"}
                        {...field}
                        placeholder="Enter roll no"
                        width={["100%", "80%", "90%", "80%"]}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="rollno"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                width={["70%", "60%", "50%", "40%"]}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Button
                  type="submit"
                  bgColor={"tomato"}
                  width={["100%", "80%", "90%", "80%"]}
                  isLoading={loading}
                  loadingText={"Fetching..."}
                >
                  {" "}
                  View
                </Button>
              </Box>
            </VStack>
          </Form>
        </Formik>
      </HStack>
    </>
  );
};

export default UnitTestResult;
