import { useNavigate } from "react-router-dom";
import SideBarButton from "./buttons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
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
import AutoComplete from "./auto-complete-bar";

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [position, setPosition] = useState();

  const navigate = useNavigate();
  const navigateToResturantsPage = () => navigate("/resturants");
  const navigateToSavedTripsPage = () => navigate("/saved_trips");

  return (
    <Box className="controlers">
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} marginBottom="4">
        <HamburgerIcon />
      </Button>

      <AutoComplete
        position={(currPosition) => {
          setPosition(currPosition);
        }}
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
