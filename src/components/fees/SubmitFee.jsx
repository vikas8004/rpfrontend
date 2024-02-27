import { useContext, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import {
  VStack,
  Box,
  Select,
  Input,
  Button,
  useToast,
  Heading,
} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl, years } from "../../utils/constnats.jsx";
import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../context.jsx";
const SubmitFee = () => {
  const toast = useToast();
  const initialValues = {
    schoolName: "",
    year:"",
    rollno: "",
    admission: "",
    tutionFee: "",
    convenienceFee: "",
    developmentFee: "",
    examinationFee: "",
    annualFunctionFee: "",
    buildingFee: "",
    computer: "",
    other: "",
  };
  const validationSchema = Yup.object({
    schoolName: Yup.string().required("select the school"),
    rollno: Yup.number().required("roll no is required"),
    year:Yup.string().required("year is required")
  });
  const onSubmit = async (values, opt) => {
    console.log(values);
    setLoading(true);

    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/student/submit-fee`,
        values
      );
      console.log(res.data);
      setFeeReceipt(res.data.data)
      toast({
        description: "Fee sumbitted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
        opt.resetForm();
        navigate("/student/fee-receipt")
    } catch (error) {
      setLoading(false);
      //   console.log(error);
      toast({
        description: error.response.data.data.message,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setFeeReceipt } = useContext(tokenContext);
  return (
    <>
      <VStack width={"90%"} height={"85vh"} overflowY={"auto"}>
        <Heading fontSize={"20px"}>Fee Form</Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form style={{ width: "80%" }}>
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
                          RP Adarsh Inter College
                        </option>
                        <option value="rbmp convent school">
                          RBMP Convent School
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
              <Field name="year">
                {(props) => {
                  const { form, meta, field } = props;
                  return (
                    <>
                      <Select
                        placeholder="Select year"
                        {...field}
                        name="year"
                        width={"80%"}
                        fontSize={"16px"}
                      >
                        {years.map((el,i)=><option key={i} value={el}>{el}</option>)}
                      </Select>
                    </>
                  );
                }}
              </Field>
              <ErrorMessage
                name="year"
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
              mb={3}
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
                      type="number"
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="rollno" component={"div"} className="error" />
            </Box>

            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="admission">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="admission"
                      {...field}
                      placeholder="Enter admission/renewal fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="tutionFee">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="tutionFee"
                      {...field}
                      placeholder="Enter tutionFee fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="convenienceFee">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="convenienceFee"
                      {...field}
                      placeholder="Enter convenienceFee fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="developmentFee">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="developmentFee"
                      {...field}
                      placeholder="Enter developmentFee fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="examinationFee">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="examinationFee"
                      {...field}
                      placeholder="Enter examinationFee fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="annualFunctionFee">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="annualFunctionFee"
                      {...field}
                      placeholder="Enter annualFunctionFee fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="buildingFee">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="buildingFee"
                      {...field}
                      placeholder="Enter buildingFee fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="computer">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="computer"
                      {...field}
                      placeholder="Enter computer fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Field name="other">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <Input
                      name="other"
                      {...field}
                      placeholder="Enter other fee"
                      focusBorderColor="tomato"
                      width={"80%"}
                      type="number"
                    />
                  );
                }}
              </Field>
            </Box>
            {/* button */}
            <Box
              flexDirection={"column"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={3}
            >
              <Button
                width={["80%", "50%"]}
                type="submit"
                bg={"tomato"}
                isLoading={loading}
                loadingText={"Submitting"}
              >
                Submit Fee
              </Button>
            </Box>
          </Form>
        </Formik>
      </VStack>
    </>
  );
};

export default SubmitFee;
