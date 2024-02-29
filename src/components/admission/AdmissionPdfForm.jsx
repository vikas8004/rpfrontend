import React, { useContext, useState } from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Select,
  Stack,
  Heading,
  Divider,
  Image,
  useToast,
  Input,
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { baseUrl, years } from "../../utils/constnats.jsx";
import { tokenContext } from "../../context.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const AdmissionPdfForm = () => {
  const initialValues = {
    schoolName: "",
    rollno: "",
    year: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("required"),
    rollno: Yup.string().required("required"),
    year: Yup.string().required("required"),
  });
  const onSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/student/printadmissionpdf`,
        values
      );
      if (res) {
        setLoading(false);
        // console.log(res.data);
        setRegestrationPdf(res.data.data)
        toast({
          description: "Data fetched successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/student/admission/pdf");
      }
    } catch (error) {
      //   console.log(error);
      setLoading(false);

      toast({
        description: error.response.data.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { setRegestrationPdf } = useContext(tokenContext);
  const navigate=useNavigate()
  return (
    <HStack width={"100%"} mt={"15px"}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form style={{ width: "100%" }}>
          <HStack
            justifyContent={["center", "space-between"]}
            flexDirection={["column", "column", "row"]}
            width={"100%"}
            gap={["15px", "15px", "6px"]}
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
            </Box>

            <Box width={["80%", "80%", "20%"]}>
              <Field name="rollno">
                {(props) => {
                  const { form, meta, field } = props;
                  return (
                    <>
                      <Input
                        placeholder="roll no"
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
            <Box width={["80%", "80%", "33%"]}>
              <Field name="year">
                {(props) => {
                  const { form, meta, field } = props;
                  return (
                    <>
                      <Select
                        placeholder="Year"
                        {...field}
                        name="year"
                        width={"100%"}
                        fontSize={"16px"}
                      >
                        {years.map((ele, i) => (
                          <option key={i} value={ele}>
                            {ele}
                          </option>
                        ))}
                      </Select>
                    </>
                  );
                }}
              </Field>
              <ErrorMessage component={"div"} className="error" name="year" />
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
    </HStack>
  );
};

export default AdmissionPdfForm;
