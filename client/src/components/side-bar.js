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

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navigate = useNavigate();
  const navigateToResturantsPage = () => navigate("/resturants");
  const navigateToSavedTripsPage = () => navigate("/saved_trips");

  return (
    <Box className="side-bar">
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} marginTop="4">
        <HamburgerIcon />
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
            Main Menu
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={10} align="center">
              <SideBarButton
                title={"Create New Trip"}
                onClick={navigateToResturantsPage}
              />
              <SideBarButton
                title={"Saved Trips"}
                onClick={navigateToSavedTripsPage}
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SideBar;
