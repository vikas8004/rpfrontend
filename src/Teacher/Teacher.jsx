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
import axios from "axios";
import { baseUrl } from "../utils/constnats.jsx";
const TeacherRegistrationForm = () => {
  const toast = useToast();
  const initialValues = {
    schoolName: "",
    year: "",
    fullName: "",
    fatherName: "",
    address: "",
    category: "",
    dob: "",
    aadharNo: "",
    mobileNo: "",
    image: "",
    subjects: [],
    gender: "",
    qualification: "",
    position: "",
    joiningDate: "",
    tid: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("required"),
    fullName: Yup.string().required("required"),
    position: Yup.string().required("required"),
    joiningDate: Yup.date().required("required"),
    year: Yup.string().required("required"),
    qualification: Yup.string().required("required"),
    fatherName: Yup.string().required("required"),
    address: Yup.string().required("required"),
    category: Yup.string().required("required"),

    dob: Yup.date().required("required"),
    aadharNo: Yup.number().required("required"),
    mobileNo: Yup.number()
      .min(1000000000, "enter a valid mobile number")
      .max(9999999999, "enter a valid mobile number")
      .required("required"),
    image: Yup.mixed().required("required"),
    // subjects: Yup.array().min(1, "atlest one subject is required"),
    gender: Yup.string().required("required"),
    tid: Yup.string().required("required"),
  });
  const onSubmit = async (values, opt) => {
    // console.log(values);
    setLoading(true);
    const formData = new FormData();
    formData.append("schoolName", values.schoolName);
    formData.append("fullName", values.fullName);
    formData.append("year", values.year);
    formData.append("fatherName", values.fatherName);
    formData.append("address", values.address);
    formData.append("category", values.category);
    formData.append("dob", values.dob);
    formData.append("aadharNo", values.aadharNo);
    formData.append("mobileNo", values.mobileNo);
    formData.append("image", values.image);
    formData.append("subjects", values.subjects);
    formData.append("gender", values.gender);
    formData.append("joiningDate", values.joiningDate);
    formData.append("qualification", values.qualification);
    formData.append("position", values.position);
    formData.append("tid", values.tid);

    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/teacher/registration`,
        formData
      );
      if (res) {
        // console.log(res);
        setLoading(false);
        opt.resetForm();
        toast({
          description: "Successfully Registered",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        description: "something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
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
  const position = [
    "Head Teacher",
    "Assistant Teacher",
    "Lecturer",
    "Principal",
    "Vice-Principal",
    "Registrar",
  ];
  const year = ["2023", "2024"];
  const category = ["SC", "GEN", "OBC", "ST"];
  const [avatar, setAvatar] = useState();
  const [sign, setSign] = useState();
  const [loading, setLoading] = useState(false);
  const genderOpt = ["male", "female"];
  return (
    <>
      <VStack overflowY={"auto"}>
        <VStack mt={1} width={["100%", "70%"]} justifyContent={"flex-start"}>
          <Heading fontSize={"20px"} mb={1} color={"grey"} letterSpacing={2}>
            Add Teacher
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
                  Year
                </FormLabel>
                <Field name="year">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Select
                          placeholder="Select year"
                          {...field}
                          name="year"
                          width={"80%"}
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
                <ErrorMessage name="year" component={"div"} className="error" />
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
                  Teacher's id
                </FormLabel>
                <Field name="tid">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="tid"
                        {...field}
                        placeholder="Enter teacher id"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="tid" component={"div"} className="error" />
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
                  Teacher Name
                </FormLabel>
                <Field name="fullName">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="fullName"
                        {...field}
                        placeholder="Enter Full Name"
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
                  Category
                </FormLabel>
                <Field name="category">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Select
                          placeholder="Select category"
                          {...field}
                          name="category"
                          width={"80%"}
                          fontSize={"16px"}
                        >
                          {category.map((ele, i) => (
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
                  name="category"
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
                  Position
                </FormLabel>
                <Field name="position">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Select
                          placeholder="Select postion"
                          {...field}
                          name="position"
                          width={"80%"}
                          fontSize={"16px"}
                        >
                          {position.map((ele, i) => (
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
                  name="position"
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
                  Joining Date
                </FormLabel>
                <Field name="joiningDate">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="joiningDate"
                        {...field}
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="date"
                        min="1995-01-01"
                        max="2025-12-31"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="joiningDate"
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
                alignItems={"center"}
                mb={5}
              >
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Qualification
                </FormLabel>
                <Field name="qualification">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="qualification"
                        {...field}
                        placeholder="Enter qualification"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="qualification"
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
    </>
  );
};

export default TeacherRegistrationForm;
