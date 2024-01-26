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
import { useNavigate } from "react-router-dom";
const QuaterlyResult = () => {
  const initialValues = {
    resultType: "quaterly",
    year: "",
    rollno: "",
    schoolName: "",
  };
  const validationSchema = Yup.object({
    year: Yup.string().required("Please select year"),
    rollno: Yup.string().required("Roll number is required"),
    schoolName: Yup.string().required("Please select your school"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);

    setLoading(true);
    const res = await fetch("/api/v1/student/showresult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const resultData = await res.json();
      console.log(resultData);
      setResult(resultData);
      toast({
        title: "Result",
        description: "Result fetched successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      opt.resetForm();
      setTimeout(() => {
        setLoading(false);
        navigate("/showresult");
      }, 3000);
    } else {
      setLoading(false);
      setResult("");
      opt.resetForm();
      toast({
        title: "Failed",
        description: "result may not exist or something went wrong",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { setResult } = useContext(tokenContext);
  const navigate = useNavigate();
  return (
    <>
      <VStack>
        <VStack
          mt={78}
          width={["100%", "60%"]}
          justifyContent={"center"}
          height={"80vh"}
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
                <ErrorMessage
                  name="rollno"
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
                  loadingText="Fetching"
                >
                  View Result
                </Button>
              </Box>
            </Form>
          </Formik>
        </VStack>
      </VStack>
    </>
  );
};

export default QuaterlyResult;
