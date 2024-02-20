import React from "react";
import { HStack, VStack, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
const notices = [
  "Admission open for 2024-2025 session (for both school) take admission for the bright future",
  "Result for all the class would be available soon",
];
const NoticeBoard = () => {
  return (
    <HStack
      width={"95vw"}
      justifyContent={"center"}
      mt={["-150px", "-70px", "-40px", "-20px"]}
      zIndex={"-34"}
    >
      <VStack
        bg={"rgba(255, 99, 71,0.7)"}
        height={"250px"}
        width={["90%", "90%","90%" ,"80%"]}
        rounded={"xl"}
      >
        <Text fontSize={"23px"} fontWeight={"bolder"} color={"white"}>
          Announcements
        </Text>
        <HStack
          flexDirection={"column"}
          width={["100%"]}
          height={"100%"}
          overflowY={"hidden"}
          justifyContent={"flex-end"}
        >
          {notices.map((el, i) => {
            return (
              <motion.div
                key={i}
                animate={{ y: [20, -200] }}
                transition={{
                  duration: 7,
                  loop: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                  repeat: Infinity,
                }}
                style={{
                  width: "100%",
                }}
              >
                <Text
                  width={"100%"}
                  color={"black"}
                  textAlign={"left"}
                  pl={[3, 13]}
                  fontSize={"20px"}
                >
                  {el}
                </Text>
              </motion.div>
            );
          })}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default NoticeBoard;
