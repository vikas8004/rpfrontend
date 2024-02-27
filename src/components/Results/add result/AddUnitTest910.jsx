import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { VStack, Box, Select, Input, Button, useToast } from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "../../../utils/constnats.jsx";
import { years } from "../../../utils/constnats.jsx";
const AddUnitTestResult910 = () => {
  const toast = useToast();
  const initialValues = {
    test: "",
    schoolName: "",
    year: "",
    rollno: "",
    hindi: "",
    english: "",
    math: "",
    science: "",
    socialStudy: "",
    drawing: "",
    homeScience: "",
  };
  const validationSchema = Yup.object({
    test: Yup.string().required("Select unit test"),
    schoolName: Yup.string().required("select the school"),
    year: Yup.string().required("Please select year"),
    rollno: Yup.number().required("roll no is required"),
    hindi: Yup.number()
      .min(0, "number can not be negative")
      .max(20, "number can not be greater than 20")
      .required("hindi number is required"),
    english: Yup.number()
      .min(0, "number can not be negative")
      .max(20, "number can not be greater than 20")
      .required("english number is required"),
    math: Yup.number()
      .min(0, "number can not be negative")
      .max(20, "number can not be greater than 20"),

    science: Yup.number()
      .min(0, "number can not be negative")
      .max(20, "number can not be greater than 20")
      .required("science number is required"),
    socialStudy: Yup.number()
      .min(0, "number can not be negative")
      .max(20, "number can not be greater than 20")
      .required("socialStudy number is required"),

    drawing: Yup.number()
      .min(0, "number can not be negative")
      .max(20, "number can not be greater than 20")
      .required("drawing number is required"),
    homeScience: Yup.number()
      .min(0, "number can not be negative")
      .max(20, "number can not be greater than 20"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);

    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/result/addresult/add-unit-test-result9&10`,
        values
      );
      console.log(res.data);
      toast({
        description: "Result added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
      opt.resetForm();
    } catch (error) {
    //   console.log(error.message);
      toast({
        description: error.response.data.data.message,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
      setLoading(false);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <>
      <VStack
        width={"90%"}
        marginTop={"70px"}
        height={"80vh"}
        overflowY={"auto"}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form style={{ width: "80%" }}>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="test">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Select
                      placeholder="Select test"
                      {...field}
                      name="test"
                      width={"80%"}
                    >
                      <option value="unittest1">Unit test 1</option>
                      <option value="unittest2">Unit Test 2</option>
                      <option value="unittest3">Unit Test 3</option>
                    </Select>
                  );
                }}
              </Field>
              <ErrorMessage name="test" component={"div"} className="error" />
            </Box>
            <Box
              flexDir={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={5}
            >
              <Field name="schoolName">
                {(props) => {
                  const { form, meta, field } = props;
                  return (
                    <>
                      <Select
                        placeholder="Select School"
                        {...field}
                        name="schoolName"
                        width={"80%"}
                        fontSize={"16px"}
                      >
                        <option value="rp adarsh inter college">
                          RP Adarsh Inter College
                        </option>
                        <option value="rbmp convent school">
                          RBMP Convent School
                        </option>
                      </Select>
                    </>
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
              flexDir={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={5}
            >
              <Field name="year">
                {(props) => {
                  const { form, meta, field } = props;
                  return (
                    <>
                      <Select
                        placeholder="Select Year"
                        {...field}
                        name="year"
                        width={"80%"}
                        fontSize={"16px"}
                      >
                       {years.map((el,i)=><option value={el} key={i}>{el}</option>)}
                      </Select>
                    </>
                  );
                }}
              </Field>
              <ErrorMessage name="year" component={"div"} className="error" />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="rollno">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="rollno"
                      {...field}
                      placeholder="Enter your roll no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="rollno" component={"div"} className="error" />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="hindi">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="hindi"
                      {...field}
                      placeholder="Enter hindi no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="hindi" component={"div"} className="error" />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="english">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="rollno"
                      {...field}
                      placeholder="Enter english no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage
                name="english"
                component={"div"}
                className="error"
              />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="math">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="math"
                      {...field}
                      placeholder="Enter math no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="math" component={"div"} className="error" />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="science">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="science"
                      {...field}
                      placeholder="Enter science no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage
                name="science"
                component={"div"}
                className="error"
              />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="socialStudy">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="socialStudy"
                      {...field}
                      placeholder="Enter sst no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage
                name="socialStudy"
                component={"div"}
                className="error"
              />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="drawing">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="drawing"
                      {...field}
                      placeholder="Enter drawing no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage
                name="drawing"
                component={"div"}
                className="error"
              />
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="homeScience">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="homeScience"
                      {...field}
                      placeholder="Enter homeScience no"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage
                name="homeScience"
                component={"div"}
                className="error"
              />
            </Box>

            {/* button */}
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Button
                width={["80%", "50%"]}
                type="submit"
                bg={"tomato"}
                isLoading={loading}
                loadingText={"Submitting"}
              >
                Submit Form
              </Button>
            </Box>
          </Form>
        </Formik>
      </VStack>
    </>
  );
};

export default AddUnitTestResult910;
