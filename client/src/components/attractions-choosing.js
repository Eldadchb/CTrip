import ChoosingButton from "../components/choosing-buttons";
import ChoosingDistance from "./distance-choosing";
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
import UserDataContext from "../usersData/userContext";


function ChoosingAttractions() {
  const [attractions, setAttractions] = useState()

  const result = new Set();
  const userDataTemp = useContext(UserDataContext);

  const handleChoosing = (atrrType) => {
    result.add(atrrType);
  };

  const handleSaveButton = () => {
    setAttractions(result);
    saveFunction();
  };

  const saveFunction = () => {
    userDataTemp['type'] = Array.from(result)
    console.log(userDataTemp);
  }

  const attractionsType = [
    "Church",
    "Clothing store",
    "Shoppingmall",
    "Synagogue",
    "Supermarket",
    "Jewelry store",
    "Zoo",
    "Mosque",
    "Book Store",
    "Museum",
    "Theater",
    "Art gallery",
    "Park",
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  attractionsType.forEach((attractionName) => {
    const currentColor =
      colorOfButton[Math.round(Math.random() * (colorOfButton.length - 1))];
    const currentWidth = "100%";
    const currentHeight = "10vh";
    const currentborderRad = "5%";
    buttonsList.push(
      <ChoosingButton
        key={attractionName}
        onClick={() => {
          handleChoosing(attractionName);
        }}
        color={currentColor}
        height={currentHeight}
        width={currentWidth}
        borderRad={currentborderRad}
        title={attractionName}
      ></ChoosingButton>
    );
  });


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
            Distance (KM)
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={2} align="center">
              <ChoosingDistance></ChoosingDistance>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ChoosingAttractions;
