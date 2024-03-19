import React, { useState } from "react";
import {
  HStack,
  VStack,
  Input,
  Select,
  Checkbox,
  Radio,
  Box,
  Button,
  Heading,
  FormLabel,
  useToast,
  Text,
  RadioGroup,
  Stack,
  Avatar,
  Image,
} from "@chakra-ui/react";

import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { baseUrl, years } from "../../utils/constnats.jsx";
import axios from "axios";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
const UpdateAndForward = () => {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const toast = useToast();
  const [sub, setSub] = useState([]);
  const [data, setData] = useState(false);
  const [avatar, setAvatar] = useState();
  const [img, setImg] = useState("");
  const [sign1, setSign1] = useState("");
  const [sign, setSign] = useState();
  const [id, setId] = useState("");
  // console.log(sub);
  // console.log(stValues);
  const [stValues, setStValues] = useState({
    schoolName: "",
    standard: "",
    year: "",
    fullName: "",
    rollno: "",
    regestrationNo: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    address: "",
    category: "",
    relegion: "",
    dob: "",
    lastSchool: "",
    aadharNo: "",
    mobileNo: "",
    image: "",
    studentSignature: "",
    subjects: [],
    gender: "",
  });
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
    "Gk",
    "Biology",
    "Physics",
    "Chemistry",
    "HomeScience",
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
  const category = ["SC", "GEN", "OBC", "ST"];
  const genderOpt = ["male", "female"];
  const initialValues = {
    rollno: "",
    schoolName: "",
    year: "",
  };
  const validationSchema = Yup.object({
    rollno: Yup.string().required("required"),
    year: Yup.string().required("required"),
    schoolName: Yup.string().required("required"),
  });
  const onSubmit = async (values, opt) => {
    setLoading(true);
    // console.log(values);
    try {
      const res = await axios.post(`${baseUrl}/api/v1/student/update`, values);
      if (res) {
        toast({
          description: "Data fetched successfully",
          duration: 3000,
          position: "top-right",
          status: "success",
          isClosable: true,
        });
        const studata = res.data.data.foundStu;
        // console.log(studata);
        setLoading(false);
        setStValues({
          schoolName: studata.schoolName,
          standard: studata.standard,
          year: studata.year,
          fullName: studata.fullName,
          rollno: studata.rollno,
          regestrationNo: studata.regestrationNo,
          fatherName: studata.fatherName,
          fatherOccupation: studata.fatherOccupation,
          motherName: studata.motherName,
          address: studata.address,
          category: studata.category,
          relegion: studata.relegion,
          dob: studata.dob,
          lastSchool: studata.lastSchool,
          aadharNo: studata.aadharNo,
          mobileNo: studata.mobileNo,
          image: studata.image,
          studentSignature: studata.studentSignature,
          subjects: studata.subjects,
          gender: studata.gender,
        });
        setSub([]);
        setData(true);
        setAvatar(res.data.data.foundStu.image.secure_url);
        setSign(studata.studentSignature.secure_url);
        setImg("");
        setSign1("");
        setId(studata._id);
      }
    } catch (error) {
      // console.log(error);
      setLoading(false);
      setStValues({
        schoolName: "",
        standard: "",
        year: "",
        fullName: "",
        rollno: "",
        regestrationNo: "",
        fatherName: "",
        fatherOccupation: "",
        motherName: "",
        address: "",
        category: "",
        relegion: "",
        dob: "",
        lastSchool: "",
        aadharNo: "",
        mobileNo: "",
        image: "",
        studentSignature: "",
        subjects: [],
        gender: "",
      });
      setSub([]);
      setData(false);
      toast({
        description: error.response.data.data.message,
        status: "error",
        position: "top-right",
        isClosable: true,
        duration: 3000,
      });
    }
  };

  const sumbitHandler = async (e) => {
    setLoading1(true);
    e.preventDefault();
    const newVal = { ...stValues };
    const newSub = [...sub].join(",");
    newVal.subjects = [newSub];
    newVal.image = img;
    newVal.studentSignature = sign1;
    console.log(newVal);
    const formData = new FormData();
    formData.append("schoolName", newVal.schoolName);
    formData.append("standard", newVal.standard);
    formData.append("fullName", newVal.fullName);
    formData.append("rollno", newVal.rollno);
    formData.append("regestrationNo", newVal.regestrationNo);
    formData.append("year", newVal.year);
    formData.append("fatherName", newVal.fatherName);
    formData.append("fatherOccupation", newVal.fatherOccupation);
    formData.append("motherName", newVal.motherName);
    formData.append("address", newVal.address);
    formData.append("category", newVal.category);
    formData.append("relegion", newVal.relegion);
    formData.append("dob", newVal.dob);
    formData.append("lastSchool", newVal.lastSchool);
    formData.append("aadharNo", newVal.aadharNo);
    formData.append("mobileNo", newVal.mobileNo);
    formData.append("image", newVal.image);
    formData.append("image1", JSON.stringify(stValues.image));
    formData.append("studentSignature", newVal.studentSignature);
    formData.append(
      "studentSignature1",
      JSON.stringify(stValues.studentSignature)
    );
    formData.append("subjects", newVal.subjects);
    formData.append("gender", newVal.gender);
    formData.append("_id", id);
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/student/update-student`,
        formData
      );
      if (res) {
        console.log(res.data);
        toast({
          description: "Student updated successfully",
          duration: 3000,
          position: "top-right",
          isClosable: true,
          status: "success",
        });
        setLoading1(false);
        setStValues({
          schoolName: "",
          standard: "",
          year: "",
          fullName: "",
          rollno: "",
          regestrationNo: "",
          fatherName: "",
          fatherOccupation: "",
          motherName: "",
          address: "",
          category: "",
          relegion: "",
          dob: "",
          lastSchool: "",
          aadharNo: "",
          mobileNo: "",
          image: "",
          studentSignature: "",
          subjects: [],
          gender: "",
        });
        setAvatar(null)
        setImg(null)
        setData(false)
        
      }
    } catch (error) {
      setLoading1(false);
      toast({
        description: "something went wrong",
        duration: 3000,
        position: "top-right",
        isClosable: true,
        status: "error",
      });
    }
  };
  const changeHandler = (e) => {
    setStValues({ ...stValues, [e.target.name]: e.target.value });
  };
  const subHandler = (e) => {
    if (e.target.checked) {
      setSub([...sub, e.target.value]);
    } else {
      setSub([...sub.filter((el) => el != e.target.value)]);
    }
  };

  return (
    <VStack
      mt={4}
      width={["100%", "80%"]}
      overflowY={"scroll"}
      height={"100%"}
      sx={{
        "&::-webkit-scrollbar": {
          width: "0px", // Hide the default scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          background: "transparent", // Make the scrollbar thumb transparent
        },
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form style={{ width: "100%" }}>
          <HStack
            justifyContent={["center", "space-between"]}
            flexDirection={["column", "column", "row"]}
            width={"100%"}
            gap={["15px", "15px", "10px"]}
          >
            <Box width={["80%", "80%", "33%"]}>
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
            </Box>{" "}
            <Box width={["80%", "80%", "33%"]}>
              <Field name="year">
                {(props) => {
                  const { from, field, meta } = props;
                  return (
                    <>
                      <Select
                        placeholder="Select Year"
                        {...field}
                        name="year"
                        width={"100%"}
                        fontSize={"16px"}
                      >
                        {years.map((el, i) => {
                          return (
                            <option key={i} value={el}>
                              {el}
                            </option>
                          );
                        })}
                      </Select>
                    </>
                  );
                }}
              </Field>
              <ErrorMessage component={"div"} className="error" name="year" />
            </Box>
            <Box width={["80%", "80%", "33%"]}>
              <Field name="rollno">
                {(props) => {
                  const { from, field, meta } = props;
                  return (
                    <>
                      <Input
                        placeholder="Enter roll no"
                        {...field}
                        name="rollno"
                        width={"100%"}
                        fontSize={"16px"}
                      />
                    </>
                  );
                }}
              </Field>
              <ErrorMessage component={"div"} className="error" name="rollno" />
            </Box>
            <Box width={["80%", "60%", "20%"]} mr={[0, 2]}>
              <Button
                type={"submit"}
                width={"100%"}
                bg={"tomato"}
                isLoading={loading}
                loadingText="Fetching..."
              >
                Fetch
              </Button>
            </Box>
          </HStack>
        </Form>
      </Formik>
      <Heading fontSize={"20px"} fontWeight={"500"} letterSpacing={"2px"}>
        Student Details
      </Heading>
      {!data ? (
        <Text width={["70%"]} mx={"auto"} textAlign={"cenetr"}>
          Select the above fields correctly to update or promote the student.
        </Text>
      ) : (
        <>
          <form style={{ width: "100%" }}>
            <HStack
              justifyContent={["center", "space-between"]}
              flexDirection={["column", "column"]}
              width={"100%"}
              gap={["15px", "15px", "10px"]}
            >
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  School Name
                </FormLabel>
                <Select
                  placeholder="School"
                  name="schoolName"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.schoolName}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                >
                  <option value="rp adarsh inter college">
                    RP Adarsh Inter College Rehar Basti
                  </option>
                  <option value="rbmp convent school">
                    Ram Belas Memorial Public Convent School Bahdeela Charkaila
                    Basti
                  </option>
                </Select>
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Year
                </FormLabel>
                <Select
                  placeholder="Year"
                  name="year"
                  width={"100%"}
                  fontSize={"16px"}
                  onChange={(e) => changeHandler(e)}
                  value={stValues.year}
                  required={true}
                >
                  {years.map((el, i) => {
                    return (
                      <option value={el} key={i}>
                        {el}
                      </option>
                    );
                  })}
                </Select>
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Class
                </FormLabel>
                <Select
                  placeholder="Select class"
                  name="standard"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.standard}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                >
                  {classes.map((el, i) => {
                    return (
                      <option value={el} key={i}>
                        {el}
                      </option>
                    );
                  })}
                </Select>
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Roll No
                </FormLabel>
                <Input
                  placeholder="Select rollno"
                  name="rollno"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.rollno}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Student Name
                </FormLabel>
                <Input
                  placeholder="Enter full name"
                  name="fullName"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.fullName}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Regestration No
                </FormLabel>
                <Input
                  placeholder="Enter regestration no"
                  name="regestrationNo"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.regestrationNo}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Father's Name
                </FormLabel>
                <Input
                  placeholder="Enter father name"
                  name="fatherName"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.fatherName}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Father's Occupation
                </FormLabel>
                <Input
                  placeholder="Enter father occupation"
                  name="fatherOccupation"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.fatherOccupation}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Mother's Name
                </FormLabel>
                <Input
                  placeholder="Enter mother name"
                  name="motherName"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.motherName}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Address
                </FormLabel>
                <Input
                  placeholder="Enter address"
                  name="address"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.address}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Category
                </FormLabel>
                <Select
                  placeholder="Select categoy"
                  name="category"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.category}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                >
                  {category.map((el, i) => {
                    return (
                      <option value={el} key={i}>
                        {el}
                      </option>
                    );
                  })}
                </Select>
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Religion
                </FormLabel>
                <Input
                  placeholder="Enter religion"
                  name="relegion"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.relegion}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Date Of Birth
                </FormLabel>
                <Input
                  placeholder="Enter dob"
                  name="dob"
                  type="date"
                  width={"100%"}
                  fontSize={"16px"}
                  value={
                    stValues.dob &&
                    `${new Date(stValues.dob).getFullYear()}-${
                      new Date(stValues.dob).getMonth() + 1 > 9
                        ? new Date(stValues.dob).getMonth() + 1
                        : "0" + (new Date(stValues.dob).getMonth() + 1)
                    }-${
                      new Date(stValues.dob).getDate() > 9
                        ? new Date(stValues.dob).getDate()
                        : "0" + new Date(stValues.dob).getDate()
                    }`
                  }
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Last School Attended
                </FormLabel>
                <Input
                  placeholder="Enter last school"
                  name="lastSchool"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.lastSchool}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Aadhar No
                </FormLabel>
                <Input
                  placeholder="Enter aadhar no"
                  name="aadharNo"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.aadharNo}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
              <Box width={["80%", "80%"]}>
                <FormLabel textAlign={"left"} width={"80%"} color={"grey"}>
                  Mobile No
                </FormLabel>
                <Input
                  placeholder="Enter mobile no"
                  name="mobileNo"
                  width={"100%"}
                  fontSize={"16px"}
                  value={stValues.mobileNo}
                  required={true}
                  onChange={(e) => changeHandler(e)}
                />
              </Box>{" "}
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

                <HStack width={"100%"} ml={"10px"}>
                  <Box width={"100%"} ml={"10px"}>
                    {genderOpt.map((el, i) => {
                      return (
                        <React.Fragment key={i}>
                          <span
                            style={{
                              marginRight: "30px",
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row",
                            }}
                          >
                            <input
                              type="radio"
                              value={el}
                              onChange={(e) => changeHandler(e)}
                              name="gender"
                              id={el}
                              style={{ marginRight: "10px", fontSize: "20px" }}
                              checked={stValues.gender == el ? true : false}
                            />
                            <label htmlFor={el}>
                              {doFirstLetterCapital(el)}
                            </label>
                          </span>
                        </React.Fragment>
                      );
                    })}
                  </Box>
                </HStack>
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
                  Subjects
                </FormLabel>

                <HStack width={"100%"} ml={"10px"}>
                  <Box width={"100%"} ml={"10px"}>
                    {subjects.map((el, i) => {
                      return (
                        <React.Fragment key={i}>
                          <span
                            style={{
                              marginRight: "30px",
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row",
                            }}
                          >
                            <Checkbox
                              type="checkbox"
                              value={el}
                              onChange={(e) => subHandler(e)}
                              name={el}
                              id={el}
                              style={{ marginRight: "10px", fontSize: "20px" }}
                            >
                              {doFirstLetterCapital(el)}
                            </Checkbox>

                            {/* <label htmlFor={el}>
                              {doFirstLetterCapital(el)}
                            </label> */}
                          </span>
                        </React.Fragment>
                      );
                    })}
                  </Box>
                </HStack>
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
                  <Input
                    onChange={(e) => {
                      const img = e.target.files[0];
                      if (!img) {
                        return;
                      }
                      setImg(img);
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

                  {avatar ? <Avatar src={avatar} boxSize={"60px"} /> : null}
                </Stack>
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
                  <Input
                    onChange={(e) => {
                      const img = e.target.files[0];
                      if (!img) {
                        return;
                      }
                      setSign1(img);
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

                  <Image src={sign} width={"80px"} rounded={"lg"} />
                </Stack>
              </Box>
              {/* button */}
              <Box width={["80%", "60%", "20%"]} mr={[0, 2]}>
                <Button
                  type={"submit"}
                  width={"100%"}
                  bg={"tomato"}
                  isLoading={loading1}
                  loadingText="Updating..."
                  onClick={sumbitHandler}
                >
                  Update
                </Button>
              </Box>
            </HStack>
          </form>
        </>
      )}
    </VStack>
  );
};

export default UpdateAndForward;
