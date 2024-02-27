import React, { useContext } from "react";
import { VStack, HStack, Text, Heading, Image ,Button} from "@chakra-ui/react";
import logo from "../../assests/logo.png";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital";
import converter from "number-to-words";
import { tokenContext } from "../../context.jsx";
import {useNavigate} from "react-router-dom"
const ShowFeeReceipt = () => {
  const date = new Date();
  const { feeReceipt } = useContext(tokenContext);
  // console.log(feeReceipt);
  const { submittedFeeRes, foundStu } = feeReceipt;
  const navigate=useNavigate()
  return (
    <>
      {feeReceipt?<React.Fragment><VStack
        mt={"62px"}
        width={"350px"}
        mx={"auto"}
        border={"1px solid black"}
        justifyContent={"center"}
        bg={"yellow"}
        rounded={"md"}
        // className="fee"
      >
        <HStack width={"100%"} justifyContent={"space-between"} px={2}>
          <Image src={logo} boxSize={"70px"} />
          <VStack>
            <Heading fontSize={"16px"} textAlign={"center"}>
              {submittedFeeRes.schoolName === "rp adarsh inter college"
                ? "RP ADARSH INTER COLLEGE REHAR BASTI"
                : "RBMP CONVENT SCHOOL CHARKAILA BAHDEELA BASTI"}
            </Heading>
          </VStack>
        </HStack>
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          px={2}
          fontWeight={"600"}
          mt={"-7px"}
        >
          <Text>S.No : {submittedFeeRes.sNo}</Text>
          <Text>Date : {date.toLocaleDateString()}</Text>
        </HStack>
        <HStack
          fontWeight={"600"}
          justifyContent={"space-between"}
          width={"100%"}
          px={2}
          mt={"-7px"}
        >
          <Text>Class : {8}</Text>
          <Text>Roll No : {submittedFeeRes.rollno}</Text>
        </HStack>
        <HStack
          fontWeight={"600"}
          justifyContent={"flex-start"}
          width={"100%"}
          px={2}
          mt={"-7px"}
        >
          <Text>
            Student's Name : {doFirstLetterCapital(foundStu.fullName)}
          </Text>
        </HStack>
        <HStack
          justifyContent={"flex-start"}
          px={2}
          mt={"-7px"}
          width={"100%"}
          fontWeight={"600"}
          flexDirection={"column"}
        >
          <Text textAlign={"left"} width={"100%"}>
            1. Admission/Renewal : {submittedFeeRes.admission}
          </Text>
          <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
            2. Tuition Fee : {submittedFeeRes.tutionFee}
          </Text>
          <Text textAlign={"left"} width={"100%"}mt={"-7px"}>
            3. Convenience Fee : {submittedFeeRes.convenienceFee}
          </Text>
          <Text textAlign={"left"} width={"100%"}mt={"-7px"}>
            4. Development Fee : {submittedFeeRes.developmentFee}
          </Text>
          <Text textAlign={"left"} width={"100%"}mt={"-7px"}>
            5. Examination Fee : {submittedFeeRes.examinationFee}
          </Text>
          <Text textAlign={"left"} width={"100%"}mt={"-7px"}>
            6. Annual Function Fee : {submittedFeeRes.annualFunctionFee}
          </Text>
          <Text textAlign={"left"} width={"100%"}mt={"-7px"}>
            7. Building Fee : {submittedFeeRes.buildingFee}
          </Text>
          <Text textAlign={"left"} width={"100%"}mt={"-7px"}>
            8. Computer : {submittedFeeRes.computer}
          </Text>
          <Text textAlign={"left"} width={"100%"}mt={"-7px"}>
            9. Other : {submittedFeeRes.other}
            <Heading
              fontSize={"15px"}
              fontWeight={"700"}
              width={"100%"}
              textAlign={"center"}
              mt={"-7px"}
            >
              Total : {submittedFeeRes.total}
            </Heading>
          </Text>
          <Text textAlign={"left"} width={"100%"} mt={"-7px"}>
            Words : {doFirstLetterCapital(converter.toWords(submittedFeeRes.total))} Rs only /-
          </Text>
        </HStack>

      </VStack>
      <HStack width={"400px"} mx={"auto"} mt={"10px"} px={4} justifyContent={"center"}>
        <Button onClick={()=>window.print()} className="noPrint" bg={"tomato"}>Print</Button>
        <Button onClick={()=>navigate("/dashboard/submit-fee")} className="noPrint" bg={"tomato"}>Fee Form</Button>
      </HStack>
      </React.Fragment>:<HStack width={"100vw"}justifyContent={"center"} mt={"65px"}><Button onClick={()=>navigate("/dashboard/submit-fee")} bg={"tomato"}>Fee Form</Button></HStack>}
    </>
  );
};

export default ShowFeeReceipt;
