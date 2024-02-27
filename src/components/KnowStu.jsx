import React, { useState } from "react";
import {
  HStack,
  VStack,
  Text,
  Image,
  Box,
  Button,
  Select,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import registrar from "../assests/principal.jpg";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../utils/constnats.jsx";
import { fixDateIssue } from "../utils/fixDateIssue.jsx";
import { doFirstLetterCapital } from "../utils/doFirstLetterCapital.jsx";
import { years } from "../utils/constnats.jsx";
const KnowStu = () => {
  const initialValues = {
    year: "",
    schoolName: "",
    rollno: "",
  };
  const validationSchema = Yup.object({
    year: Yup.string().required("required"),
    schoolName: Yup.string().required("required"),
    rollno: Yup.string().required("required"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);
    const res = await fetch(`${baseUrl}/api/v1/about-student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const userdata = await res.json();
      console.log(userdata);
      if (userdata.statusCode === 200) {
        setData(userdata.data);
        onOpen();
        toast({
          description: "Data fetched successfully",
          duration: 3000,
          status: "success",
          isClosable: true,
          position: "top-right",
        });
        setLoading(false);
        opt.resetForm();
      } else {
        toast({
          description: "No Record Found",
          duration: 3000,
          status: "error",
          isClosable: true,
          position: "top-right",
        });
        setLoading(false);
      }
    }
  };
  
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState(false);
  const toast = useToast();
  return (
    <>
      <VStack
        justifyContent={"center"}
        width={"95vw"}
        boxSizing="border-box"
        mx={"auto"}
        mt={"70px"}
      >
        <HStack
          width={["100%", "100", "80%"]}
          justifyContent={"center"}
          flexDirection={["column", "column", "row"]}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form style={{ width: "100%" }}>
              <HStack
                justifyContent={"space-between"}
                flexDirection={["column", "row", "row"]}
              >
                <Box width={["80%", "33%"]}>
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
                <Box width={["80%", "33%"]}>
                  <Field name="rollno">
                    {(props) => {
                      const { from, field, meta } = props;
                      return (
                        <>
                          <Input
                            placeholder="enter roll no"
                            {...field}
                            name="rollno"
                            width={"100%"}
                            fontSize={"16px"}
                          />
                        </>
                      );
                    }}
                  </Field>
                  <ErrorMessage
                    component={"div"}
                    className="error"
                    name="rollno"
                  />
                </Box>
                <Box width={["80%", "33%"]}>
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
                  <ErrorMessage
                    component={"div"}
                    className="error"
                    name="year"
                  />
                </Box>
                <Box width={["50%", "20%"]} mr={2}>
                  <Button
                    type={"submit"}
                    width={"100%"}
                    bg={"tomato"}
                    color={"white"}
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
        <HStack>
          {data ? (
            <Modal isOpen={isOpen} onClose={onClose} size={"xs"} closeOnOverlayClick={false}>
              <ModalOverlay />
              <ModalContent bg={"rgba(255, 99, 71,0.9)"} color={"white"} fontSize={["19px","16px"]} zIndex={45} mt={"80px"} fontWeight={"600"} boxShadow={"0px 0px 3px 3px rgba(255, 99, 71,0.9)"}>
                <ModalHeader>Details</ModalHeader>
                <ModalCloseButton size={"20px"} mt={"10px"}/>
                <ModalBody>
                  <HStack
                    width={"100%"}
                    justifyContent={"center"}
                    mb={"10px"}
                    mt={"-20px"}
                  >
                    <Image src={data.image.secure_url} boxSize={"120px"} rounded={"full"} />
                  </HStack>
                  <HStack width={"100%"} justifyContent={"center"}>
                    <VStack width={"90%"}>
                      <Text width={"100%"} textAlign={"left"}>
                        {`School - ${doFirstLetterCapital(data.schoolName)}`}
                      </Text>
                      <Text width={"100%"} textAlign={"left"}>
                        {`Name - ${doFirstLetterCapital(data.fullName)}`}
                      </Text>
                      <Text width={"100%"} textAlign={"left"}>
                       {`Roll No - ${data.rollno}`}
                      </Text>
                      <Text width={"100%"} textAlign={"left"}>
                        {`F Name - ${doFirstLetterCapital(data.fatherName)}`}
                      </Text>
                      <Text width={"100%"} textAlign={"left"}>
                        {`Dob - ${fixDateIssue(data.dob)}`}
                      </Text>
                      <Text width={"100%"} textAlign={"left"}>
                        {`Address - ${doFirstLetterCapital(data.address)}`}
                      </Text>
                      <Text width={"100%"} textAlign={"left"} wordBreak={"break-all"}>
                        {`Subjects - ${data.subjects[0]}`}
                      </Text>
                    </VStack>
                  </HStack>
                </ModalBody>
              </ModalContent>
            </Modal>
          ) : (
            <Text>Nothing to show</Text>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default KnowStu;
