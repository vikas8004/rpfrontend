import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
  Input,
  Box,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { baseUrl } from "../../utils/constnats.jsx";
import { MdDelete } from "react-icons/md";
const Notice = () => {
  const initialValues = {
    notice: "",
  };
  const validationSchema = Yup.object({
    notice: Yup.string().required("required"),
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);
    try {
      fetch(`${baseUrl}/api/v1/set-notice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((res) => {
          // console.log(res);
          toast({
            description: "Notice added successfully",
            duration: 3000,
            position: "top-right",
            status: "success",
            isClosable: true,
          });
          setLoading(false);
          opt.resetForm();
        });
    } catch (error) {
      toast({
        description: "Notice could not added",
        duration: 3000,
        position: "top-right",
        status: "error",
      });
    }
  };
  const [notices, setNotices] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`${baseUrl}/api/v1/get-notice`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        setNotices(res.data);
      });
  }, [setLoading]);
  const clickHandler = async (id) => {
    console.log(id);
    const res = await fetch(`${baseUrl}/api/v1/delete-notice`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    });
    if (res.ok) {
      toast({
        description: "Notice deleted successfully",
        duration: 3000,
        position: "top-right",
        status: "success",
        isClosable: true,
      });
    }
  };
  return (
            
    <VStack width={"100%"} mt={"0px"} justifyContent={"center"} overflowY={"scroll"}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form style={{ width: "100%",}}>
          <HStack
            width={"100%"}
            flexDirection={["column", "column", "row"]}
            justifyContent={"center"}
            mt={["15%","5%","1%",".5%"]}
            
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={["center" ,"center","flex-end"]}
              flexDirection={"column"}
            >
              <Field name="notice">
                {({ field }) => {
                  return (
                    <Input
                      name="notice"
                      placeholder="enter notice"
                      {...field}
                      width={["90%", "90%", "60%"]}
                      focusBorderColor="tomato"
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="notice" className="error" component={"div"} />
            </Box>
            <Box
              width={["100%", "50%"]}
              display={"flex"}
              justifyContent={["center", "flex-start"]}
            >
              <Button
                type="submit"
                width={["80%", "70%", "80%"]}
                bg={"tomato"}
                isLoading={loading}
              >
                Add
              </Button>
            </Box>
          </HStack>
        </Form>
      </Formik>
      <VStack width={"100%"} mt={"20px"}>
        {notices.length === 0 ? (
          <Text>No notices available</Text>
        ) : (
          <HStack width={"100%"} flexDirection={"column"}>
            <Text color={"tomato"} fontWeight={"500"}>
              Notices
            </Text>
            {notices.map((el, i) => {
              return (
                <Text key={i} width={"100%"} padding={"10px"} textAlign={"justify"}>
                  {`${i + 1}. ${el.notice}`}

                  <Button
                    bg={"transparent"}
                    _hover={{ bg: "transparent" }}
                    onClick={() => clickHandler(el._id)}
                  >
                    <MdDelete
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </Button>
                </Text>
              );
            })}
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export default Notice;
