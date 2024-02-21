import React, { useContext, useState } from "react";
import {
  VStack,
  Button,
  Box,
  Text,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { tokenContext } from "../../context.jsx";
import { baseUrl } from "../../utils/constnats.jsx";
import { useNavigate } from "react-router-dom";

const FinalResult = () => {
  const initialValues = {
    year: "",
    rollno: "",
    schoolName: "",
  };
  const validationSchema = Yup.object({
    year: Yup.string().required("Please select year"),
    rollno: Yup.number().required("Roll number is required"),
    schoolName: Yup.string().required("Please select your school"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);
    const finalResultData = await fetch(
      `${baseUrl}/api/v1/student/final-result`,
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (finalResultData.ok) {
      const data = await finalResultData.json();
      console.log(data);
      setFinalResult(data.data);
      toast({
        description: "Result fetched successfully",
        duration: 3000,
        position: "top-right",
        isClosable: true,
        status: "success",
      });
      setLoading(false);
      navigate("/student/final-result");
      opt.resetForm();
    } else {
      toast({
        description: "Something went wrong",
        duration: 3000,
        position: "top-right",
        isClosable: true,
        status: "error",
      });
      setLoading(false);
    }
  };
  const { setFinalResult } = useContext(tokenContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  return (
    <>
      <VStack
        width={["100%", "60%"]}
        // justifyContent={"center"}
        height={"80vh"}
        mt={3}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form style={{ width: "100%" }}>
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
              mb={5}
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
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="rollno" component={"div"} className="error" />
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
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                type="submit"
                width={"50%"}
                isLoading={loading}
                loadingText={"Fetching"}
                bg={"tomato"}
              >
                View Result
              </Button>
            </Box>
          </Form>
        </Formik>
      </VStack>
    </>
  );
};

export default FinalResult;
