import React from "react";
import { Carousel } from "react-responsive-carousel";

import {
  VStack,
  Container,
  Box,
  Image,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <>
      <VStack justifyContent={"center"}>
        <Box
          display={"flex"}
          width={"95vw"}
          mx="auto"
          justifyContent={"center"}
          alignItems={"center"}
          mt={"75"}
        >
          <Carousel infiniteLoop autoPlay showThumbs={false} width={"100%"}>
            <Box>
              <Image src={img3} alt="img1" height={["40vh", "70vh"]} />
            </Box>
            <Box>
              <Image src={img4} alt="img1" height={["40vh", "70vh"]} />
            </Box>
            <Box>
              <Image src={img5} alt="img1" height={["40vh", "70vh"]} />
            </Box>
          </Carousel>
        </Box>
        <Text width={"90vw"} fontSize={"18px"} textAlign={"justify"}>
          The aim of the RP ADARSH INTER COLLEGE is to create an ambience
          encouraging learning in a joyous environment and help students attain
          their educational and personal goals by developing their confidence
          and self-esteem. The environment nurtures our students and develops
          their personalities through innovative educational practices. The
          schools are equipped with state-of-art facilities, which enhance the
          intellectual, social and emotional development of students. We are
          ranked among the Top schools of BASTI, and provide qulity content in
          our education through various programs.
        </Text>
        <Divider
          borderWidth={"4px"}
          borderColor={"tomato"}
          width={"90vw"}
          mt={"20px"}
        />
        <Heading color={"tomato"} width={"90vw"}>
          Principal's Desk
        </Heading>
        <Text width={"90vw"} fontSize={"18px"} textAlign={"justify"}>
          “All our dreams can come true, if tee have the encourage to pursue
          them. Always remember, you have within you the strength, the patience
          and the passion to reach for the stars to change the world “ As the
          curtain are drawn on the year, I look back at an action packed,
          rigorous and exciting term, filled with events, academics, joys and
          togetherness. Aristotle once said, “Educating the mind without
          educating the heart is no education at all.” Even as we impart
          education to match the advancement in technology and globalization.
          Today the role of a school is not only to pursue academic excellence
          but also to motivate and empower its students to be lifelong learners,
          critical thinker and productive members of an ever changing global
          society. More than a decade back SRPS pledged to transform quality
          education and provide an atmosphere to the students for multifaceted
          development, where children are encouraged to channelize their
          potential in the pursuit of excellence. From interactive teaching
          methods to a healthy teacher-student relationship we work around
          making studies as effortless as possible. The parents are the most
          strengthening power in moulding the future of children and now a days
          kids are being led astray by fake accounts, on line friends and
          abnormal social- media dependence. As a strong advisory, I sincerely
          urge you to restrict the usage. Your consistent support will empower
          them to wean away from destructive outlook. The school magazine
          “Footprint” again in your hands and each issue is a milestone that
          marks our growth, unfolds our imagination and gives life to thoughts
          and aspirations thank for the combinded support to all the
          stakeholders the management, teachers, staff, guardians and students.I
          would like to congratulate all those students who won laurels for the
          school.My blessings and good wishes to the entire staff and
          students,keep up the good work with this motive….
        </Text>
        <Text
          width={"85vw"}
          fontWeight={"bolder"}
          fontSize={"23px"}
          color={"tomato"}
        >
          “They can conquer, who believe they can.”
        </Text>
        <Text
          textAlign={"right"}
          width={"90vw"}
          fontWeight={"bolder"}
          fontSize={20}
        >
          Parmatma Yadav
        </Text>
        <Text textAlign={"right"} width={"90vw"} fontWeight={"bolder"}>
          (Principal)
        </Text>
      </VStack>
      <Footer />
    </>
  );
};

export default Home;
