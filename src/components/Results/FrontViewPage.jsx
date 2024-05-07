import {
  Box,
  HStack,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import logo from "../../assests/logo.jpg";
import { tokenContext } from "../../context";
import { fixDateIssue } from "../../utils/fixDateIssue";

const FrontViewPage = () => {
  const { frontPageData } = useContext(tokenContext);
  // console.log(frontPageData);
  return (
    <>
      <HStack mt={"65px"} width={"full"} className="frontpage">
        <HStack
          width={"95%"}
          gap={"30px"}
          mx={"auto"}
          justifyContent={"space-between"}
          boxSizing="border-box"
        >
          <Box
            border={"2px solid black"}
            width={"50%"}
            px={"10px"}
            display={"flex"}
            flexDir="column"
            alignItems={"center"}
            pt={"15px"}
            pb={"10px"}
            height={"90vh"}
          >
            <Text
              bg={"rgba(0,0,0,0.8)"}
              color={"white"}
              fontWeight={"700"}
              letterSpacing={".5px"}
              px={"5px"}
              borderRadius={"5px"}
              fontSize={"18px"}
            >
              <i>Rules of Discipline</i>
            </Text>
            <OrderedList textAlign={"justify"} fontWeight={"600"}>
              <ListItem>
                Students are to maintain a standard of a good manner and general
                bahaviour.
              </ListItem>
              <ListItem>
                They should be polite and well behaved within the school campus.
              </ListItem>
              <ListItem>
                Students are exhorted to be orderly, clean in person and mind,
                neatly dressed and co-operate in maintaining the clenliness of
                the school, class-room and campus.
              </ListItem>
              <ListItem>
                Absolute silence must be observed during the general assembly.
              </ListItem>
              <ListItem>
                Students must not walk about in the veramdah and class-room
                during the school hours.
              </ListItem>
              <ListItem>
                Students are not allowed to bring mobile phones to the school.
              </ListItem>
              <ListItem>
                No students will leave the school campus on any account during
                the school hours without prior permission of the principal.
              </ListItem>
            </OrderedList>
            <Text
              bg={"rgba(0,0,0,0.8)"}
              color={"white"}
              fontWeight={"700"}
              letterSpacing={".5px"}
              px={"5px"}
              borderRadius={"5px"}
              mt={"10px"}
              fontSize={"18px"}
              mb={"10px"}
            >
              <i>Recommendations to the parents</i>
            </Text>
            <OrderedList textAlign={"justify"} fontWeight={"600"}>
              <ListItem>
                Parents are expected to co-operate with school authorities by
                ensuring that children observe puctuality and discipline ,
                prepare their lesson and take an active part in the activities
                of the school.
              </ListItem>
              <ListItem>
                <span style={{ fontWeight: "bold" }}>Private Tution </span> is
                not encouraged, instead the parents are requested to give
                personal attention to the children and help them as for as
                possible.
              </ListItem>
            </OrderedList>
            <Text
              fontWeight={"bolder"}
              textAlign={"right"}
              mt={"10px"}
              width={"100%"}
            >
              <i>Principal</i>
            </Text>
          </Box>
          <Box
            border={"2px solid black"}
            width={"50%"}
            px={"10px"}
            display={"flex"}
            flexDir="column"
            alignItems={"center"}
            py={"25px"}
            className="rightside"
            height={"90vh"}
          >
            <Text
              width={"100%"}
              textAlign={"center"}
              fontWeight={"900"}
              fontSize={"30px"}
            >
              R.P.ADARSH INTER COLLEGE
            </Text>
            <Text
              fontWeight={"700"}
              fontSize={"22px"}
              //   my={"15px"}
              className="rehar"
            >
              REHAR-BASTI
            </Text>

            <Image src={logo} boxSize={"150px"} className="detimage" />
            <Text
              bgColor={"black"}
              color={"white"}
              p={"4px"}
              px={"17px"}
              borderRadius={"10px"}
              fontWeight={"bolder"}
              letterSpacing={"1px"}
              mt={"20px"}
            >
              PROGRESS REPORT
            </Text>
            <Text fontSize={"20px"} className="session">
              Session : {frontPageData.year}
            </Text>
            <Box
              width={"90%"}
              border={"2px solid black"}
              borderTopLeftRadius={"10px"}
              borderBottomRightRadius={"10px"}
              boxShadow={"3px 3px black"}
              className="detailbox"
              px={"5px"}
              gap={"10px"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Text>Name of Student : {frontPageData.fullName}</Text>
              <Text>Father's Name : {frontPageData.fatherName}</Text>
              <Text>Mother's Name : {frontPageData.motherName}</Text>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text width={"50%"}>Class : {frontPageData.standard}</Text>
                <Text width={"50%"}>Roll No : {frontPageData.rollno}</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text width={"50%"}>Date of Birth : {fixDateIssue(frontPageData.dob)}</Text>
                <Text width={"50%"}>Mob : {frontPageData.mobileNo}</Text>
              </Box>
            </Box>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default FrontViewPage;
