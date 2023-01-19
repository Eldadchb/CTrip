import { useNavigate } from "react-router-dom";
import ChoosingButton from "./choosing-buttons";
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
import ChoosingResturants from "./resturants-choosing";

function CreateNewTripMenu({ setRoute }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <ChoosingButton
        key={"create-new-trip-button"}
        color="teal"
        onClick={onOpen}
        height={"10vh"}
        width="100%"
        borderRad={"5%"}
        title={"Create New Trip"}
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
            🍔 🍕 🥗
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={2} align="center">
              <ChoosingResturants setRoute={setRoute}></ChoosingResturants>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CreateNewTripMenu;
