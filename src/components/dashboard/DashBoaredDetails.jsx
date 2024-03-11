import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { HStack, VStack, Text, Button, Divider } from "@chakra-ui/react";
import { GiTeacher } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { baseUrl } from "../../utils/constnats";
const ChartComponent = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      // If a chart instance already exists, destroy it before creating a new one
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["RPAIC", "RBMP"],

        datasets: [
          {
            label: "Fees Collected (2024-2025)",
            data: [50000, 80000],
            // fill: true,
            backgroundColor: ["red", "tomato"],
            // borderColor: "white",
            barThickness: 20,
            barPercentage: 3,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Fee record",
        },
        legend: {
          display: true,
          position: "top",
        },
      },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};
const ChartComponent2 = (props) => {
  const { totalStudentRBMP, totalStudentRPAIC } = props.info;
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      // If a chart instance already exists, destroy it before creating a new one
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["RPAIC", "RBMP"],

        datasets: [
          {
            label: "Students",
            data: [totalStudentRPAIC, totalStudentRBMP],
            fill: true,
            backgroundColor: ["red", "tomato"],
            // borderColor: "white",
            barThickness: 20,
          },
        ],
      },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

const DashBoaredDetails = () => {
  const [totalStudentRPAIC, setTotalStudentRPAIC] = useState(0);
  const [totalStudentRBMP, setTotalStudentRBMP] = useState(0);
  const [totalTeacher, setTotalTeacher] = useState(0);
  useEffect(() => {
    fetch(`${baseUrl}/api/v1/student/totalstudent`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        res.data.groupedData.map((el) => {
          if (el._id === "rp adarsh inter college") {
            setTotalStudentRPAIC(el.count);
          } else {
            setTotalStudentRBMP(el.count);
          }
        });
        setTotalTeacher(res.data.noOfTeachers)
      });
  }, []);
  return (
    <>
      <VStack width={"95%"} overflowY={"auto"} py={"10px"}>
        <HStack
          width={"100%"}
          spacing={["10px", "3%", "1%", "1%"]}
          paddingX={"10px"}
          flexDir={["column", "column", "row", "row"]}
          py={"10px"}
        >
          <VStack
            width={["95%", "75%", "60%", "25%"]}
            boxShadow={"0px 0px 8px 1px grey"}
            py={"10px"}
            px={"10px"}
            _hover={{ boxShadow: "0px 0px 8px 4px grey", rounded: "md" }}
          >
            <HStack width={"100%"} justifyContent={"space-between"}>
              <FaPeopleGroup style={{ fontSize: "30px" }} />
              <Text textAlign={"right"} color={"tomato"}>
                23
              </Text>
            </HStack>
            <Text width={"100%"}>Employee</Text>
            <Divider height={"3px"} bg={"tomato"} />
            <Text width={"100%"} textAlign={"right"}>
              Total Strength
            </Text>
          </VStack>
          <VStack
            width={["95%", "75%", "60%", "25%"]}
            boxShadow={"0px 0px 8px 1px grey"}
            py={"10px"}
            px={"10px"}
            _hover={{ boxShadow: "0px 0px 8px 4px grey", rounded: "md" }}
          >
            <HStack width={"100%"} justifyContent={"space-between"}>
              <GiTeacher style={{ fontSize: "30px" }} />
              <Text textAlign={"right"} color={"tomato"}>
                {totalTeacher}
              </Text>
            </HStack>
            <Text width={"100%"}>Teachers</Text>
            <Divider height={"3px"} bg={"tomato"} />
            <Text width={"100%"} textAlign={"right"}>
              Total Strength
            </Text>
          </VStack>
          <VStack
            width={["95%", "75%", "60%", "25%"]}
            boxShadow={"0px 0px 8px 1px grey"}
            py={"10px"}
            px={"10px"}
            _hover={{ boxShadow: "0px 0px 8px 4px grey", rounded: "md" }}
          >
            <HStack width={"100%"} justifyContent={"space-between"}>
              <PiStudentFill style={{ fontSize: "30px" }} />
              <Text textAlign={"right"} color={"tomato"}>
                {totalStudentRBMP}
              </Text>
            </HStack>
            <Text width={"100%"}>Students (RBMP)</Text>
            <Divider height={"3px"} bg={"tomato"} />
            <Text width={"100%"} textAlign={"right"}>
              Total Strength
            </Text>
          </VStack>
          <VStack
            width={["95%", "75%", "60%", "25%"]}
            boxShadow={"0px 0px 8px 1px grey"}
            py={"10px"}
            px={"10px"}
            _hover={{ boxShadow: "0px 0px 8px 4px grey", rounded: "md" }}
          >
            <HStack width={"100%"} justifyContent={"space-between"}>
              <PiStudentFill style={{ fontSize: "30px" }} />
              <Text textAlign={"right"} color={"tomato"}>
                {totalStudentRPAIC}
              </Text>
            </HStack>
            <Text width={"100%"}>Students (RPAIC)</Text>
            <Divider height={"3px"} bg={"tomato"} />
            <Text width={"100%"} textAlign={"right"}>
              Total Strength
            </Text>
          </VStack>
        </HStack>
        <HStack
          width={"100%"}
          justifyContent={[
            "flex-start",
            "flex-start",
            "space-evenly",
            "space-evenly",
          ]}
          flexDirection={["column", "column", "column", "row"]}
          alignItems={"center"}
          py={4}
          height={"auto"}
          mt={["10px"]}
        >
          <HStack
            width={["200px", "300px", "380px", "400px"]}
            height={["auto", "auto"]}
          >
            {totalStudentRBMP && setTotalStudentRPAIC ? (
              <ChartComponent info={{ totalStudentRBMP, totalStudentRPAIC }} />
            ) : null}
          </HStack>
          <HStack
            width={["200px", "300px", "380px", "400px"]}
            height={["auto", "auto"]}
          >
            {totalStudentRBMP && setTotalStudentRPAIC ? (
              <ChartComponent2 info={{ totalStudentRBMP, totalStudentRPAIC }} />
            ) : null}
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default DashBoaredDetails;
