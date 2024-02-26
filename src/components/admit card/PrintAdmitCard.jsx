import React, { useContext, useEffect, useState } from "react";
import {
  HStack,
  Box,
  Button,
  Select,
  useToast,
  Heading,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../utils/constnats.jsx";
import axios from "axios";

import { tokenContext } from "../../context.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";

import { useNavigate } from "react-router-dom";
const PrintAdmitCard = () => {
  const initialValues = {
    schoolName: "",
    standard: "",
    term: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("required"),
    standard: Yup.string().required("required"),
    term: Yup.string().required("required"),
  });
  const onSubmit = async(values) => {
    setLoading(true);
    console.log(values);
    try {
      const res =await axios.post(
        `${baseUrl}/api/v1/student/admitcard/print-admit-card`,
        values
      );
      if (res) {
        console.log(res.data.data);
        toast({
          description: "Data fetched successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
  
        setAdmitCard(res.data.data);
        setLoading(false);
        navigate("/student/print-all-admit-card");
      }
    } catch (error) {
      
        console.log(error);
        toast({
          description: "No record found",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });

        setLoading(false);
     
    }
  };

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
  const term = ["quaterly", "halfyearly", "annually"];
  const { setAdmitCard } = useContext(tokenContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <>
      <VStack width={"100%"} height={"100%"}>
        <HStack width={"100%"} className="admitcard-fetchDetails">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{ width: "100%" }}>
              <HStack
                justifyContent={"space-between"}
                gap={["10px", "10px", "5px"]}
                flexDirection={["column", "column", "row"]}
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
                  <Field name="standard">
                    {(props) => {
                      const { form, meta, field } = props;
                      return (
                        <>
                          <Select
                            placeholder="Class"
                            {...field}
                            name="standard"
                            width={"100%"}
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
                    component={"div"}
                    className="error"
                    name="standard"
                  />
                </Box>
                <Box width={["80%", "80%", "33%"]}>
                  <Field name="term">
                    {(props) => {
                      const { form, meta, field } = props;
                      return (
                        <>
                          <Select
                            placeholder="Term"
                            {...field}
                            name="term"
                            width={"100%"}
                            fontSize={"16px"}
                          >
                            {term.map((ele, i) => (
                              <option key={i} value={ele}>
                                {doFirstLetterCapital(ele)}
                              </option>
                            ))}
                          </Select>
                        </>
                      );
                    }}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    className="error"
                    name="term"
                  />
                </Box>
                <Box width={["80%", "50%", "20%"]} mr={2}>
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
      </VStack>
    </>
  );
};

export default PrintAdmitCard;
