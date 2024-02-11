import React, { useContext, useState } from "react";
import { VStack, Button, Text, Input, Box, useToast } from "@chakra-ui/react";
import { baseUrl } from "../utils/constnats.jsx";
const IdCard = () => {
  const [loading, setLoading] = useState(false);
  const clickHandler = async () => {
    setLoading(true);
    const res = await fetch(`${baseUrl}/api/v1/allstudents`);
    if (res.ok) {
      const data = await res.json();
      console.log(data.data);
      setLoading(false);
    }
  };
  return (
    <>
      <VStack>
        <VStack
          mt={78}
          width={["100%", "60%"]}
          justifyContent={"center"}
          height={"80vh"}
        >
          <Button
            variant={"outline"}
            colorScheme="orange"
            type="submit"
            onClick={clickHandler}
            isLoading={loading}
            loadingText="Fetching"
          >
            Fetch data
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default IdCard;
