import React, { useEffect } from "react";
import banner from "../assests/BANNER.png"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
const ShowAdmissionModel = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <HStack width={"full"} alignItems={"center"}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size={["sm","sm","md","lg"]}
        isCentered={true}
    
      >
        <ModalOverlay backdropFilter={"blur(8px)"}/>
        <ModalContent padding={"1"} width={["95%","100%"]} my={"auto"}style={{rotate:"-.5deg"}}>
          <ModalCloseButton mt={"-12px"} 
          mr={"-12px"}
          color={"white"} fontWeight={"800"} fontSize={"16px"} />
          <Image src={banner} rotate={"-10"}/>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default ShowAdmissionModel;
