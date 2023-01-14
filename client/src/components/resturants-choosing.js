import { ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ChoosingButton from "../components/choosing-buttons";
import NavigateButton from "../components/navigate-button";
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
import ChoosingAttractions from "./attractions-choosing";

function ChoosingResturants() {
  const resturantType = [
    "Asian",
    "Israeli",
    "Turkish",
    "Cafe",
    "Maxican",
    "Persian",
    "Arabian",
    "Georgian",
    "Russian",
    "Bakery",
    "Burger",
  ];
  const colorOfButton = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "purple",
    "messenger",
  ];

  const buttonsList = [];

  resturantType.forEach((resturantName) => {
    const currentColor =
      colorOfButton[Math.round(Math.random() * (colorOfButton.length - 1))];
    const currentWidth = "100%";
    const currentHeight = "10vh";
    const currentborderRad = "5%";
    buttonsList.push(
      <ChoosingButton
        key={resturantName}
        color={currentColor}
        height={currentHeight}
        width={currentWidth}
        borderRad={currentborderRad}
        title={resturantName}
      ></ChoosingButton>
    );
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Wrap spacing={5}>{buttonsList}</Wrap>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        marginTop="4"
        width="60%"
      >
        Next
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
            🎡 🏛️ 🛍️
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={2} align="center">
              <ChoosingAttractions></ChoosingAttractions>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ChoosingResturants;
