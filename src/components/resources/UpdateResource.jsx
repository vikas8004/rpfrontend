import React, { useContext, useEffect, useState } from "react";
import {
  HStack,
  Box,
  Button,
  useToast,
  VStack,
  Input,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../utils/constnats.jsx";
import axios from "axios";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import { MdDownload } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const UpdateResource = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [resourceData, setResourceData] = useState([]);
  const initialValues = {
    fileName: "",
    title: "",
    file: "",
  };
  const validationSchema = Yup.object({
    fileName: Yup.string().required("required"),
    title: Yup.string().required("required"),
    file: Yup.mixed().required("required"),
  });
  const onSubmit = async (values, opt) => {
    setLoading(true);
    // console.log(values);
    const formData = new FormData();
    formData.append("fileName", values.fileName);
    formData.append("title", values.title);
    formData.append("file", values.file);
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/resource/update-resource`,
        formData
      );
      if (res) {
        // console.log(res.data);
        setLoading(false);
        opt.resetForm();
        (async () => {
          const res = await axios.get(
            `${baseUrl}/api/v1/resource/get-resource`
          );
          setResourceData(res.data.data.foundResources);
        })();
        toast({
          description: res.data.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      setLoading(false);
      // console.log(error);
      toast({
        description: error.response.data.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  const clickHandler = async (e, id, public_id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `${baseUrl}/api/v1/resource/delete-resource`,
        {
          params: {
            _id: id,
            public_id,
          },
        }
      );
      if (res) {
        (async () => {
          const res = await axios.get(
            `${baseUrl}/api/v1/resource/get-resource`
          );
          setResourceData(res.data.data.foundResources);
        })();
        toast({
          description: res.data.data.message,
          position: "top-right",
          status: "info",
          isClosable: true,
          duration: 3000,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: "something went wrong",
        position: "top-right",
        status: "info",
        isClosable: true,
        duration: 3000,
      });
    }
  };
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseUrl}/api/v1/resource/get-resource`);
      console.log(res.data.data.foundResources);
      setResourceData(res.data.data.foundResources);
    })();
  }, []);

  return (
    <>
      <VStack width={"100%"} height={"100%"} mt={5}>
        <HStack width={"100%"} className="admitcard-fetchDetails">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{ width: "100%" }}>
              <HStack
                justifyContent={"space-between"}
                gap={["10px", "10px", "25px"]}
                flexDirection={["column", "column", "row"]}
                width={["95%", "85%", "70%", "80%"]}
                mx={"auto"}
              >
                <Box width={["80%", "80%", "33%"]}>
                  <Field name="schoolName">
                    {(props) => {
                      const { from, field, meta } = props;
                      return (
                        <>
                          <Input
                            placeholder="Enter filename"
                            {...field}
                            name="fileName"
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
                    name="fileName"
                  />
                </Box>{" "}
                <Box width={["80%", "80%", "33%"]}>
                  <Field name="schoolName">
                    {(props) => {
                      const { from, field, meta } = props;
                      return (
                        <>
                          <Input
                            placeholder="Enter title"
                            {...field}
                            name="title"
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
                    name="title"
                  />
                </Box>
                <Box flexDirection={"column"} width={["80%", "80%", "33%"]}>
                  <Field name="file">
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
                            setFieldValue("file", img);
                          }}
                          focusBorderColor="tomato"
                          width={["100%"]}
                          type="file"
                        />
                      );
                    }}
                  </Field>

                  <ErrorMessage
                    name="file"
                    component={"div"}
                    className="error"
                  />
                </Box>
                {/* button */}
                <Box width={["80%", "50%", "20%"]} mr={2}>
                  <Button
                    type={"submit"}
                    width={"100%"}
                    bg={"tomato"}
                    isLoading={loading}
                    loadingText="Updating..."
                  >
                    Update
                  </Button>
                </Box>
              </HStack>
            </Form>
          </Formik>
        </HStack>
        <HStack width={"100%"}>
          {resourceData.length != 0 ? (
            <Table width={["95%", "85%", "70%", "80%"]} size={"sm"} mx={"auto"}>
              <TableCaption placement="top" fontSize={"20px"}>
                Resources
              </TableCaption>
              <Tbody>
                {resourceData.map((el, i) => {
                  return (
                    <Tr key={i} width={"100%"}>
                      <Td width={"90%"}>{doFirstLetterCapital(el.title)}</Td>
                      <Td width={"10%"}>
                        <Button
                          _hover={{ bg: "transparent" }}
                          onClick={(e) =>
                            clickHandler(e, el._id, el.file.public_id)
                          }
                        >
                          <MdDelete />
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          ) : (
            <Text>No Resources Found</Text>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default UpdateResource;
