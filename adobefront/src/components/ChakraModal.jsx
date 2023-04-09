import { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader,  ModalBody, ModalCloseButton, } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ChakraModal({children,name,title}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen} leftIcon={<FaPlus />}>
        {name}
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton icon={<FaMinus />} />
          <ModalBody>
            {children}
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </>
  );
}
