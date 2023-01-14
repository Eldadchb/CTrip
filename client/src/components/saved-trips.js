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
import { HamburgerIcon } from "@chakra-ui/icons";

function SavedTrips() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navigate = useNavigate();
  const navigateToResturantsPage = () => navigate("/resturants");
  const navigateToSavedTripsPage = () => navigate("/saved_trips");

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        marginTop="4"
        width="100%"
      >
        Saved Trips
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
            404
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={10} align="center"></Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SavedTrips;
