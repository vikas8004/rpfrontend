import React from "react";
import {
  HStack,
  VStack,
  Text,
  Flex,
  Box,
  Spacer,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { Outlet, NavLink } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
const Dashboard = () => {
  return (
    <>
      <VStack >
        <HStack mt={"60px"} width={"100%"} justifyContent="space-between" >
          <VStack
            width={"150px"}
            height={"86vh"}
            // borderRight={"4px solid rgba(0,0,0,.3)"}
            alignItems={"flex-start"}
            ml={0.5}
            className="dashboard-sidebar"
            // position={"absolute"}
          >
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              <Box>
                <Menu>
                  <MenuButton
                    colorScheme="blue"
                    color={"blue"}
                    bg={"white"}
                    as={Button}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <PiStudent fontSize={"17px"} />
                      <Text ml={2}>Student</Text>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NavLink to={"/dashboard/student/registration"}>
                        Admission
                      </NavLink>
                    </MenuItem>{" "}
                    <MenuItem>
                      <NavLink to={"/dashboard/student/details"}>
                        Details
                      </NavLink>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box mt={4}>
                <Menu>
                  <MenuButton
                    colorScheme="blue"
                    bg={"none"}
                    color={"blue"}
                    as={Button}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <PiChalkboardTeacherFill fontSize={"17px"} />
                      <Text ml={2}>Teacher</Text>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NavLink to={"/dashboard/teacher/registration"}>
                        Add Teacher
                      </NavLink>
                    </MenuItem>{" "}
                    <MenuItem>
                      <NavLink to={"/dashboard/teacher/viewteacher"}>
                        View Teacher
                      </NavLink>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box mt={4}>
                <Menu>
                  <MenuButton
                    colorScheme="blue"
                    color={"blue"}
                    bg={"white"}
                    as={Button}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <FaAddressCard fontSize={"17px"} />
                      <Text ml={2}>AdmitCard</Text>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NavLink to={"/dashboard/admitcard/view-admit-card"}>
                        View card
                      </NavLink>
                    </MenuItem>{" "}
                    <MenuItem>
                      <NavLink
                        to={"/dashboard/student/admitcard/print-admit-card"}
                      >
                        Print card
                      </NavLink>
                    </MenuItem>{" "}
                  </MenuList>
                </Menu>
              </Box>
              <Box mt={4}>
                <Menu>
                  <MenuButton
                    colorScheme="blue"
                    color={"blue"}
                    bg={"white"}
                    as={Button}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <FaTable fontSize={"17px"} />
                      <Text ml={2}>Result</Text>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NavLink to={"/dashboard/result/addresult"}>
                        Add Result
                      </NavLink>
                    </MenuItem>{" "}
                    <MenuItem>
                      <NavLink to={"/dashboard/result/results/finalresult"}>
                        Final Result
                      </NavLink>
                    </MenuItem>{" "}
                  </MenuList>
                </Menu>
              </Box>
              <Box mt={4}>
                <Menu>
                  <MenuButton
                    colorScheme="blue"
                    color={"blue"}
                    bg={"white"}
                    as={Button}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <FaAddressCard fontSize={"17px"} />
                      <Text ml={2}>Id Card</Text>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NavLink to={"/dashboard/student/id-card/view-id-card"}>
                        View Card
                      </NavLink>
                    </MenuItem>{" "}
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </VStack>
          <VStack
            width={"90%"}
            // border={"1px solid red"}
            justifyContent={"flex-start"}
            height={"86vh"}
            // overflowY={"auto"}
            // border={"1px solid grey"}
            overflowX={"none"}
          >
            <Outlet />
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Dashboard;
