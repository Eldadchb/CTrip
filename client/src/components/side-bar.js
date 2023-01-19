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
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SavedTrips from "./saved-trips";
import CreateNewTripMenu from "./create-new-trip-menu";

function SideBar({ setRoute }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
          <DrawerHeader justifyContent="center" display="flex"></DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={10} align="center">
              <CreateNewTripMenu setRoute={setRoute}></CreateNewTripMenu>

              <SavedTrips></SavedTrips>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SideBar;
