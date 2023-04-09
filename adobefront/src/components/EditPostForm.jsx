import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  IconButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/actions/post.actions';

function EditPost({_id}) {
  const state=useSelector(s=>s.user) 
  const dispatch=useDispatch()
  const toast=useToast()
  const [user, setUser] = useState({ content:"" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNameChange = (event) => {
    setUser({ ...user, content: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePost({_id,...user,toast}))
    setUser({ content:"" })
    onClose();
  };

  return (
    <>
      <IconButton
        _hover={{bg:"transparent"}}
        icon={<EditIcon />}
        aria-label="Edit User"
        variant="ghost"
        mr={2}
        onClick={onOpen}
        
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing="4">
                <FormControl>
                  <FormLabel>Content</FormLabel>
                  <Input
                    value={user.content}
                    onChange={handleNameChange}
                    placeholder="Enter Content"
                  />
                </FormControl>

                <Button w="full" type="submit" colorScheme="blue">
                  Save
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditPost;

