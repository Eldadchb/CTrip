import { Wrap } from "@chakra-ui/react";
import ChoosingButton from "../components/choosing-buttons";

function ChoosingAttractions() {
  const result = new Set();
  const handleChoosing = (atrrType) => {
    result.add(atrrType);
  };
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
    </>
  );
}

export default ChoosingAttractions;
