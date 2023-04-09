import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const TopFivePosts = () => {
let [posts,setPosts]=useState([])
async function getTop(){
try {
    const res= await axios(`${process.env.REACT_APP_BASE_URL}/analytics/posts/top-liked`)
    console.log(res)
    setPosts([...res.data])
} catch (error) {
    alert(error.resposnse.data)
}

}
useEffect(()=>{
    getTop()
},[])

return (
      <Stack spacing={4}>
        {posts?.map(({ _id, content, likes },index) => (
          <Flex key={_id} alignItems="center">
            <Text fontWeight="bold" mr={2}>
              {index+1}.
            </Text>
            <Box flex={1} maxH={"30px"} overflowY={"scroll"}>
              <Text>{content}</Text>
            </Box>
              <Text>Total Likes :{likes}</Text>
            
          </Flex>
        ))}
      </Stack>
    );
};