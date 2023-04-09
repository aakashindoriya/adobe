import {
    Box,
    Flex,
    Heading,
  
  } from "@chakra-ui/react";
  import { Counter } from "../components/Couter";
  import { useEffect, useState } from "react";
  import axios from "axios";
import { TopFivePosts } from "../components/TopFivePosts";
  
  
  const PostAnalytics = () => {
      let [count,setCount]=useState(0)
      async function getCount(){
          try {
              const res= await axios(`${process.env.REACT_APP_BASE_URL}/analytics/posts`)
              let co=res.data.split(" ")
              setCount(+co[1])
              console.log(res)
          } catch (error) {
              alert(error.resposnse.data)
          }
      }
      useEffect(()=>{
          getCount()
      },[])
    return (
      <Flex justify="center" direction={["column","row"]} align="center" minH="100vh" gap="2" p="3">
        <Box
          p={6}
          boxShadow="lg"
          borderRadius="md"
          bg="white"
          flex={1}
          h="300px"
        >
          <Counter title="Total Posts" count={count} />
        </Box>
        <Box
          p={6}
          boxShadow="lg"
          borderRadius="md"
          bg="white"
          flex={1}
          h="300px"
        >
          <Heading size="md" mb={4}>
            Top Posts
          </Heading>
          <TopFivePosts />
        </Box>
      </Flex>
    );
  };
  
  export default PostAnalytics;
  