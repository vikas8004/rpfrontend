import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { VStack, Box, Select, Input, Button, useToast } from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl, years } from "../../../utils/constnats.jsx";
const AllResult1112 = () => {
  const toast = useToast();
  const initialValues = {
    term: "",
    schoolName: "",
    year: "",
    rollno: "",
    hindi: "",
    english: "",
    math: "",
    bio: "",
    physics: "",
    chemistry: "",
    hinPrac: "",
    engPrac: "",
    mathPrac: "",
    bioPrac: "",
    chemisPrac: "",
    phyPrac: "",
  };
  const validationSchema = Yup.object({
    term: Yup.string().required("Select term"),
    schoolName: Yup.string().required("Please select school"),
    year: Yup.string().required("Please select year"),
    rollno: Yup.string().required("roll no is required"),
    hindi: Yup.number()
      .min(0, "number can not be negative")
      .max(70, "number can not be greater than 70")
      .required("hindi number is required"),
    english: Yup.number()
      .min(0, "number can not be negative")
      .max(70, "number can not be greater than 70")
      .required("english number is required"),
    physics: Yup.number()
      .min(0, "number can not be negative")
      .max(70, "number can not be greater than 70")
      .required("physics number is required"),
    chemistry: Yup.number()
      .min(0, "number can not be negative")
      .max(70, "number can not be greater than 70")
      .required("chemistry number is required"),
    math: Yup.number()
      .min(0, "number can not be negative")
      .max(70, "number can not be greater than 70"),
    bio: Yup.number()
      .min(0, "number can not be negative")
      .max(70, "number can not be greater than 70"),

    // prac
    hinPrac: Yup.number()
      .min(0, "number can not be negative")
      .max(30, "number can not be greater than 30"),
    engPrac: Yup.number()
      .min(0, "number can not be negative")
      .max(30, "number can not be greater than 30"),
    mathPrac: Yup.number()
      .min(0, "number can not be negative")
      .max(30, "number can not be greater than 30"),
    bioPrac: Yup.number()
      .min(0, "number can not be negative")
      .max(30, "number can not be greater than 30"),
    chemisPrac: Yup.number()
      .min(0, "number can not be negative")
      .max(30, "number can not be greater than 30"),

    phyPrac: Yup.number()
      .min(0, "number can not be negative")
      .max(30, "number can not be greater than 30"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/result/addresult/add-all-result11&12`,
        values
      );
      if (res) {
        //  console.log(res.data);
        toast({
          description: "Result added successfully",
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
    } catch (error) {
      // console.log(error);
      toast({
        status: "error",
        description: error.response.data.data.message,
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <>
      <VStack width={"100%"}>
        <VStack
          width={"90%"}
          marginTop={"70px"}
          height={"85vh"}
          overflowY={"auto"}
          scrollBehavior={"smooth"}
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
                        <option value="annually">Annually</option>
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
                <Field name="bio">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="bio"
                        {...field}
                        placeholder="Enter bio no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="bio" component={"div"} className="error" />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="physics">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="physics"
                        {...field}
                        placeholder="Enter physics no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="physics"
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
                <Field name="chemistry">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="chemistry"
                        {...field}
                        placeholder="Enter chemistry no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="chemistry"
                  component={"div"}
                  className="error"
                />
              </Box>
              {/* practical number */}
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="hinPrac">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="hinPrac"
                        {...field}
                        placeholder="Enter Hindi Prac no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="hinPrac"
                  component={"div"}
                  className="error"
                />
              </Box>{" "}
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="engPrac">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="engPrac"
                        {...field}
                        placeholder="Enter English Prac no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="engPrac"
                  component={"div"}
                  className="error"
                />
              </Box>{" "}
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="mathPrac">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="mathPrac"
                        {...field}
                        placeholder="Enter Math Prac no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="mathPrac"
                  component={"div"}
                  className="error"
                />
              </Box>{" "} 
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="bioPrac">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="bioPrac"
                        {...field}
                        placeholder="Enter Bio Prac no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="bioPrac"
                  component={"div"}
                  className="error"
                />
              </Box>{" "}
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="chemisPrac">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="chemisPrac"
                        {...field}
                        placeholder="Enter Chemis Prac no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="chemisPrac"
                  component={"div"}
                  className="error"
                />
              </Box>{" "}
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="phyPrac">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="phyPrac"
                        {...field}
                        placeholder="Enter Physics Prac no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="phyPrac"
                  component={"div"}
                  className="error"
                />
              </Box>{" "}
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
                  width={"60%"}
                  type="submit"
                  isLoading={loading}
                  loadingText="Submitting"
                >
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

export default AllResult1112;