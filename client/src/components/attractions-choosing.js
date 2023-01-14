import {
  Box,
  Button,
  ButtonGroup,
  Wrap,
  Stack,
  WrapItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ChoosingButton from "../components/choosing-buttons";
import NavigateButton from "../components/navigate-button";

function ChoosingAttractions() {
  const attractionsType = [
    "Church",
    "Clothing store",
    "Shopping mall",
    "Synagogue",
    "Super market",
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

  attractionsType.forEach((attractionName) => {
    let currentColor =
      colorOfButton[Math.round(Math.random() * (colorOfButton.length - 1))];
    let currentWidth = "100%";
    let currentHeight = "10vh";
    let currentborderRad = "5%";
    buttonsList.push(
      <ChoosingButton
        key={attractionName}
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
    </>
  );
}

export default ChoosingAttractions;
