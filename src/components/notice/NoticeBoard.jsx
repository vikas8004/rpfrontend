import React, { useEffect, useState } from "react";
import { HStack, VStack, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { baseUrl } from "../../utils/constnats.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/api/v1/get-notice`)
      .then((res) => {
        if(res.ok){
          return res.json()
        }
      })
      .then((res) => {
        // console.log(res);
        setNotices(res.data);
      });
  }, []);
  return (
    <HStack
      width={"95vw"}
      justifyContent={"center"}
      // mt={["-110px", "-60px", "-20px", "-20px"]}
      zIndex={"-34"}
    >
      <VStack
        bg={"rgba(255, 99, 71,0.7)"}
        height={"250px"}
        width={["90%", "90%", "90%", "80%"]}
        rounded={"xl"}
      >
        <Text
          fontSize={"23px"}
          fontWeight={"bolder"}
          color={"white"}
          textDecoration={"underline"}
        >
          Announcements
        </Text>
        <HStack
          flexDirection={"column"}
          width={["100%"]}
          height={"100%"}
          overflowY={"hidden"}
          justifyContent={"flex-end"}
        >
          {notices.length === 0 ? (
            <motion.div
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
              <HStack width={"100%"}>
                <Text width={"100%"} textAlign={"center"} fontSize={"20px"}>
                  No Announcements
                </Text>
              </HStack>
            </motion.div>
          ) : (
            notices.map((el, i) => {
              return (
                <motion.div
                  key={i}
                  animate={{ y: [400, -250] }}
                  transition={{
                    duration: notices.length<=3?17:25,
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
                    {`${i+1}. `}{doFirstLetterCapital(el.notice)}
                  </Text>
                </motion.div>
              );
            })
          )}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default NoticeBoard;
