import { Box, Button, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/actions/user.actions";
import ChakraModal from "./ChakraModal";
import CreateUserForm from "./UserForm";
import EditUserForm from "./EditUser";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <Box>
        <Center>
        <Box  m="2%">
            <ChakraModal name="Add User" title="create new user">
                <CreateUserForm />
            </ChakraModal>
        </Box>
        </Center>
      {users.map((user) => (
        <Flex key={user.id} alignItems="center" p={5} borderBottom={"1px solid "} borderStartRadius={"2xl"} borderEndRadius={"2xl"} >
          <Box flex="1">
            <Text fontWeight="bold">{user.name}</Text>
            <Text>{user.email}</Text>
          </Box>
          <EditUserForm _id={user._id} />
          <IconButton
            _hover={{bg:"transparent",scale:"1.2"}}
            icon={<DeleteIcon />}
            aria-label="Delete User"
            variant="ghost"
            colorScheme="red"
            onClick={() => handleDeleteUser(user._id)}
          />
        </Flex>
      ))}
    </Box>
  );
}

export default UserList;
