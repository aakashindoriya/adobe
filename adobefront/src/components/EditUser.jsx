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
import { updateUser } from '../redux/actions/user.actions';

function EditUserForm({_id}) {
  const state=useSelector(s=>s.user)
  const dispatch=useDispatch()
  const toast=useToast()
  const [user, setUser] = useState({ name: '', bio: '' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };

  const handleBioChange = (event) => {
    setUser({ ...user, bio: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser({_id,...user,toast}))
    setUser({ name: '', bio: '' })
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
          <ModalHeader>Edit User</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing="4">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={user.name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Bio</FormLabel>
                  <Input
                    value={user.bio}
                    onChange={handleBioChange}
                    placeholder="Enter your bio"
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

export default EditUserForm;
