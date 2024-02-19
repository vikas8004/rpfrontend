import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import {
  HStack,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Divider,
  Text,
  useToast,
  Box,
} from "@chakra-ui/react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";

import axios from "axios";
import { tokenContext } from "../context.jsx";
import { baseUrl } from "../utils/constnats.jsx";
const Navbar = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token, setToken } = useContext(tokenContext);
  const dashboardHandler = async () => {
    onClose();
  };
  const logOutHandler = async () => {
    setToken("");
    const res = await fetch(`${baseUrl}/api/v1/admin/logout`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(res);
    if (res.ok) {
      onClose();
      const data = await res.json();
      const statusMsg = data.status;
      toast({
        title: "Logout",
        description: statusMsg,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <>
      <nav className="mainnav">
        <HStack justifyContent={"space-between"}>
          <Image src={logo} width={"50px"} height={"50px"} />
          <Text
            fontSize={["16px", "20px"]}
            color={"white"}
            fontWeight={"400"}
            textAlign={"left"}
            width={"100%"}
            
          >
            RP ADARSH INTER COLLEGE
          </Text>
          <Button bg={"none"} _hover={{background:"none"}} rounded={"xl"} onClick={onOpen} color={"white"}>
            <MdMenu fontSize={"25px"} />
          </Button>
        </HStack>
        <VStack>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay backdropFilter={"blur(10px)"} />
            <DrawerContent>
              <DrawerHeader>
                <Image src={logo} boxSize={12} />
                <DrawerCloseButton mt={"14px"} bg={"tomato"} color={"white"}>
                  <RxCross2 fontSize={"25px"} />
                </DrawerCloseButton>
              </DrawerHeader>
              <Divider orientation="horizontal" />
              <VStack alignItems={"flex-start"} m={3}>
                <Link to={"/"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Home
                  </Button>
                </Link>{" "}
                {/* <Link to={"/student/registration"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Admission
                  </Button>
                </Link>{" "} */}
                <Link to={"/result"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Result
                  </Button>
                </Link>{" "}
                {/* <Link to={"/student/view-admit-card"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Admit Card
                  </Button>
                </Link>{" "} */}
                {/* <Link to={"/id-card"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Id Card
                  </Button>
                </Link> */}
                <Link to={"/gallery"}>
                  <Button variant={"ghost"} onClick={onClose}>Gallery</Button>
                </Link>{" "}
                <Link to={"/about-student"}>
                  <Button variant={"ghost"} onClick={onClose}>Students</Button>
                </Link>{" "}
                <Link to={"/contact"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Contact Us
                  </Button>
                </Link>{" "}
              </VStack>
              <VStack
                position={"absolute"}
                bottom={"10px"}
                alignItems={"center"}
                width={"100%"}
              >
                {token ? (
                  <Box display={"flex"} justifyContent={"space-evenly"} width={"100%"}>
                    <Link to={"/"}>
                      <Button bg={"tomato"} onClick={logOutHandler} size={"md"}>
                        Logout
                      </Button>
                    </Link>
                    <Link to={"/dashboard"}>
                      <Button  onClick={dashboardHandler} size={"md"} color={"blue.600"}>
                      <MdDashboard />{" "}Dashboard
                      </Button>
                    </Link>
                  </Box>
                ) : (
                  <Link to={"/admin/login"}>
                    <Button bg={"tomato"} onClick={onClose} size={"sm"}>
                      Login
                    </Button>
                  </Link>
                )}
              </VStack>
            </DrawerContent>
          </Drawer>
        </VStack>
      </nav>
    </>
  );
};

export default Navbar;
