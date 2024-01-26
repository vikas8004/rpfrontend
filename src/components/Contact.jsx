import React, { useContext, useState } from "react";
import {
  VStack,
  Button,
  Box,
  Text,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Contact = () => {
  const initialValues = {
    email: "",
    name: "",
    feedback: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("enter a valid email")
      .required("Please enter your email"),
    feedback: Yup.string().required("Please write your feedback"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);
    const res = await fetch("/api/v1/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const resultData = await res.json();
      console.log(resultData);
      
      toast({
        title: "Result",
        description: "Feedback submitted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      opt.resetForm();
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 2000);
    } else {
      setLoading(false);
      
    //   opt.resetForm();
      toast({
        title: "Failed",
        description: "Feedback did not submitted",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  const [loading, setLoading] = useState(false);
  const toast = useToast();

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
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <Field name="name">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="name"
                        {...field}
                        placeholder="Enter your enter"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="name" component={"div"} className="error" />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <Field name="email">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="email"
                        {...field}
                        placeholder="Enter your email"
                        type="email"
                        focusBorderColor="tomato"
                        width={"80%"}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="email"
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
                <Field name="feedback">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Textarea
                        name="feedback"
                        {...field}
                        placeholder="Enter your feedback"
                        focusBorderColor="tomato"
                        width={"80%"}
                        rows={6}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="feedback"
                  component={"div"}
                  className="error"
                />
              </Box>

              <Box
                width={"100%"}
                display={"flex"}
               ml={"10%"}
                alignItems={"center"}
              >
                <Button
                  type="submit"
                  width={"30%"}
                  isLoading={loading}
                  loadingText="Submitting"
                  bg={"tomato"}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          </Formik>
        </VStack>
      </VStack>
      <Footer/>
    </>
  );
};

export default Contact;
