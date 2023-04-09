import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex bg="gray.100" p={4} alignItems="center" pos="sticky" top="0%" zIndex={"100"}>
      <Box>
        <Link to="/">
          <Text fontSize="2xl" fontWeight="bold">
            Adobe
          </Text>
        </Link>
      </Box>
      <Spacer />
      <Flex>
        <Link to="/">
          <Text mr={4}>User</Text>
        </Link>
        <Link to="/post">
          <Text mr={4}>Post</Text>
        </Link>
        <Link to="/useranalytics">
          <Text mr={4}>User-Analytics</Text>
        </Link>
        <Link to="/postanalytics">
          <Text mr={4}>Post-Analytics</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
