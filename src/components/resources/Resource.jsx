import React, { useEffect, useState } from "react";
import {
  HStack,
  VStack,
  Text,
  Table,
 
  Tbody,

  Tr,
 
  Td,

 
  Button,
} from "@chakra-ui/react";
import { MdDownload } from "react-icons/md";
import axios from "axios";
import { baseUrl } from "../../utils/constnats.jsx";
import { doFirstLetterCapital } from "../../utils/doFirstLetterCapital.jsx";
import { Link } from "react-router-dom";
const Resource = () => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseUrl}/api/v1/resource/get-resource`);
      setResource(res.data.data.foundResources);
    })();
  }, []);
  console.log(resource);
  return (
    <VStack width="full" mt="66px">
      {resource.length!=0 ? (
        <Table width={["90%", "80%", "60%"]}>
          <Tbody>
            {resource.map((el, i) => {
              return (
                <Tr key={i} width={"100%"}>
                  <Td width={"90%"}>{doFirstLetterCapital(el.title)}</Td>
                  <Td width={"10%"}>
                    <Button _hover={{ bg: "transparent" }}>
                      <a href={el.file.secure_url} download={el.fileName} target="_blank"><MdDownload /></a>
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Text>No Resources Found</Text>
      )}
    </VStack>
  );
};

export default Resource;
