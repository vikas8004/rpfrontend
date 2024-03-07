import React, { useContext, useState } from "react";
import { VStack, Button, Text, Input, Box, useToast } from "@chakra-ui/react";
import { Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { tokenContext } from "../context";
import { baseUrl } from "../utils/constnats.jsx";
import axios from "axios";
const Login = () => {
  const { token, setToken } = useContext(tokenContext);
  const toast = useToast();
  const location=useLocation()
  const [loading, setLoading] = useState(false);
  window.onload = async () => {
    axios
      .get(`${baseUrl}/api/v1/admin/verify-login`, { withCredentials: true })
      .then((res) => {
        // console.log(res.data);
        if (res.data.data.status) {
          setToken(res.data.data.token);
        }
      })
      .catch((err) => {
        setToken("");
      });
  };
  const navigate = useNavigate();
  const initialValues = {
    userName: "",
    password: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
  });
  const onSubmit = async (values, opt) => {
    // console.log(values);
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/api/v1/admin/login`, values, {
        withCredentials: true,
      });
      if (res) {
        // console.log(res);
        opt.resetForm();
        setToken(res.data.data.accessToken);
        const msg = res.data.data.message;
        toast({
          title: "Logged In",
          description: msg,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: "Log In",
        description: "invalid credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <>
      {token ? (
      navigate("/")
      ) : (
        <>
          {" "}
          <VStack>
            <VStack
              mt={78}
              width={["100%", "60%"]}
              justifyContent={"center"}
              height={"80vh"}
            >
              <Formik
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
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
                    <Field name="userName">
                      {(props) => {
                        const { form, meta, field } = props;
                        return (
                          <>
                            <Input
                              placeholder="enter username"
                              {...field}
                              name="userName"
                              width={"80%"}
                              fontSize={"16px"}
                            />
                          </>
                        );
                      }}
                    </Field>
                    <ErrorMessage
                      name="userName"
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
                    <Field name="password">
                      {(props) => {
                        const { form, meta, field } = props;
                        return (
                          <>
                            <Input
                              placeholder="enter password"
                              {...field}
                              name="password"
                              width={"80%"}
                              fontSize={"16px"}
                              type="password"
                            />
                          </>
                        );
                      }}
                    </Field>
                    <ErrorMessage
                      name="password"
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
                      bg={"tomato"}
                      isLoading={loading}
                      loadingText="logging"
                    >
                      Login As Admin
                    </Button>
                  </Box>
                </Form>
              </Formik>
            </VStack>
          </VStack>
        </>
      )}
    </>
  );
};

export default Login;
