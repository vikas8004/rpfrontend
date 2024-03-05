import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
  Image,
  Tfoot,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { sum } from "../../utils/sum.jsx";
import { tokenContext } from "../../context.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";

const ShowUnitTestResult = () => {
  const { utResult } = useContext(tokenContext);
  const { foundStu, result } = utResult;
  console.log(foundStu,result);
  const classes1to8 = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const classes9to10 = ["9", "10"];
  const classes11to12 = ["11", "12"];
  const [sub, setSub] = useState([]);
  useEffect(() => {
    if (classes1to8.includes(foundStu.standard)) {
      const {
        hindi,
        english,
        math,
        science,
        gk,
        drawing,
        sanskrit,
        socialStudy,
        computer,
        pt,
      } = result;
      setSub([
        hindi,
        english,
        math,
        science,
        gk,
        drawing,
        sanskrit,
        socialStudy,
        computer,
        pt,
      ]);
    } else if (classes9to10.includes(foundStu.standard)) {
      const {
        hindi,
        english,
        math,
        science,
        drawing,
        socialStudy,
        homeScience,
      } = result;
      setSub([
        hindi,
        english,
        math,
        science,
        drawing,
        socialStudy,
        homeScience,
      ]);
    } else if (classes11to12.includes(foundStu.standard)) {
      const { hindi, english, math, bio, physics, chemistry } = result;
      setSub([hindi, english, math, bio, physics, chemistry]);
    }
  }, []);
  return (
    <>
      <VStack>
        <VStack
          mt={10}
          width={["100%", "90%"]}
          justifyContent={"center"}
          alignItems={"center"}
          className="result"
        >
          <TableContainer
            width={"100%"}
            padding={["3", "5"]}
            display={"flex"}
            justifyContent={"center"}
            mb={4}
          >
            {classes1to8.includes(foundStu.standard) ? (
              <Table
                variant="simple"
                colorScheme="black"
                width={["95%", "100%"]}
                size={"md"}
                border={"1px solid black"}
                textAlign={"center"}
              >
                <TableCaption placement="top" fontSize={"20px"}>
                  {`${doFirstLetterCapital(result.test)} Result ${
                    result.year
                  }`}
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      Name
                    </Th>
                    <Td textAlign={"center"}>
                      {doFirstLetterCapital(foundStu.fullName)}
                    </Td>
                    <Td rowSpan={2} justifyContent={"center"}>
                      <Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <Image
                          display={"flex"}
                          src={foundStu.image.secure_url}
                          boxSize={20}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      ROLL No
                    </Th>
                    <Td textAlign={"center"}>{result.rollno}</Td>
                  </Tr>
                  <Tr>
                    <Th color={"black"} textAlign={"center"}>
                      Subject
                    </Th>
                    <Th color={"black"} textAlign={"center"}>
                      Max
                    </Th>
                    <Th color={"black"} textAlign={"center"}>
                      Obtained
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Hindi
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.hindi}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      English
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20} </Td>
                    <Td textAlign={"center"}>{result.english}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Math
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20} </Td>
                    <Td textAlign={"center"}>{result.math}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Science
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.science}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Social Studies
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20} </Td>
                    <Td textAlign={"center"}>{result.socialStudy}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Sanskrit
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.sanskrit}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Computer
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.computer}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      G.K.
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.gk}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Drawing
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.drawing}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      P.T.
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20} </Td>
                    <Td textAlign={"center"}>{result.pt}</Td>
                  </Tr>
                </Tbody>

                <Tfoot>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      Total
                    </Th>
                    <Th textAlign={"center"} color={"black"}>
                    {result.test==="unittest1"?100:200}
                    </Th>
                    <Th textAlign={"center"} color={"black"}>
                      {sum(sub)}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            ) : classes9to10.includes(foundStu.standard) ? (
              <Table
                variant="simple"
                colorScheme="black"
                width={["95%", "100%"]}
                size={"md"}
                border={"1px solid black"}
                textAlign={"center"}
              >
                <TableCaption placement="top" fontSize={"20px"}>
                  {`${doFirstLetterCapital(result.test)} Result ${
                    result.year
                  }`}
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      Name
                    </Th>
                    <Td textAlign={"center"}>
                      {doFirstLetterCapital(foundStu.fullName)}
                    </Td>
                    <Td rowSpan={2} justifyContent={"center"}>
                      <Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <Image
                          display={"flex"}
                          src={foundStu.image.secure_url}
                          boxSize={20}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      ROLL No
                    </Th>
                    <Td textAlign={"center"}>{result.rollno}</Td>
                  </Tr>
                  <Tr>
                    <Th color={"black"} textAlign={"center"}>
                      Subject
                    </Th>
                    <Th color={"black"} textAlign={"center"}>
                      Max
                    </Th>
                    <Th color={"black"} textAlign={"center"}>
                      Obtained
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Hindi
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.hindi}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      English
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20} </Td>
                    <Td textAlign={"center"}>{result.english}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      {result.math ? "Math" : "HomeScience"}
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20} </Td>
                    <Td textAlign={"center"}>
                      {result.math
                        ? result.math
                        : result.homeScience}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Science
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.science}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Social Studies
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.socialStudy}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Drawing
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.drawing}</Td>
                  </Tr>
                </Tbody>

                <Tfoot>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      Total
                    </Th>
                    <Th textAlign={"center"} color={"black"}>
                    {result.test==="unittest1"?60:120}
                    </Th>
                    <Th textAlign={"center"} color={"black"}>
                      {sum(sub)}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            ) : classes11to12.includes(foundStu.standard) ? (
              <Table
                variant="simple"
                colorScheme="black"
                width={["95%", "100%"]}
                size={"md"}
                border={"1px solid black"}
                textAlign={"center"}
              >
                <TableCaption placement="top" fontSize={"20px"}>
                  {`${doFirstLetterCapital(result.test)} Result ${
                    result.year
                  }`}
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      Name
                    </Th>
                    <Td textAlign={"center"}>
                      {doFirstLetterCapital(foundStu.fullName)}
                    </Td>
                    <Td rowSpan={2} justifyContent={"center"}>
                      <Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <Image
                          display={"flex"}
                          src={foundStu.image.secure_url}
                          boxSize={20}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      ROLL No
                    </Th>
                    <Td textAlign={"center"}>{result.rollno}</Td>
                  </Tr>
                  <Tr>
                    <Th color={"black"} textAlign={"center"}>
                      Subject
                    </Th>
                    <Th color={"black"} textAlign={"center"}>
                      Max
                    </Th>
                    <Th color={"black"} textAlign={"center"}>
                      Obtained
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Hindi
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.hindi}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      English
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.english}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      {result.math ? "Math" : "Biology"}
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>
                      {result.math ? result.math : result.bio}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                     Physics
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.physics}</Td>
                  </Tr>
                  <Tr>
                    <Td color={"black"} textAlign={"center"} fontWeight={400}>
                      Chemistry
                    </Td>
                    <Td textAlign={"center"}>{result.test==="unittest1"?10:20}</Td>
                    <Td textAlign={"center"}>{result.chemistry}</Td>
                  </Tr>
                </Tbody>

                <Tfoot>
                  <Tr>
                    <Th textAlign={"center"} color={"black"}>
                      Total
                    </Th>
                    <Th textAlign={"center"} color={"black"}>
                    {result.test==="unittest1"?50:100}
                    </Th>
                    <Th textAlign={"center"} color={"black"}>
                      {sum(sub)}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            ) : (
              <Text>no result found</Text>
            )}
          </TableContainer>
          <Button
            mt={-7}
            colorScheme="orange"
            mb={"4"}
            onClick={() => {
              window.print();
            }}
            className="printResult"
          >
            Print Result
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default ShowUnitTestResult;
