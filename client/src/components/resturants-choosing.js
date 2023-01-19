import ChoosingButton from "../components/choosing-buttons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Wrap,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState, useContext } from "react";
import ChoosingAttractions from "./attractions-choosing";
import UserDataContext from "../usersData/userContext";

function ChoosingResturants({ setRoute }) {
  const [resturants, setResturants] = useState()

  const result = new Set();
  const userDataTemp = useContext(UserDataContext);

  const handleChoosing = (resType) => {
    result.add(resType);
  };

  const handleSaveButton = () => {
    setResturants(result);
    saveFunction();
  };

  const saveFunction = () => {
    userDataTemp['keyword'] = Array.from(result)
  };

  const resturantType = [
    "Asian",
    "Israeli",
    "Turkish",
    "Cafe",
    "Maxican",
    "Persian",
    "Arabic",
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
        onClick={() => {
          handleChoosing(resturantName);
        }}
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
        colorScheme="green"
        onClick={() => handleSaveButton()}
        marginTop="4"
        width="30%"
      >
        Save
      </Button>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        marginTop="4"
        width="30%"
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
              <ChoosingAttractions setRoute={setRoute}></ChoosingAttractions>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChoosingResturants;
