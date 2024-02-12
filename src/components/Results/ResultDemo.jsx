import React, { useContext, useEffect } from "react";
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
  Box
} from "@chakra-ui/react";
import { sum } from "../../utils/sum.jsx";
import { tokenContext } from "../../context.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";

const ResultDemo = () => {
  const { result } = useContext(tokenContext);
  const resultData = result.data[0];

  const {
    computer,
    drawing,
    english,
    gk,
    hindi,
    math,
    pt,
    sanskrit,
    science,
    socialStudy,
  } = resultData;
  const sub = [
    computer,
    drawing,
    english,
    gk,
    hindi,
    math,
    pt,
    sanskrit,
    science,
    socialStudy,
  ];


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
            <Table
              variant="simple"
              colorScheme="black"
              width={["95%", "100%"]}
              size={"md"}
              border={"1px solid black"}
              textAlign={"center"}
              
            >
              <TableCaption placement="top" fontSize={"20px"}>
                {`${doFirstLetterCapital(resultData.term)} Result ${
                  resultData.year
                }`}
              </TableCaption>
              <Thead>
                <Tr>
                  <Th textAlign={"center"} color={"black"}>
                    Name
                  </Th>
                  <Td textAlign={"center"}>
                    {doFirstLetterCapital(resultData.StudentInfo[0].fullName)}
                  </Td>
                  <Td rowSpan={2} justifyContent={"center"}>
                    <Box width={"100%"} display={"flex"} justifyContent={"center"}>
                    <Image
                      display={"flex"}
                      src={resultData.StudentInfo[0].image.secure_url}
                      boxSize={20}
                    />
                    </Box>
                  </Td>
                </Tr>
                <Tr>
                  <Th textAlign={"center"} color={"black"}>
                    ROLL No
                  </Th>
                  <Td textAlign={"center"}>{resultData.rollno}</Td>
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
                  <Td textAlign={"center"}>{resultData.max}</Td>
                  <Td textAlign={"center"}>{resultData.hindi}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    English
                  </Td>
                  <Td textAlign={"center"}>{resultData.max} </Td>
                  <Td textAlign={"center"}>{resultData.english}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Math
                  </Td>
                  <Td textAlign={"center"}>{resultData.max} </Td>
                  <Td textAlign={"center"}>{resultData.math}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Science
                  </Td>
                  <Td textAlign={"center"}>{resultData.max}</Td>
                  <Td textAlign={"center"}>{resultData.science}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Social Studies
                  </Td>
                  <Td textAlign={"center"}>{resultData.max} </Td>
                  <Td textAlign={"center"}>{resultData.socialStudy}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Sanskrit
                  </Td>
                  <Td textAlign={"center"}>{resultData.max}</Td>
                  <Td textAlign={"center"}>{resultData.sanskrit}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Computer
                  </Td>
                  <Td textAlign={"center"}>{resultData.max}</Td>
                  <Td textAlign={"center"}>{resultData.computer}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    G.K.
                  </Td>
                  <Td textAlign={"center"}>{resultData.max}</Td>
                  <Td textAlign={"center"}>{resultData.gk}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Drawing
                  </Td>
                  <Td textAlign={"center"}>{resultData.max}</Td>
                  <Td textAlign={"center"}>{resultData.drawing}</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    P.T.
                  </Td>
                  <Td textAlign={"center"}>{resultData.max} </Td>
                  <Td textAlign={"center"}>{resultData.pt}</Td>
                </Tr>
              </Tbody>

              <Tfoot>
                <Tr>
                  <Th textAlign={"center"} color={"black"}>
                    Total
                  </Th>
                  <Th textAlign={"center"} color={"black"}>
                    500
                  </Th>
                  <Th textAlign={"center"} color={"black"}>
                    {sum(sub)}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
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

export default ResultDemo;