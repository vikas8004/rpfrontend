import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { VStack, Box, Select, Input, Button, useToast } from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";

const AllResult = () => {
  const toast = useToast();
  const initialValues = {
    term: "",
    schoolName: "",
    year: "",
    rollno: "",
    hindi: "",
    english: "",
    math: "",
    science: "",
    socialStudy: "",
    sanskrit: "",
    computer: "",
    gk: "",
    drawing: "",
    pt: "",
  };
  const validationSchema = Yup.object({
    term: Yup.string().required("Select term"),
    schoolName: Yup.string().required("Please select school"),
    year: Yup.string().required("Please select year"),
    rollno: Yup.string().required("roll no is required"),
    hindi: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("hindi number is required"),
    english: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("english number is required"),
    math: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("math number is required"),
    science: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("science number is required"),
    socialStudy: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("socialStudy number is required"),
    sanskrit: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("sanskrit number is required"),
    computer: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("computer number is required"),
    gk: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("gk number is required"),
    drawing: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("drawing number is required"),
    pt: Yup.number()
      .min(0, "number can not be negative")
      .max(50, "number can not be greater than 50")
      .required("pt number is required"),
  });
  const onSubmit = async (values, opt) => {
    // console.log(values);
    setLoading(true);
    const res = await axios.post(
      "/api/v1/result/addresult/add-all-result",
      values
    );
    if (res) {
      const status = res.data.status;
      toast({
        title: "Result",
        description: status,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      setTimeout(() => {
        opt.resetForm();
        setLoading(false);
      }, 1000);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <>
      <VStack>
        <VStack width={"90%"} marginTop={"95"}>
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
                <Field name="term">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Select
                        placeholder="Select Term"
                        {...field}
                        name="term"
                        width={"80%"}
                      >
                        <option value="quaterly">Quaterly</option>
                        <option value="halfyearly">HalfYearly</option>
                        <option value="annually">Annual</option>
                      </Select>
                    );
                  }}
                </Field>
                <ErrorMessage name="term" component={"div"} className="error" />
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
                          <option value="2023-2024">2023-2024</option>
                          {/* <option value="rbmp convent school">RBMP Convent School</option> */}
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
                <ErrorMessage
                  name="rollno"
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
                <ErrorMessage
                  name="hindi"
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
                <Field name="sanskrit">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="sanskrit"
                        {...field}
                        placeholder="Enter snaskrit no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="sanskrit"
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
                <Field name="computer">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="computer"
                        {...field}
                        placeholder="Enter computer no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="computer"
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
                <Field name="gk">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="gk"
                        {...field}
                        placeholder="Enter gk no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="gk" component={"div"} className="error" />
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
                <Field name="pt">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="pt"
                        {...field}
                        placeholder="Enter pt no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="pt" component={"div"} className="error" />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Button width={"60%"} type="submit" isLoading={loading} loadingText="Submitting">
                  Submit Form
                </Button>
              </Box>
            </Form>
          </Formik>
        </VStack>
      </VStack>
    </>
  );
};

export default AllResult;
