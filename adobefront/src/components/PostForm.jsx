import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../redux/actions/post.actions";

function CreatePostForm() {
  const state = useSelector((state) => state.post);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const toast = useToast();
  const [post, setPost] = useState({
    content: "",
    user_id: "",
  });
  const [formError, setFormError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate user ID
    if (!post.user_id) {
      setFormError("Please select a user.");
      return;
    }

    dispatch(addNewPost({...post,toast}))
      .then(() => {
        setPost({
          content: "",
          user_id: "",
        });
        setFormError(null);
      })
      
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
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
        <FormControl id="content" isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            name="content"
            value={post.content}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="user_id" isRequired>
          <FormLabel>User</FormLabel>
          <Select name="user_id" value={post.user_id} onChange={handleChange}>
            <option value="">Select user</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{formError}</FormErrorMessage>
        </FormControl>

        <Button
          variant={"outline"}
          w="full"
          mt={4}
          colorScheme="blue"
          isLoading={state.loading}
          type="submit"
        >
          Create Post
        </Button>
      </form>
    </Box>
  );
}

export default CreatePostForm;
