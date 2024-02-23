import React, { useContext } from "react";
import {
  HStack,
  VStack,
  Text,
  Button,
  Box,
  Image,
  Heading,
} from "@chakra-ui/react";
import logo from "../../assests/logo.jpg";
import { tokenContext } from "../../context.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import { spreadSum } from "../../utils/sum.jsx";
import {useNavigate} from "react-router-dom"
const ShowFinalRes = () => {
  const { finalResult } = useContext(tokenContext);
  const navigate=useNavigate()
  const arr = "1,2,3,4,5,6,7,8".split(",");
  // console.log(arr);
  // console.log(finalResult);
  const { stuDet, allTypeResult, allUnitTestResult } = finalResult;
  // const stuDet = {
  //   standard: "3",
  // };
  //   console.log(stuDet);
  const quaterly = allTypeResult.filter((item) => item.term == "quaterly")[0];
  const halfyearly = allTypeResult.filter(
    (item) => item.term == "halfyearly"
  )[0];
  const annually = allTypeResult.filter((item) => item.term == "annually")[0];
  const unitTest1 = allUnitTestResult.filter(
    (item) => item.test === "unittest1"
  )[0];
  const unitTest2 = allUnitTestResult.filter(
    (item) => item.test === "unittest2"
  )[0];
  const unitTest3 = allUnitTestResult.filter(
    (item) => item.test === "unittest3"
  )[0];
  // console.log(quaterly, halfyearly, annually, unitTest1, unitTest2, unitTest3);
  return (
    <>
      <VStack width={"100%"} mt={"65px"} mb={"20px"}>
        <HStack width={"90%"} justifyContent={"space-between"}>
          <Box width={"30%"} display={"flex"} justifyContent={"flex-end"}>
            <Image src={logo} boxSize={"100px"}></Image>
          </Box>
          <Box
            width={"70%"}
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
          >
            <Heading size={"md"} textAlign={"left"}>
              {`PROGRESS REPORT SESSION - ${stuDet.year}`}{" "}
            </Heading>
            <Heading size={"md"} textAlign={"left"}>
              {stuDet.schoolName === "rp adarsh inter college"
                ? "RP ADARSH INTER COLLEGE REHAR BASTI"
                : "RAM BELAS MEMORIAL PUBLIC CONVENT SCHOOL BEHDEELA CHAIRKAILA BASTI"}
            </Heading>
          </Box>
        </HStack>
        <HStack justifyContent={"space-between"} width={"90%"}>
          <Text ml={"20px"}>
            Student's Name : {doFirstLetterCapital(stuDet.fullName)}
          </Text>
          <Text>Class : {stuDet.standard}</Text>
          <Text mr={"20px"}>Roll No : {stuDet.rollno}</Text>
        </HStack>
        <VStack width={"90%"}>
          {arr.includes(stuDet.standard) ? (
            <table
              border={"1px solid black"}
              style={{ width: "100%" }}
              className="finalTable"
            >
              <tbody>
                <tr>
                  <td>Subject</td>
                  <td colSpan={3}>
                    <tr style={{ border: "none" }}>
                      <td
                        colSpan={3}
                        style={{
                          border: "none",
                          borderBottom: "1px solid black",
                          textAlign: "center",
                        }}
                      >
                        Unit Test
                      </td>
                    </tr>
                    <tr style={{ border: "none" }}>
                      <td style={{ border: "none" }}>1st</td>
                      <td style={{ border: "none" }}>2nd</td>
                      <td style={{ border: "none" }}>3rd</td>
                    </tr>
                  </td>
                  <td>P</td>
                  <td>MM</td>
                  <td>Total</td>
                  <td>Quaterly</td>
                  <td>I/P</td>
                  <td>MM</td>
                  <td>Total</td>
                  <td>Halfyearly</td>
                  <td>I/P</td>
                  <td>MM</td>
                  <td>Total</td>
                  <td>Annual</td>
                  <td>I/P</td>
                  <td>MM</td>
                  <td>Total</td>
                  <td>Grand Total</td>
                </tr>
                <tr>
                  <td>Hindi</td>
                  <td>{unitTest1.hindi}</td>
                  <td>{unitTest2.hindi}</td>
                  <td>{unitTest3.hindi}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.hindi + unitTest2.hindi + unitTest3.hindi
                    )}
                  </td>
                  <td>{quaterly.hindi}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.hindi}</td>
                  <td>{halfyearly.hindi}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.hindi}</td>
                  <td>{annually.hindi}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.hindi}</td>
                  <td>
                    {spreadSum(
                      quaterly.hindi,
                      halfyearly.hindi,
                      annually.hindi
                    )}
                  </td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>{unitTest1.english}</td>
                  <td>{unitTest2.english}</td>
                  <td>{unitTest3.english}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.english + unitTest2.english + unitTest3.english
                    )}
                  </td>
                  <td>{quaterly.english}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.english}</td>
                  <td>{halfyearly.english}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.english}</td>
                  <td>{annually.english}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.english}</td>
                  <td>
                    {spreadSum(
                      quaterly.english,
                      halfyearly.english,
                      annually.english
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Mathematics</td>
                  <td>{unitTest1.math}</td>
                  <td>{unitTest2.math}</td>
                  <td>{unitTest3.math}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.math + unitTest2.math + unitTest3.math
                    )}
                  </td>
                  <td>{quaterly.math}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.math}</td>
                  <td>{halfyearly.math}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.math}</td>
                  <td>{annually.math}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.math}</td>
                  <td>
                    {spreadSum(quaterly.math, halfyearly.math, annually.math)}
                  </td>
                </tr>
                <tr>
                  <td>Science</td>
                  <td>{unitTest1.science}</td>
                  <td>{unitTest2.science}</td>
                  <td>{unitTest3.science}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.science + unitTest2.science + unitTest3.science
                    )}
                  </td>
                  <td>{quaterly.science}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.science}</td>
                  <td>{halfyearly.science}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.science}</td>
                  <td>{annually.science}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.science}</td>
                  <td>
                    {spreadSum(
                      quaterly.science,
                      halfyearly.science,
                      annually.science
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Sst</td>
                  <td>{unitTest1.socialStudy}</td>
                  <td>{unitTest2.socialStudy}</td>
                  <td>{unitTest3.socialStudy}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.socialStudy +
                        unitTest2.socialStudy +
                        unitTest3.socialStudy
                    )}
                  </td>
                  <td>{quaterly.socialStudy}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.socialStudy}</td>
                  <td>{halfyearly.socialStudy}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.socialStudy}</td>
                  <td>{annually.socialStudy}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.socialStudy}</td>
                  <td>
                    {spreadSum(
                      quaterly.socialStudy,
                      halfyearly.socialStudy,
                      annually.socialStudy
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Sanskrit</td>
                  <td>{unitTest1.sanskrit}</td>
                  <td>{unitTest2.sanskrit}</td>
                  <td>{unitTest3.sanskrit}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.sanskrit +
                        unitTest2.sanskrit +
                        unitTest3.sanskrit
                    )}
                  </td>
                  <td>{quaterly.sanskrit}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.sanskrit}</td>
                  <td>{halfyearly.sanskrit}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.sanskrit}</td>
                  <td>{annually.sanskrit}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.sanskrit}</td>
                  <td>
                    {spreadSum(
                      quaterly.sanskrit,
                      halfyearly.sanskrit,
                      annually.sanskrit
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Computer</td>
                  <td>{unitTest1.computer}</td>
                  <td>{unitTest2.computer}</td>
                  <td>{unitTest3.computer}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.computer +
                        unitTest2.computer +
                        unitTest3.computer
                    )}
                  </td>
                  <td>{quaterly.computer}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.computer}</td>
                  <td>{halfyearly.computer}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.computer}</td>
                  <td>{annually.computer}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.computer}</td>
                  <td>
                    {spreadSum(
                      quaterly.computer,
                      halfyearly.computer,
                      annually.computer
                    )}
                  </td>
                </tr>
                <tr>
                  <td>G.K</td>
                  <td>{unitTest1.gk}</td>
                  <td>{unitTest2.gk}</td>
                  <td>{unitTest3.gk}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(unitTest1.gk + unitTest2.gk + unitTest3.gk)}
                  </td>
                  <td>{quaterly.gk}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.gk}</td>
                  <td>{halfyearly.gk}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.gk}</td>
                  <td>{annually.gk}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.gk}</td>
                  <td>{spreadSum(quaterly.gk, halfyearly.gk, annually.gk)}</td>
                </tr>
                <tr>
                  <td>Drawing</td>
                  <td>{unitTest1.drawing}</td>
                  <td>{unitTest2.drawing}</td>
                  <td>{unitTest3.drawing}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(
                      unitTest1.drawing + unitTest2.drawing + unitTest3.drawing
                    )}
                  </td>
                  <td>{quaterly.drawing}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.drawing}</td>
                  <td>{halfyearly.drawing}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.drawing}</td>
                  <td>{annually.drawing}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.drawing}</td>
                  <td>
                    {spreadSum(
                      quaterly.drawing,
                      halfyearly.drawing,
                      annually.drawing
                    )}
                  </td>
                </tr>
                <tr>
                  <td>PT</td>
                  <td>{unitTest1.pt}</td>
                  <td>{unitTest2.pt}</td>
                  <td>{unitTest3.pt}</td>
                  <td></td>
                  <td>{spreadSum(10, unitTest2.max, unitTest3.max)}</td>
                  <td>
                    {spreadSum(unitTest1.pt + unitTest2.pt + unitTest3.pt)}
                  </td>
                  <td>{quaterly.pt}</td>
                  <td></td>
                  <td>{quaterly.max}</td>
                  <td>{quaterly.pt}</td>
                  <td>{halfyearly.pt}</td>
                  <td></td>
                  <td>{halfyearly.max}</td>
                  <td>{halfyearly.pt}</td>
                  <td>{annually.pt}</td>
                  <td></td>
                  <td>{annually.max}</td>
                  <td>{annually.pt}</td>
                  <td>{spreadSum(quaterly.pt, halfyearly.pt, annually.pt)}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Grand Total</td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}>
                    {spreadSum(
                      spreadSum(
                        unitTest1.hindi + unitTest2.hindi + unitTest3.hindi
                      ),
                      spreadSum(
                        unitTest1.english +
                          unitTest2.english +
                          unitTest3.english
                      ),
                      spreadSum(
                        unitTest1.math + unitTest2.math + unitTest3.math
                      ),
                      spreadSum(
                        unitTest1.science +
                          unitTest2.science +
                          unitTest3.science
                      ),
                      spreadSum(
                        unitTest1.socialStudy +
                          unitTest2.socialStudy +
                          unitTest3.socialStudy
                      ),
                      spreadSum(
                        unitTest1.sanskrit +
                          unitTest2.sanskrit +
                          unitTest3.sanskrit
                      ),
                      spreadSum(
                        unitTest1.computer +
                          unitTest2.computer +
                          unitTest3.computer
                      ),
                      spreadSum(unitTest1.gk + unitTest2.gk + unitTest3.gk),
                      spreadSum(
                        unitTest1.drawing +
                          unitTest2.drawing +
                          unitTest3.drawing
                      ),
                      spreadSum(unitTest1.pt + unitTest2.pt + unitTest3.pt)
                    )}
                  </td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}>
                    {spreadSum(
                      quaterly.hindi,
                      quaterly.english,
                      quaterly.math,
                      quaterly.science,
                      quaterly.socialStudy,
                      quaterly.sanskrit,
                      quaterly.computer,
                      quaterly.gk,
                      quaterly.drawing,
                      quaterly.pt
                    )}
                  </td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}>
                    {spreadSum(
                      halfyearly.hindi,
                      halfyearly.english,
                      halfyearly.math,
                      halfyearly.science,
                      halfyearly.socialStudy,
                      halfyearly.sanskrit,
                      halfyearly.computer,
                      halfyearly.gk,
                      halfyearly.drawing,
                      halfyearly.pt
                    )}
                  </td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}></td>
                  <td style={{ fontWeight: "bold" }}>
                    {spreadSum(
                      annually.hindi,
                      annually.english,
                      annually.math,
                      annually.science,
                      annually.socialStudy,
                      annually.sanskrit,
                      annually.computer,
                      annually.gk,
                      annually.drawing,
                      annually.pt
                    )}
                  </td>
                  <td style={{ fontWeight: "bold" }}>
                    {spreadSum(
                      spreadSum(
                        quaterly.hindi,
                        halfyearly.hindi,
                        annually.hindi
                      ),
                      spreadSum(
                        quaterly.english,
                        halfyearly.english,
                        annually.english
                      ),
                      spreadSum(quaterly.math, halfyearly.math, annually.math),
                      spreadSum(
                        quaterly.science,
                        halfyearly.science,
                        annually.science
                      ),
                      spreadSum(
                        quaterly.socialStudy +
                          halfyearly.socialStudy +
                          annually.socialStudy
                      ),
                      spreadSum(
                        quaterly.sanskrit,
                        halfyearly.sanskrit,
                        annually.sanskrit
                      ),
                      spreadSum(
                        quaterly.computer,
                        halfyearly.computer,
                        annually.computer
                      ),
                      spreadSum(quaterly.gk, halfyearly.gk, annually.gk),
                      spreadSum(
                        quaterly.drawing,
                        halfyearly.drawing,
                        annually.drawing
                      ),
                      spreadSum(quaterly.pt, halfyearly.pt, annually.pt)
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : stuDet.standard === "9" ? (
            <Text>9th</Text>
          ) : stuDet.standard === "11" ? (
            <Text>11th</Text>
          ) : (
            <Text>lkg ukg nursery</Text>
          )}
        </VStack>
        <HStack
          width={"90%"}
          border={"1px solid black"}
          padding={"3px"}
          paddingX={"20px"}
          justifyContent={"space-between"}
          pb={"1"}
        >
          <VStack mt={"-5px"}>
            <HStack>
              <Text>Passed</Text>
            </HStack>
            <HStack mt={"-10px"}>
              <Box
                width={"50px"}
                height={"20px"}
                border={"1px solid black"}
              ></Box>
            </HStack>
          </VStack>
          <VStack mt={"-5px"}>
            <HStack>
              <Text>Failed</Text>
            </HStack>
            <HStack mt={"-10px"}>
              <Box
                width={"50px"}
                height={"20px"}
                border={"1px solid black"}
              ></Box>
            </HStack>
          </VStack>
          <VStack mt={"-5px"}>
            <HStack>
              <Text>Total</Text>
            </HStack>
            <HStack mt={"-10px"}>
              <Box
                width={"50px"}
                height={"20px"}
                border={"1px solid black"}
                textAlign={"center"}
                verticalAlign={"middle"}
              ></Box>
            </HStack>
          </VStack>
          <VStack mt={"-5px"}>
            <HStack>
              <Text>Obtained</Text>
            </HStack>
            <HStack mt={"-10px"}>
              <Box
                width={"50px"}
                height={"20px"}
                border={"1px solid black"}
              ></Box>
            </HStack>
          </VStack>
          <VStack mt={"-5px"}>
            <HStack>
              <Text>Position</Text>
            </HStack>
            <HStack mt={"-10px"}>
              <Box
                width={"50px"}
                height={"20px"}
                border={"1px solid black"}
              ></Box>
            </HStack>
          </VStack>
        </HStack>
        <HStack width={"90%"} justifyContent={"space-between"}>
          <VStack>
            <HStack width={"100px"} height={"20px"}>
              <Text width={"100%"} fontWeight={"600"} py={"4px"}>
                Date
              </Text>
            </HStack>
            <HStack width={"100px"} height={"30px"}></HStack>
          </VStack>
          <VStack>
            <HStack width={"100px"} height={"20px"}>
              <Text
                textAlign={"center"}
                width={"100%"}
                fontWeight={"600"}
                py={"4px"}
              >
                Prepared By
              </Text>
            </HStack>
            <HStack width={"100px"} height={"30px"}></HStack>
          </VStack>
          <VStack>
            <HStack width={"100px"} height={"20px"}>
              <Text
                textAlign={"center"}
                width={"100%"}
                fontWeight={"600"}
                py={"4px"}
              >
                Chekced By
              </Text>
            </HStack>
            <HStack width={"100px"} height={"30px"}></HStack>
          </VStack>
          <VStack>
            <HStack width={"100px"} height={"20px"}>
              <Text
                textAlign={"right"}
                width={"100%"}
                fontWeight={"600"}
                py={"4px"}
              >
                Principal
              </Text>
            </HStack>
            <HStack width={"100px"} height={"30px"}></HStack>
          </VStack>
        </HStack>
        <HStack>
          <Button bg={"tomato"} onClick={()=>window.print()} className="noPrint">Print</Button>
          <Button onClick={()=>navigate("/dashboard/result/results/finalresult") } bg={"tomato"} className="noPrint">Go To Result</Button>
        </HStack>
      </VStack>
    </>
  );
};
export default ShowFinalRes;
