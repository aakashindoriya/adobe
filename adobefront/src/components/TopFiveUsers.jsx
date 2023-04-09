import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const TopFiveUsers = ({topUsers}) => {
let [users,setusers]=useState([])
async function getTop(){
try {
    const res= await axios(`${process.env.REACT_APP_BASE_URL}/analytics/users/top-active`)
    setusers([...res.data])
} catch (error) {
    alert(error.resposnse.data)
}

}
useEffect(()=>{
    getTop()
},[])

return (
      <Stack spacing={4}>
        {users?.map(({ _id, name, postCount },index) => (
          <Flex key={_id} alignItems="center">
            <Text fontWeight="bold" mr={2}>
              {index+1}.
            </Text>
            <Box flex={1}>
              <Text>{name}</Text>
            </Box>
              <Text>Total Posts :{postCount}</Text>
            
          </Flex>
        ))}
      </Stack>
    );
};