import { useNavigate } from "react-router-dom";
import SideBarButton from "./buttons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import ChoosingResturants from "./resturants-choosing";

function CreateNewTripMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        marginTop="4"
        width="100%"
      >
        Create New Trip
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader justifyContent="center" display="flex">
            🍔 🍕 🥗
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={2} align="center">
              <ChoosingResturants></ChoosingResturants>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CreateNewTripMenu;
