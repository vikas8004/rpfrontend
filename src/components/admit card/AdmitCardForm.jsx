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
import {baseUrl} from "../../utils/constnats.jsx"
const AdmitCardForm = () => {
  const initialValues = {
    admitCardType: "",
    year: "",
    rollno: "",
    schoolName: "",
  };
  const validationSchema = Yup.object({
    year: Yup.string().required("Please select year"),
    admitCardType: Yup.string().required("Please select term"),
    rollno: Yup.string().required("Roll number is required"),
    schoolName: Yup.string().required("Please select your school"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);
    const res = await fetch(`${baseUrl}/api/v1/student/show-admit-card`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      toast({
        title: "Admit card",
        description: "Admit card fetched successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
      setAdmitCard(data.data);
      opt.resetForm();
      navigate("/student/show-admit-card")
    } else {
      toast({
        title: "Admit card",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
    }
    setLoading(false);
  };
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { setAdmitCard } = useContext(tokenContext);
  const navigate = useNavigate();
  return (
    <>
      <VStack>
        <VStack
          mt={"2vh"}
          width={["100%", "60%"]}
          
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
                flexDir={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <Field name="admitCardType">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Select
                          placeholder="Select Term"
                          {...field}
                          name="admitCardType"
                          width={"80%"}
                          fontSize={"16px"}
                        >
                          <option value="quaterly">Quaterly</option>
                          <option value="halfyearly">Halfyearly</option>
                          <option value="annually">Annually</option>
                        </Select>
                      </>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="admitCardType"
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
                  loadingText="Fetching"
                >
                  View
                </Button>
              </Box>
            </Form>
          </Formik>
        </VStack>
      </VStack>
    </>
  );
};

export default AdmitCardForm;
