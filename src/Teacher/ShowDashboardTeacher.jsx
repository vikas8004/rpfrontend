import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import { baseUrl, years } from "../utils/constnats.jsx";
import axios from "axios";

const ShowDashboardTeacher = () => {
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/teacher/show-teachers`)
      .then((res) => {
        setTeacher(res.data.data);
      })
      .catch((res) => {
        console.log(res);
        toast({
          description: "Teachers could not be fetched",
          duration: 3000,
          position: "top-right",
          isClosable: true,
          status: "error",
        });
      });
  }, []);

  const [teacher, setTeacher] = useState([]);

  return (
    <>
      <VStack width={"100%"}  overflowY={"scroll"}>
        <HStack width={"100%"} justifyContent="center">
          {teacher.length ? (
            <TableContainer width={"100%"}>
              <Table
                variant="simple"
                width={"100%"}
                size={"sm"}
                overflowY={"hidden"}
              >
                <TableCaption placement="top">Teacher's List</TableCaption>
                <Thead width={"100%"}>
                  <Tr width={"100%"}>
                    <Th textAlign={"center"} width={"20%"}>
                      S.No
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      Name
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      Tid
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      {/* Edit */}
                      Position
                    </Th>
                    <Th textAlign={"center"} width={"20%"}>
                      Image
                    </Th>
                  </Tr>
                </Thead>
                <Tbody width={"100%"}>
                  {teacher?.map((ele, i) => {
                    return (
                      <Tr width={"80%"} key={i}>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"10%"}
                        >
                          {i + 1}
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"30%"}
                        >
                          {ele.fullName.toUpperCase()}
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"20%"}
                        >
                          {ele.tid}
                        </Td>
                        <Td
                          textAlign={"center"}
                          justifyContent={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"20%"}
                        >
                          {/* <Button bg={"transparent"} _hover={{ bg: "none" }}>
                            <MdEditNote style={{ fontSize: "30px" }} />
                          </Button> */}
                          {ele.position}
                        </Td>
                        <Td
                          textAlign={"center"}
                          border={"none"}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          width={"20%"}
                        >
                          <Avatar src={ele.image.secure_url} />
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Text mt={5}>Nothing To Show</Text>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default ShowDashboardTeacher;
