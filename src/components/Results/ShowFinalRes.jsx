import React, { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const ShowFinalRes = () => {
  const { finalResult } = useContext(tokenContext);
  const navigate = useNavigate();
  const classes1to8 = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const classes9to10 = ["9"];
  const classes11to12 = ["11"];
  // console.log(arr);
  // console.log(finalResult);
  const { stuDet, allTypeResult, allUnitTestResult } = finalResult;
  const [total, setTotal] = useState(0);
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
  useEffect(() => {
    if (classes1to8.includes(stuDet.standard)) {
      setTotal(
        spreadSum(
          spreadSum(
            quaterly.hindi,
            halfyearly.hindi,
            annually.hindi,
            spreadSum(unitTest1.hindi + unitTest2.hindi + unitTest3.hindi)
          ),
          spreadSum(
            quaterly.english,
            halfyearly.english,
            annually.english,
            spreadSum(unitTest1.english + unitTest2.english + unitTest3.english)
          ),
          spreadSum(
            quaterly.math,
            halfyearly.math,
            annually.math,
            spreadSum(unitTest1.math + unitTest2.math + unitTest3.math)
          ),
          spreadSum(
            quaterly.science,
            halfyearly.science,
            annually.science,
            spreadSum(unitTest1.science + unitTest2.science + unitTest3.science)
          ),
          spreadSum(
            quaterly.socialStudy +
              halfyearly.socialStudy +
              annually.socialStudy,
            spreadSum(
              unitTest1.socialStudy +
                unitTest2.socialStudy +
                unitTest3.socialStudy
            )
          ),
          spreadSum(
            quaterly.sanskrit,
            halfyearly.sanskrit,
            annually.sanskrit,
            spreadSum(
              unitTest1.sanskrit + unitTest2.sanskrit + unitTest3.sanskrit
            )
          ),
          spreadSum(
            quaterly.computer,
            halfyearly.computer,
            annually.computer,
            spreadSum(
              unitTest1.computer + unitTest2.computer + unitTest3.computer
            )
          ),
          spreadSum(
            quaterly.gk,
            halfyearly.gk,
            annually.gk,
            spreadSum(unitTest1.gk + unitTest2.gk + unitTest3.gk)
          ),
          spreadSum(
            quaterly.drawing,
            halfyearly.drawing,
            annually.drawing,
            spreadSum(unitTest1.drawing + unitTest2.drawing + unitTest3.drawing)
          ),
          spreadSum(
            quaterly.pt,
            halfyearly.pt,
            annually.pt,
            spreadSum(unitTest1.pt + unitTest2.pt + unitTest3.pt)
          )
        )
      );
    } else if (classes9to10.includes(stuDet.standard)) {
      setTotal(
        spreadSum(
          spreadSum(
            spreadSum(unitTest1.hindi + unitTest2.hindi + unitTest3.hindi),
            spreadSum(
              unitTest1.english + unitTest2.english + unitTest3.english
            ),
            spreadSum(
              unitTest1.math ? unitTest1.math : unitTest1.homeScience,
              unitTest2.math ? unitTest2.math : unitTest2.homeScience,
              unitTest3.math ? unitTest3.math : unitTest3.homeScience
            ),
            spreadSum(
              unitTest1.science + unitTest2.science + unitTest3.science
            ),
            spreadSum(
              unitTest1.socialStudy +
                unitTest2.socialStudy +
                unitTest3.socialStudy
            ),

            spreadSum(unitTest1.drawing + unitTest2.drawing + unitTest3.drawing)
          ),
          spreadSum(
            quaterly.hindi,
            quaterly.hinPrac,
            quaterly.english,
            quaterly.engPrac,
            quaterly.math ? quaterly.math : quaterly.homeScience,
            quaterly.math ? quaterly.mathPrac : quaterly.hsPrac,
            quaterly.science,
            quaterly.sciPrac,
            quaterly.socialStudy,
            quaterly.sstPrac,
            quaterly.drawing,
            quaterly.drawPrac
          ),
          spreadSum(
            halfyearly.hindi,
            halfyearly.hinPrac,
            halfyearly.english,
            halfyearly.engPrac,
            halfyearly.math ? halfyearly.math : halfyearly.homeScience,
            halfyearly.mathPrac ? halfyearly.mathPrac : halfyearly.hsPrac,
            halfyearly.science,
            halfyearly.sciPrac,
            halfyearly.socialStudy,
            halfyearly.sstPrac,
            halfyearly.drawing,
            halfyearly.drawPrac
          ),
          spreadSum(
            annually.hindi,
            annually.hinPrac,
            annually.english,
            annually.engPrac,
            annually.math ? annually.math : annually.homeScience,
            annually.mathPrac ? annually.mathPrac : annually.hsPrac,
            annually.science,
            annually.sciPrac,
            annually.socialStudy,
            annually.sstPrac,
            annually.drawing,
            annually.drawPrac
          )
        )
      );
    } else if (classes11to12.includes(stuDet.standard)) {
      setTotal(
        spreadSum(
          spreadSum(
            spreadSum(unitTest1.hindi + unitTest2.hindi + unitTest3.hindi),
            spreadSum(
              unitTest1.english + unitTest2.english + unitTest3.english
            ),
            spreadSum(
              unitTest1.math ? unitTest1.math : unitTest1.bio,
              unitTest2.math ? unitTest2.math : unitTest2.bio,
              unitTest3.math ? unitTest3.math : unitTest3.bio
            ),
            spreadSum(
              unitTest1.chemistry + unitTest2.chemistry + unitTest3.chemistry
            ),

            spreadSum(unitTest1.physics + unitTest2.physics + unitTest3.physics)
          ),
          spreadSum(
            quaterly.hindi,
            quaterly.hinPrac,
            quaterly.english,
            quaterly.engPrac,
            quaterly.math ? quaterly.math : quaterly.bio,
            quaterly.math ? quaterly.mathPrac : quaterly.bioPrac,
            quaterly.chemistry,
            quaterly.chemisPrac,
            quaterly.physics,
            quaterly.phyPrac
          ),
          spreadSum(
            halfyearly.hindi,
            halfyearly.hinPrac,
            halfyearly.english,
            halfyearly.engPrac,
            halfyearly.math ? halfyearly.math : halfyearly.bio,
            halfyearly.mathPrac ? halfyearly.mathPrac : halfyearly.bioPrac,
            halfyearly.chemistry,
            halfyearly.chemisPrac,
            halfyearly.physics,
            halfyearly.phyPrac
          ),
          spreadSum(
            annually.hindi,
            annually.hinPrac,
            annually.english,
            annually.engPrac,
            annually.math ? annually.math : annually.bio,
            annually.mathPrac ? annually.mathPrac : annually.bioPrac,
            annually.chemistry,
            annually.chemisPrac,
            annually.physics,
            annually.phyPrac
          )
        )
      );
    }
  }, []);
  return (
    <>
      <VStack width={"100%"} mt={"65px"} mb={"20px"}>
        {classes1to8.includes(stuDet.standard) ? (
          <VStack width={"100%"}>
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
                        annually.hindi,
                        spreadSum(
                          unitTest1.hindi + unitTest2.hindi + unitTest3.hindi
                        )
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
                        unitTest1.english +
                          unitTest2.english +
                          unitTest3.english
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
                        annually.english,
                        spreadSum(
                          unitTest1.english +
                            unitTest2.english +
                            unitTest3.english
                        )
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
                      {spreadSum(
                        quaterly.math,
                        halfyearly.math,
                        annually.math,
                        spreadSum(
                          unitTest1.math + unitTest2.math + unitTest3.math
                        )
                      )}
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
                        unitTest1.science +
                          unitTest2.science +
                          unitTest3.science
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
                        annually.science,
                        spreadSum(
                          unitTest1.science +
                            unitTest2.science +
                            unitTest3.science
                        )
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
                        annually.socialStudy,
                        spreadSum(
                          unitTest1.socialStudy +
                            unitTest2.socialStudy +
                            unitTest3.socialStudy
                        )
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
                        annually.sanskrit,
                        spreadSum(
                          unitTest1.sanskrit +
                            unitTest2.sanskrit +
                            unitTest3.sanskrit
                        )
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
                        annually.computer,
                        spreadSum(
                          unitTest1.computer +
                            unitTest2.computer +
                            unitTest3.computer
                        )
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
                    <td>
                      {spreadSum(
                        quaterly.gk,
                        halfyearly.gk,
                        annually.gk,
                        spreadSum(unitTest1.gk + unitTest2.gk + unitTest3.gk)
                      )}
                    </td>
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
                        unitTest1.drawing +
                          unitTest2.drawing +
                          unitTest3.drawing
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
                        annually.drawing,
                        spreadSum(
                          unitTest1.drawing +
                            unitTest2.drawing +
                            unitTest3.drawing
                        )
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
                    <td>
                      {spreadSum(
                        quaterly.pt,
                        halfyearly.pt,
                        annually.pt,
                        spreadSum(unitTest1.pt + unitTest2.pt + unitTest3.pt)
                      )}
                    </td>
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
                    <td style={{ fontWeight: "bold" }}>{total}</td>
                  </tr>
                </tbody>
              </table>
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
                    // border={"1px solid black"}
                    display="flex"
                    justifyContent={"center"}
                  >
                    <FaCheck />
                  </Box>
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
                    // border={"1px solid black"}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    <ImCross />
                  </Box>
                </HStack>
              </VStack>
              <VStack mt={"-5px"}>
                <HStack>
                  <Text>Total</Text>
                </HStack>
                <HStack mt={"-13px"}>
                  <Box
                    width={"50px"}
                    height={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={"bolder"}
                  >
                    2000
                  </Box>
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
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={"bolder"}
                  >
                    {total}
                  </Box>
                </HStack>
              </VStack>
              <VStack mt={"-5px"}>
                <HStack>
                  <Text>Grade</Text>
                </HStack>
                <HStack mt={"-10px"}>
                  <Box
                    width={"50px"}
                    height={"20px"}
                    fontWeight={"bolder"}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    {Math.round((total * 100) / 2000) >= 75
                      ? "A"
                      : Math.round((total * 100) / 2000) >= 50
                      ? "B"
                      : "C"}
                  </Box>
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
                <HStack width={"100px"} height={"30px"}>
                  <Text>{new Date().toLocaleDateString()}</Text>
                </HStack>
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
              <Button
                bg={"tomato"}
                onClick={() => window.print()}
                className="noPrint"
              >
                Print
              </Button>
              <Button
                onClick={() =>
                  navigate("/dashboard/result/results/finalresult")
                }
                bg={"tomato"}
                className="noPrint"
              >
                Go To Result
              </Button>
            </HStack>
          </VStack>
        ) : classes9to10.includes(stuDet.standard) ? (
          <VStack width={"100%"}>
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
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.hindi + unitTest2.hindi + unitTest3.hindi
                      )}
                    </td>
                    <td>{quaterly.hindi}</td>
                    <td>{quaterly.hinPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.hindi, quaterly.hinPrac)}</td>
                    <td>{halfyearly.hindi}</td>
                    <td>{halfyearly.hinPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(halfyearly.hindi, halfyearly.hinPrac)}</td>
                    <td>{annually.hindi}</td>
                    <td>{annually.hinPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.hindi, annually.hinPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.hindi, quaterly.hinPrac),
                        spreadSum(halfyearly.hindi, halfyearly.hinPrac),
                        spreadSum(annually.hindi, annually.hinPrac),
                        spreadSum(
                          unitTest1.hindi + unitTest2.hindi + unitTest3.hindi
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>{unitTest1.english}</td>
                    <td>{unitTest2.english}</td>
                    <td>{unitTest3.english}</td>
                    <td></td>
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.english +
                          unitTest2.english +
                          unitTest3.english
                      )}
                    </td>
                    <td>{quaterly.english}</td>
                    <td>{quaterly.engPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.english, quaterly.engPrac)}</td>
                    <td>{halfyearly.english}</td>
                    <td>{halfyearly.engPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(halfyearly.english, halfyearly.engPrac)}</td>
                    <td>{annually.english}</td>
                    <td>{annually.engPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.english, annually.engPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.english, quaterly.engPrac),
                        spreadSum(halfyearly.english, halfyearly.engPrac),
                        spreadSum(annually.english, annually.engPrac),
                        spreadSum(
                          unitTest1.english +
                            unitTest2.english +
                            unitTest3.english
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>{unitTest1.math ? "Mathematics" : "Homescience"}</td>
                    <td>
                      {unitTest1.math ? unitTest1.math : unitTest1.homeScience}
                    </td>
                    <td>
                      {unitTest2.math ? unitTest2.math : unitTest2.homeScience}
                    </td>
                    <td>
                      {unitTest3.math ? unitTest3.math : unitTest3.homeScience}
                    </td>
                    <td></td>
                    <td>50</td>
                    <td>
                      {spreadSum(
                        unitTest1.math ? unitTest1.math : unitTest1.homeScience,
                        unitTest2.math ? unitTest2.math : unitTest2.homeScience,
                        unitTest3.math ? unitTest3.math : unitTest3.homeScience
                      )}
                    </td>
                    <td>
                      {quaterly.math ? quaterly.math : quaterly.homeScience}
                    </td>
                    <td>
                      {quaterly.mathPrac ? quaterly.mathPrac : quaterly.hsPrac}
                    </td>
                    <td>100</td>
                    <td>
                      {spreadSum(
                        quaterly.math ? quaterly.math : quaterly.homeScience,
                        quaterly.mathPrac ? quaterly.mathPrac : quaterly.hsPrac
                      )}
                    </td>
                    <td>
                      {halfyearly.math
                        ? halfyearly.math
                        : halfyearly.homeScience}
                    </td>
                    <td>
                      {halfyearly.mathPrac
                        ? halfyearly.mathPrac
                        : halfyearly.hsPrac}
                    </td>
                    <td>100</td>
                    <td>
                      {spreadSum(
                        halfyearly.math
                          ? halfyearly.math
                          : halfyearly.homeScience,
                        halfyearly.mathPrac
                          ? halfyearly.mathPrac
                          : halfyearly.hsPrac
                      )}
                    </td>
                    <td>
                      {annually.math ? annually.math : annually.homeScience}
                    </td>
                    <td>
                      {annually.mathPrac ? annually.mathPrac : annually.hsPrac}
                    </td>
                    <td>100</td>
                    <td>
                      {spreadSum(
                        annually.math ? annually.math : annually.homeScience,
                        annually.mathPrac ? annually.mathPrac : annually.hsPrac
                      )}
                    </td>
                    <td>
                      {spreadSum(
                        spreadSum(
                          quaterly.math ? quaterly.math : quaterly.homeScience,
                          quaterly.mathPrac
                            ? quaterly.mathPrac
                            : quaterly.hsPrac
                        ),
                        spreadSum(
                          halfyearly.math
                            ? halfyearly.math
                            : halfyearly.homeScience,
                          halfyearly.mathPrac
                            ? halfyearly.mathPrac
                            : halfyearly.hsPrac
                        ),
                        spreadSum(
                          annually.math ? annually.math : annually.homeScience,
                          annually.mathPrac
                            ? annually.mathPrac
                            : annually.hsPrac
                        ),
                        spreadSum(
                          unitTest1.math
                            ? unitTest1.math
                            : unitTest1.homeScience,
                          unitTest2.math
                            ? unitTest2.math
                            : unitTest2.homeScience,
                          unitTest3.math
                            ? unitTest3.math
                            : unitTest3.homeScience
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>{unitTest1.science}</td>
                    <td>{unitTest2.science}</td>
                    <td>{unitTest3.science}</td>
                    <td></td>
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.science +
                          unitTest2.science +
                          unitTest3.science
                      )}
                    </td>
                    <td>{quaterly.science}</td>
                    <td>{quaterly.sciPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.science, quaterly.sciPrac)}</td>
                    <td>{halfyearly.science}</td>
                    <td>{halfyearly.sciPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(halfyearly.science, halfyearly.sciPrac)}</td>
                    <td>{annually.science}</td>
                    <td>{annually.sciPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.science, annually.sciPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.science, quaterly.sciPrac),
                        spreadSum(halfyearly.science, halfyearly.sciPrac),
                        spreadSum(annually.science, annually.sciPrac),
                        spreadSum(
                          unitTest1.science +
                            unitTest2.science +
                            unitTest3.science
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Sst</td>
                    <td>{unitTest1.socialStudy}</td>
                    <td>{unitTest2.socialStudy}</td>
                    <td>{unitTest3.socialStudy}</td>
                    <td></td>
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.socialStudy +
                          unitTest2.socialStudy +
                          unitTest3.socialStudy
                      )}
                    </td>
                    <td>{quaterly.socialStudy}</td>
                    <td>{quaterly.sstPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.socialStudy, quaterly.sstPrac)}</td>
                    <td>{halfyearly.socialStudy}</td>
                    <td>{halfyearly.sstPrac}</td>
                    <td>100</td>
                    <td>
                      {spreadSum(halfyearly.socialStudy, halfyearly.sstPrac)}
                    </td>
                    <td>{annually.socialStudy}</td>
                    <td>{annually.sstPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.socialStudy, annually.sstPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.socialStudy, quaterly.sstPrac),
                        spreadSum(halfyearly.socialStudy, halfyearly.sstPrac),
                        spreadSum(annually.socialStudy, annually.sstPrac),
                        spreadSum(
                          unitTest1.socialStudy +
                            unitTest2.socialStudy +
                            unitTest3.socialStudy
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Drawing</td>
                    <td>{unitTest1.drawing}</td>
                    <td>{unitTest2.drawing}</td>
                    <td>{unitTest3.drawing}</td>
                    <td></td>
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.drawing +
                          unitTest2.drawing +
                          unitTest3.drawing
                      )}
                    </td>
                    <td>{quaterly.drawing}</td>
                    <td>{quaterly.drawPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.drawing, quaterly.drawPrac)}</td>
                    <td>{halfyearly.drawing}</td>
                    <td>{halfyearly.drawPrac}</td>
                    <td>100</td>
                    <td>
                      {spreadSum(halfyearly.drawing, halfyearly.drawPrac)}
                    </td>
                    <td>{annually.drawing}</td>
                    <td>{annually.drawPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.drawing, annually.drawPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.drawing, quaterly.drawPrac),
                        spreadSum(halfyearly.drawing, halfyearly.drawPrac),
                        spreadSum(annually.drawing, annually.drawPrac),
                        spreadSum(
                          unitTest1.drawing +
                            unitTest2.drawing +
                            unitTest3.drawing
                        )
                      )}
                    </td>
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
                          unitTest1.math
                            ? unitTest1.math
                            : unitTest1.homeScience,
                          unitTest2.math
                            ? unitTest2.math
                            : unitTest2.homeScience,
                          unitTest3.math
                            ? unitTest3.math
                            : unitTest3.homeScience
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
                          unitTest1.drawing +
                            unitTest2.drawing +
                            unitTest3.drawing
                        )
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}>
                      {spreadSum(
                        quaterly.hindi,
                        quaterly.hinPrac,
                        quaterly.english,
                        quaterly.engPrac,
                        quaterly.math ? quaterly.math : quaterly.homeScience,
                        quaterly.math ? quaterly.mathPrac : quaterly.hsPrac,
                        quaterly.science,
                        quaterly.sciPrac,
                        quaterly.socialStudy,
                        quaterly.sstPrac,
                        quaterly.drawing,
                        quaterly.drawPrac
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}>
                      {spreadSum(
                        halfyearly.hindi,
                        halfyearly.hinPrac,
                        halfyearly.english,
                        halfyearly.engPrac,
                        halfyearly.math
                          ? halfyearly.math
                          : halfyearly.homeScience,
                        halfyearly.mathPrac
                          ? halfyearly.mathPrac
                          : halfyearly.hsPrac,
                        halfyearly.science,
                        halfyearly.sciPrac,
                        halfyearly.socialStudy,
                        halfyearly.sstPrac,
                        halfyearly.drawing,
                        halfyearly.drawPrac
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}>
                      {spreadSum(
                        annually.hindi,
                        annually.hinPrac,
                        annually.english,
                        annually.engPrac,
                        annually.math ? annually.math : annually.homeScience,
                        annually.mathPrac ? annually.mathPrac : annually.hsPrac,
                        annually.science,
                        annually.sciPrac,
                        annually.socialStudy,
                        annually.sstPrac,
                        annually.drawing,
                        annually.drawPrac
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}>{total}</td>
                  </tr>
                </tbody>
              </table>
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
                    // border={"1px solid black"}
                    display="flex"
                    justifyContent={"center"}
                  >
                    <FaCheck />
                  </Box>
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
                    // border={"1px solid black"}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    <ImCross />
                  </Box>
                </HStack>
              </VStack>
              <VStack mt={"-5px"}>
                <HStack>
                  <Text>Total</Text>
                </HStack>
                <HStack mt={"-13px"}>
                  <Box
                    width={"50px"}
                    height={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={"bolder"}
                  >
                    2100
                  </Box>
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
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={"bolder"}
                  >
                    {total}
                  </Box>
                </HStack>
              </VStack>
              <VStack mt={"-5px"}>
                <HStack>
                  <Text>Grade</Text>
                </HStack>
                <HStack mt={"-10px"}>
                  <Box
                    width={"50px"}
                    height={"20px"}
                    fontWeight={"bolder"}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    {Math.round((total * 100) / 2100) >= 75
                      ? "A"
                      : Math.round((total * 100) / 2100) >= 50
                      ? "B"
                      : "C"}
                  </Box>
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
                <HStack width={"100px"} height={"30px"}>
                  <Text>{new Date().toLocaleDateString()}</Text>
                </HStack>
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
              <Button
                bg={"tomato"}
                onClick={() => window.print()}
                className="noPrint"
              >
                Print
              </Button>
              <Button
                onClick={() =>
                  navigate("/dashboard/result/results/finalresult")
                }
                bg={"tomato"}
                className="noPrint"
              >
                Go To Result
              </Button>
            </HStack>
          </VStack>
        ) : classes11to12.includes(stuDet.standard) ? (
          <VStack width={"100%"}>
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
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.hindi + unitTest2.hindi + unitTest3.hindi
                      )}
                    </td>
                    <td>{quaterly.hindi}</td>
                    <td>{quaterly.hinPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.hindi, quaterly.hinPrac)}</td>
                    <td>{halfyearly.hindi}</td>
                    <td>{halfyearly.hinPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(halfyearly.hindi, halfyearly.hinPrac)}</td>
                    <td>{annually.hindi}</td>
                    <td>{annually.hinPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.hindi, annually.hinPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.hindi, quaterly.hinPrac),
                        spreadSum(halfyearly.hindi, halfyearly.hinPrac),
                        spreadSum(annually.hindi, annually.hinPrac),
                        spreadSum(
                          unitTest1.hindi + unitTest2.hindi + unitTest3.hindi
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>{unitTest1.english}</td>
                    <td>{unitTest2.english}</td>
                    <td>{unitTest3.english}</td>
                    <td></td>
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.english +
                          unitTest2.english +
                          unitTest3.english
                      )}
                    </td>
                    <td>{quaterly.english}</td>
                    <td>{quaterly.engPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.english, quaterly.engPrac)}</td>
                    <td>{halfyearly.english}</td>
                    <td>{halfyearly.engPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(halfyearly.english, halfyearly.engPrac)}</td>
                    <td>{annually.english}</td>
                    <td>{annually.engPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.english, annually.engPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.english, quaterly.engPrac),
                        spreadSum(halfyearly.english, halfyearly.engPrac),
                        spreadSum(annually.english, annually.engPrac),
                        spreadSum(
                          unitTest1.english +
                            unitTest2.english +
                            unitTest3.english
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>{unitTest1.math ? "Mathematics" : "Biology"}</td>
                    <td>{unitTest1.math ? unitTest1.math : unitTest1.bio}</td>
                    <td>{unitTest2.math ? unitTest2.math : unitTest2.bio}</td>
                    <td>{unitTest3.math ? unitTest3.math : unitTest3.bio}</td>
                    <td></td>
                    <td>50</td>
                    <td>
                      {spreadSum(
                        unitTest1.math ? unitTest1.math : unitTest1.bio,
                        unitTest2.math ? unitTest2.math : unitTest2.bio,
                        unitTest3.math ? unitTest3.math : unitTest3.bio
                      )}
                    </td>
                    <td>{quaterly.math ? quaterly.math : quaterly.bio}</td>
                    <td>
                      {quaterly.mathPrac ? quaterly.mathPrac : quaterly.bioPrac}
                    </td>
                    <td>100</td>
                    <td>
                      {spreadSum(
                        quaterly.math ? quaterly.math : quaterly.bio,
                        quaterly.mathPrac ? quaterly.mathPrac : quaterly.bioPrac
                      )}
                    </td>
                    <td>
                      {halfyearly.math ? halfyearly.math : halfyearly.bio}
                    </td>
                    <td>
                      {halfyearly.mathPrac
                        ? halfyearly.mathPrac
                        : halfyearly.bioPrac}
                    </td>
                    <td>100</td>
                    <td>
                      {spreadSum(
                        halfyearly.math ? halfyearly.math : halfyearly.bio,
                        halfyearly.mathPrac
                          ? halfyearly.mathPrac
                          : halfyearly.bioPrac
                      )}
                    </td>
                    <td>{annually.math ? annually.math : annually.bio}</td>
                    <td>
                      {annually.mathPrac ? annually.mathPrac : annually.bioPrac}
                    </td>
                    <td>100</td>
                    <td>
                      {spreadSum(
                        annually.math ? annually.math : annually.bio,
                        annually.mathPrac ? annually.mathPrac : annually.bioPrac
                      )}
                    </td>
                    <td>
                      {spreadSum(
                        spreadSum(
                          quaterly.math ? quaterly.math : quaterly.bio,
                          quaterly.mathPrac
                            ? quaterly.mathPrac
                            : quaterly.bioPrac
                        ),
                        spreadSum(
                          halfyearly.math ? halfyearly.math : halfyearly.bio,
                          halfyearly.mathPrac
                            ? halfyearly.mathPrac
                            : halfyearly.bioPrac
                        ),
                        spreadSum(
                          annually.math ? annually.math : annually.bio,
                          annually.mathPrac
                            ? annually.mathPrac
                            : annually.bioPrac
                        ),
                        spreadSum(
                          unitTest1.math ? unitTest1.math : unitTest1.bio,
                          unitTest2.math ? unitTest2.math : unitTest2.bio,
                          unitTest3.math ? unitTest3.math : unitTest3.bio
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Physics</td>
                    <td>{unitTest1.physics}</td>
                    <td>{unitTest2.physics}</td>
                    <td>{unitTest3.physics}</td>
                    <td></td>
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.physics +
                          unitTest2.physics +
                          unitTest3.physics
                      )}
                    </td>
                    <td>{quaterly.physics}</td>
                    <td>{quaterly.phyPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(quaterly.physics, quaterly.phyPrac)}</td>
                    <td>{halfyearly.physics}</td>
                    <td>{halfyearly.phyPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(halfyearly.physics, halfyearly.phyPrac)}</td>
                    <td>{annually.physics}</td>
                    <td>{annually.phyPrac}</td>
                    <td>100</td>
                    <td>{spreadSum(annually.physics, annually.phyPrac)}</td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.physics, quaterly.phyPrac),
                        spreadSum(halfyearly.physics, halfyearly.phyPrac),
                        spreadSum(annually.physics, annually.phyPrac),
                        spreadSum(
                          unitTest1.physics +
                            unitTest2.physics +
                            unitTest3.physics
                        )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Chemistry</td>
                    <td>{unitTest1.chemistry}</td>
                    <td>{unitTest2.chemistry}</td>
                    <td>{unitTest3.chemistry}</td>
                    <td></td>
                    <td>{50}</td>
                    <td>
                      {spreadSum(
                        unitTest1.chemistry +
                          unitTest2.chemistry +
                          unitTest3.chemistry
                      )}
                    </td>
                    <td>{quaterly.chemistry}</td>
                    <td>{quaterly.chemisPrac}</td>
                    <td>100</td>
                    <td>
                      {spreadSum(quaterly.chemistry, quaterly.chemisPrac)}
                    </td>
                    <td>{halfyearly.chemistry}</td>
                    <td>{halfyearly.chemisPrac}</td>
                    <td>100</td>
                    <td>
                      {spreadSum(halfyearly.chemistry, halfyearly.chemisPrac)}
                    </td>
                    <td>{annually.chemistry}</td>
                    <td>{annually.chemisPrac}</td>
                    <td>100</td>
                    <td>
                      {spreadSum(annually.chemistry, annually.chemisPrac)}
                    </td>
                    <td>
                      {spreadSum(
                        spreadSum(quaterly.chemistry, quaterly.chemisPrac),
                        spreadSum(halfyearly.chemistry, halfyearly.chemisPrac),
                        spreadSum(annually.chemistry, annually.chemisPrac),
                        spreadSum(
                          unitTest1.chemistry +
                            unitTest2.chemistry +
                            unitTest3.chemistry
                        )
                      )}
                    </td>
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
                          unitTest1.math ? unitTest1.math : unitTest1.bio,
                          unitTest2.math ? unitTest2.math : unitTest2.bio,
                          unitTest3.math ? unitTest3.math : unitTest3.bio
                        ),
                        spreadSum(
                          unitTest1.chemistry +
                            unitTest2.chemistry +
                            unitTest3.chemistry
                        ),

                        spreadSum(
                          unitTest1.physics +
                            unitTest2.physics +
                            unitTest3.physics
                        )
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}>
                      {spreadSum(
                        quaterly.hindi,
                        quaterly.hinPrac,
                        quaterly.english,
                        quaterly.engPrac,
                        quaterly.math ? quaterly.math : quaterly.bio,
                        quaterly.math ? quaterly.mathPrac : quaterly.bioPrac,
                        quaterly.chemistry,
                        quaterly.chemisPrac,
                        quaterly.physics,
                        quaterly.phyPrac
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}>
                      {spreadSum(
                        halfyearly.hindi,
                        halfyearly.hinPrac,
                        halfyearly.english,
                        halfyearly.engPrac,
                        halfyearly.math ? halfyearly.math : halfyearly.bio,
                        halfyearly.mathPrac
                          ? halfyearly.mathPrac
                          : halfyearly.bioPrac,
                        halfyearly.chemistry,
                        halfyearly.chemisPrac,
                        halfyearly.physics,
                        halfyearly.phyPrac
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}></td>
                    <td style={{ fontWeight: "bold" }}>
                      {spreadSum(
                        annually.hindi,
                        annually.hinPrac,
                        annually.english,
                        annually.engPrac,
                        annually.math ? annually.math : annually.bio,
                        annually.mathPrac
                          ? annually.mathPrac
                          : annually.bioPrac,
                        annually.chemistry,
                        annually.chemisPrac,
                        annually.physics,
                        annually.phyPrac
                      )}
                    </td>
                    <td style={{ fontWeight: "bold" }}>{total}</td>
                  </tr>
                </tbody>
              </table>
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
                    // border={"1px solid black"}
                    display="flex"
                    justifyContent={"center"}
                  >
                    <FaCheck />
                  </Box>
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
                    // border={"1px solid black"}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    <ImCross />
                  </Box>
                </HStack>
              </VStack>
              <VStack mt={"-5px"}>
                <HStack>
                  <Text>Total</Text>
                </HStack>
                <HStack mt={"-13px"}>
                  <Box
                    width={"50px"}
                    height={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={"bolder"}
                  >
                    1750
                  </Box>
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
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={"bolder"}
                  >
                    {total}
                  </Box>
                </HStack>
              </VStack>
              <VStack mt={"-5px"}>
                <HStack>
                  <Text>Grade</Text>
                </HStack>
                <HStack mt={"-10px"}>
                  <Box
                    width={"50px"}
                    height={"20px"}
                    fontWeight={"bolder"}
                    justifyContent={"center"}
                    display={"flex"}
                  >
                    {Math.round((total * 100) / 1750) >= 75
                      ? "A"
                      : Math.round((total * 100) / 1750) >= 50
                      ? "B"
                      : "C"}
                  </Box>
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
                <HStack width={"100px"} height={"30px"}>
                  <Text>{new Date().toLocaleDateString()}</Text>
                </HStack>
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
              <Button
                bg={"tomato"}
                onClick={() => window.print()}
                className="noPrint"
              >
                Print
              </Button>
              <Button
                onClick={() =>
                  navigate("/dashboard/result/results/finalresult")
                }
                bg={"tomato"}
                className="noPrint"
              >
                Go To Result
              </Button>
            </HStack>
          </VStack>
        ) : (
          <Text>No result found</Text>
        )}
      </VStack>
    </>
  );
};
export default ShowFinalRes;
