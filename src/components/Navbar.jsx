import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
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
} from "@chakra-ui/react";
import logo from "../assests/logo.jpg";
import { Link } from "react-router-dom";

import axios from "axios";
import {tokenContext} from "../context.jsx";
const Navbar = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token, setToken } = useContext(tokenContext);
  const logOutHandler = async () => {
    setToken("");
    const res = await axios.post("/api/v1/admin/logout");
    if (res) {
      const statusMsg = res.data.status;
      toast({
        title: "Logout",
        description: statusMsg,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      onClose();
    }
  };
  return (
    <>
      <nav className="mainnav">
        <HStack padding={2} justifyContent={"space-between"}>
          <Image src={logo} width={"60px"} height={"60px"} />
          <Text
            fontSize={["16px", "25px"]}
            color={"tomato"}
            fontWeight={"bolder"}
          >
            RP ADARSH INTER COLLEGE
          </Text>
          <Button bg={"tomato"} boxSize={50} rounded={"xl"} onClick={onOpen}>
            <MdMenu fontSize={"25px"} />
          </Button>
        </HStack>
        <VStack>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay backdropFilter={"blur(10px)"} />
            <DrawerContent>
              <DrawerHeader>
               <Image src={logo} boxSize={12}/>
                <DrawerCloseButton mt={"14px"} bg={"tomato"}>
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
                <Link to={"/student/registration"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Admission
                  </Button>
                </Link>{" "}
                <Link to={"/result"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Result
                  </Button>
                </Link>{" "}
                <Link to={"/student/view-admit-card"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Admit Card
                  </Button>
                </Link>{" "}
                <Link to={"/id-card"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Id Card
                  </Button>
                </Link>
                <Link to={"/contact"}>
                  <Button variant={"ghost"} onClick={onClose}>
                    Contact Us
                  </Button>
                </Link>{" "}
                {/* <Link to={"/about"}>
                  <Button variant={"ghost"} onClick={onClose}>About Us</Button>
                </Link>{" "} */}
              </VStack>
              <VStack
                position={"absolute"}
                bottom={"10px"}
                alignItems={"center"}
                width={"100%"}
              >
                {token ? (
                  <Link to={"/"}>
                    <Button bg={"tomato"} onClick={logOutHandler}>
                      Logout
                    </Button>
                  </Link>
                ) : (
                  <Link to={"/admin/login"}>
                    <Button bg={"tomato"} onClick={onClose}>
                      Login as Admin
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
