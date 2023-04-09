import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../redux/actions/user.actions";

function CreateUserForm() {
  const state = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const toast = useToast();
  const [user, setUser] = useState({
    name: "",
    email: "",
    bio: "",
  });
  const [formError, setFormError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!isEmailValid(user.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    dispatch(addNewUser(user));
    // Reset form fields
    setUser({
      name: "",
      email: "",
      bio: "",
    });
    setFormError(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error!",
        description: state.error,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  }, [state.error]);

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <FormErrorMessage>{formError}</FormErrorMessage>
        </FormControl>

        <FormControl id="bio">
          <FormLabel>Bio</FormLabel>
          <Textarea name="bio" value={user.bio} onChange={handleChange} />
        </FormControl>

        <Button
          variant={"outline"}
          w="full"
          mt={4}
          colorScheme="blue"
          isLoading={state.loading}
          type="submit"
        >
          Create User
        </Button>
      </form>
    </Box>
  );
}

export default CreateUserForm;
