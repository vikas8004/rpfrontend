import React, { useEffect, useState } from "react";
import {
  HStack,
  VStack,
  Text,
  Image,
  useToast,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider
} from "@chakra-ui/react";
import axios from "axios";
import { baseUrl } from "../utils/constnats.jsx";
const ShowHomeTeacher = () => {
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
  const toast = useToast();
//   console.log(teacher);
  return (
    <HStack width={"full"} mt={"65px"} justifyContent={"center"}>
      <VStack width={["90%","90%","70%","60%"]} zIndex={-9} flexDirection={"row"} justifyContent={["center","center","space-between","space-between"]} flexWrap={"wrap"} gap={"4"} py={"5"}>
        {teacher.map((el, i) => {
          return <Card size={["lg","lg","md","md"]} width={["95%","70%","48%","48%"]} key={i}    variant={"filled"}>
          <CardBody width={"100%"}>
            <Image
              src={el.image.secure_url}
              boxSize={"200px"}
              mx={"auto"}
              rounded={"full"}
            />
            <Stack mt='6' spacing='3' justifyContent={"center"} width={"100%"}>
              <Heading width={"100%"} textAlign={"center"} size='md'>{el.fullName} ({el.tid})</Heading>
              <Text width={"100%"} textAlign={"center"}>
                {el.qualification}
              </Text>
              <Text width={"100%"} textAlign={"center"}>
                {el.position}
              </Text>
              <Text color='tomato' width={"100%"} textAlign={"center"} >
               {el.subjects[0]}
              </Text>
            </Stack>
          </CardBody>
          
          
        </Card>
        })}
      </VStack>
    </HStack>
  );
};

export default ShowHomeTeacher;
