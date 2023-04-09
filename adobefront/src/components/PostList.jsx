import { Box, Center, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/actions/post.actions";
import ChakraModal from "./ChakraModal";
import CreatePostForm from "./PostForm";
import PostLike from "./PostLike";
import EditPost from "./EditPostForm";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };


console.log(posts)
  return (
    <Box>
      <Center>
      <Box m="2%">
        <ChakraModal name="Add post" >
          <CreatePostForm />
        </ChakraModal>
      </Box>
      </Center>
      {posts.map((post) => (
        <Flex
          key={post._id}
          alignItems="center"
          p={5}
          borderBottom={"1px solid"}
          borderStartRadius={"2xl"}
          borderEndRadius={"2xl"}
        >
          <Box flex="1">
            {/* <Text fontWeight="bold">{post.user_id.name}</Text> */}
            <Text>{post.content}</Text>
          </Box>
          <Spacer />
          <EditPost _id={post._id} />
          <IconButton
            _hover={{ bg: "transparent", scale: "1.2" }}
            icon={<DeleteIcon />}
            aria-label="Delete Post"
            variant="ghost"
            colorScheme="red"
            onClick={() => handleDeletePost(post._id)}
          />
          <PostLike _id={post._id}/>
        </Flex>
      ))}
    </Box>
  );
}

export default PostList;
