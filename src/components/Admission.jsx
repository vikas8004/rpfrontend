import React, { useState } from "react";
import {
  VStack,
  Button,
  Box,
  Input,
  Select,
  Heading,
  FormLabel,
  Avatar,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  CheckboxGroup,
  Image,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { doFirstLetterCapital } from "../utils/doFirstLetterCapital.jsx";
import * as Yup from "yup";

import Footer from "./Footer.jsx";
import { baseUrl } from "../utils/constnats.jsx";
const RegistrationForm = () => {
  const toast = useToast();
  const initialValues = {
    schoolName: "",
    standard: "",
    fullName: "",
    rollno: "",
    regestrationNo: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    address: "",
    caste: "",
    relegion: "",
    dob: "",
    lastSchool: "",
    aadharNo: "",
    mobileNo: "",
    image: "",
    studentSignature: "",
    subjects: [],
    gender: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("required"),
    fullName: Yup.string().required("required"),
    rollno: Yup.string().required("required"),
    standard: Yup.string().required("required"),
    regestrationNo: Yup.string(),
    fatherName: Yup.string().required("required"),
    fatherOccupation: Yup.string().required("required"),
    motherName: Yup.string().required("required"),
    address: Yup.string().required("required"),
    caste: Yup.string().required("required"),
    relegion: Yup.string().required("required"),
    dob: Yup.date().required("required"),
    lastSchool: Yup.string(),
    aadharNo: Yup.number().required("required"),
    mobileNo: Yup.number()
      .min(1000000000, "enter a valid mobile number")
      .max(9999999999, "enter a valid mobile number")
      .required("required"),
    image: Yup.mixed().required("required"),
    studentSignature: Yup.mixed().required("required"),
    subjects: Yup.array().min(1, "atlest one subject is required"),
    gender: Yup.string().required("required"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);
    opt.resetForm();
    const formData = new FormData();
    formData.append("schoolName", values.schoolName);
    formData.append("standard", values.standard);
    formData.append("fullName", values.fullName);
    formData.append("rollno", values.rollno);
    formData.append("regestrationNo", values.regestrationNo);
    formData.append("fatherName", values.fatherName);
    formData.append("fatherOccupation", values.fatherOccupation);
    formData.append("motherName", values.motherName);
    formData.append("address", values.address);
    formData.append("caste", values.caste);
    formData.append("relegion", values.relegion);
    formData.append("dob", values.dob);
    formData.append("lastSchool", values.lastSchool);
    formData.append("aadharNo", values.aadharNo);
    formData.append("mobileNo", values.mobileNo);
    formData.append("image", values.image);
    formData.append("studentSignature", values.studentSignature);
    formData.append("subjects", values.subjects);
    formData.append("gender", values.gender);
    const res = await fetch(`${baseUrl}/api/v1/student/registration`, {
      body: formData,
      method: "POST",
    });
    if (res.ok) {
      toast({
        title: "Registration",
        description: `${values.fullName} is successfully registered`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      opt.resetForm(initialValues);
    }
    setAvatar(null);
    setSign(null);
  };
  const subjects = [
    "Hindi",
    "English",
    "Mathematics",
    "Science",
    "Sst",
    "Sanskrit",
    "Computer",
    "Drawing",
    "Pt",
    "Biology",
    "Physics",
    "Chemistry",
  ];
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
  const [avatar, setAvatar] = useState();
  const [sign, setSign] = useState();
  const [loading, setLoading] = useState(false);
  const genderOpt = ["male", "female"];
  return (
    <>
      <VStack>
        <VStack mt={20} width={["100%", "70%"]} justifyContent={"flex-start"}>
          <Heading fontSize={"20px"} mb={1} color={"grey"} letterSpacing={2}>
            Regestration Form
          </Heading>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form style={{ width: "100%" }} className="regestration">
              <Box
                flexDir={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  School Name
                </FormLabel>
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
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Class
                </FormLabel>
                <Field name="standard">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Select
                          placeholder="Select Class"
                          {...field}
                          name="standard"
                          width={"80%"}
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
                  name="standard"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Student Name
                </FormLabel>
                <Field name="fullName">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="fullName"
                        {...field}
                        placeholder="Enter your Full Name"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="fullName"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Roll No
                </FormLabel>
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Registration Number
                </FormLabel>
                <Field name="regestrationNo">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="regestrationNo"
                        {...field}
                        placeholder="Enter your regestration No"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="regestrationNo"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Father's Name
                </FormLabel>
                <Field name="fatherName">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="fatherName"
                        {...field}
                        placeholder="Enter your father's Name"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="fatherName"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Father's Occupation
                </FormLabel>
                <Field name="fatherOccupation">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="fatherOccupation"
                        {...field}
                        placeholder="Enter your father's occupation"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="fatherOccupation"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Mother's Name
                </FormLabel>
                <Field name="motherName">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="motherName"
                        {...field}
                        placeholder="Enter your mother's Name"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="motherName"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Address
                </FormLabel>
                <Field name="address">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="address"
                        {...field}
                        placeholder="Enter your full address"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="address"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Caste
                </FormLabel>
                <Field name="caste">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="caste"
                        {...field}
                        placeholder="Enter your caste"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="caste"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Religion
                </FormLabel>
                <Field name="relegion">
                  {(props) => {
                    // console.log(props);
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="relegion"
                        {...field}
                        placeholder="Enter your relegion"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="relegion"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Date Of Birth
                </FormLabel>
                <Field name="dob">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="dob"
                        {...field}
                        placeholder="Enter your dob"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="date"
                        min="1995-01-01"
                        max="2024-12-31"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="dob" component={"div"} className="error" />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Last School Attended
                </FormLabel>
                <Field name="lastSchool">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="lastSchool"
                        {...field}
                        placeholder="Enter your last attended school"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="lastSchool"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Aadhar No
                </FormLabel>
                <Field name="aadharNo">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="aadharNo"
                        {...field}
                        placeholder="Enter your aadhar no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="aadharNo"
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
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Mobile No
                </FormLabel>
                <Field name="mobileNo">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="mobileNo"
                        {...field}
                        placeholder="Enter your mobile no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="mobileNo"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                mb={5}
                ml={"10%"}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Gender
                </FormLabel>
                <Field name="gender">
                  {(props) => {
                    const { form, field, meta } = props;

                    return (
                      <HStack width={"100%"}>
                        <Box width={"100%"}>
                          {genderOpt.map((opt) => {
                            return (
                              <React.Fragment key={opt}>
                                <Radio
                                  {...field}
                                  value={opt}
                                  name="gender"
                                  isChecked={field.value === opt}
                                  mr={10}
                                  colorScheme="green"
                                >
                                  {doFirstLetterCapital(opt)}
                                </Radio>
                              </React.Fragment>
                            );
                          })}
                        </Box>
                      </HStack>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="gender"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                mb={5}
                ml={"10%"}
              >
                <FormLabel htmlFor="subjects" color={"grey"}>
                  Subjects
                </FormLabel>
                <Field name="subjects">
                  {({ field }) => (
                    <HStack width={["80", "80%"]} flexWrap={"wrap"}>
                      {subjects.map((option) => (
                        <Checkbox
                          key={option}
                          {...field}
                          value={option}
                          isChecked={field.value.includes(option)}
                          colorScheme="green"
                          width={["80%", "auto"]}
                        >
                          {option}
                        </Checkbox>
                      ))}
                    </HStack>
                  )}
                </Field>
                <ErrorMessage
                  component={"div"}
                  className="error"
                  name="subjects"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Image
                </FormLabel>
                <Stack
                  flexDir={["column", "row"]}
                  justifyContent={["center", "space-between"]}
                  alignItems={"center"}
                  width={"80%"}
                >
                  <Field name="image">
                    {(props) => {
                      // console.log(props);
                      const { field, form, meta } = props;
                      const { setFieldValue } = form;
                      return (
                        <Input
                          onChange={(e) => {
                            const img = e.target.files[0];
                            if (!img) {
                              return;
                            }
                            setFieldValue("image", img);
                            const fileReader = new FileReader();
                            fileReader.readAsDataURL(img);
                            fileReader.onload = () => {
                              setAvatar(fileReader.result);
                            };
                          }}
                          focusBorderColor="tomato"
                          width={["100%", "70%"]}
                          type="file"
                        />
                      );
                    }}
                  </Field>
                  {avatar ? <Avatar src={avatar} boxSize={"60px"} /> : null}
                </Stack>
                <ErrorMessage
                  name="image"
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
                mb={1}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Signature
                </FormLabel>
                <Stack
                  flexDir={["column", "row"]}
                  justifyContent={["center", "space-between"]}
                  alignItems={"center"}
                  width={"80%"}
                >
                  <Field name="studentSignature">
                    {(props) => {
                      // console.log(props);
                      const { field, form, meta } = props;
                      const { setFieldValue } = form;
                      return (
                        <Input
                          onChange={(e) => {
                            const img = e.target.files[0];
                            if (!img) {
                              return;
                            }
                            setFieldValue("studentSignature", img);
                            const fileReader = new FileReader();
                            fileReader.readAsDataURL(img);
                            fileReader.onload = () => {
                              setSign(fileReader.result);
                            };
                          }}
                          focusBorderColor="tomato"
                          width={["100%", "70%"]}
                          type="file"
                        />
                      );
                    }}
                  </Field>
                  <Image src={sign} width={"80px"} rounded={"lg"} />
                </Stack>
                <ErrorMessage
                  name="studentSignature"
                  component={"div"}
                  className="error"
                />
              </Box>
              {/* button */}
              <Box width={"100%"} display={"flex"} mt={6} mb={8}>
                <Button
                  type="submit"
                  width={"50%"}
                  bg={"tomato"}
                  isLoading={loading}
                  loadingText="Submitting"
                  ml={"10%"}
                >
                  Register Now
                </Button>
              </Box>
            </Form>
          </Formik>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default RegistrationForm;