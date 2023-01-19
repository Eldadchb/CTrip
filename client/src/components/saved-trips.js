import ChoosingButton from "./choosing-buttons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

function SavedTrips() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <ChoosingButton
        key={"Saved-trips-button"}
        color="teal"
        onClick={onOpen}
        height={"10vh"}
        width="100%"
        borderRad={"5%"}
        title={"Saved Trip"}
      />

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
