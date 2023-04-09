import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

export const Counter = ({ count ,title}) => {
    const [animatedCount, setAnimatedCount] = useState(0);
  
    useEffect(() => {
      let intervalId;
      if (count > 0) {
        let increment = 1;
        let currentCount = 0;
        intervalId = setInterval(() => {
          currentCount += increment;
          setAnimatedCount(currentCount);
          if (currentCount >= count) {
            clearInterval(intervalId);
          }
        }, 50);
      }
  
      return () => clearInterval(intervalId);
    }, [count]);
  
    return (
      <Box textAlign="center">
        <Text fontSize="150px" fontWeight="bold" color="gray.600">
          {animatedCount}
        </Text>
        <Text fontSize="md" color="gray.400">
          {title}
        </Text>
      </Box>
    );
  };
