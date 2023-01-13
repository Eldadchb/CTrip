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
    const navigate = useNavigate();
    const navigateToChoosingResturantsPage = () => navigate("/resturants");
  
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
      "Park"
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
      let currentWidth = "20%";
      let currentHeight = "15vh";
      let currentborderRad = Math.round(Math.random() * 100);
      buttonsList.push(
        <ChoosingButton
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
        <Box
          width="100%"
          paddingTop="2"
          paddingLeft="70px"
          display="flex"
          justifyContent="center"
        >
          <Stack direction="row" justifyContent="center">
            <Wrap spacing={10}>{buttonsList}</Wrap>
          </Stack>
        </Box>
        <Box
          paddingTop="10"
          paddingLeft="10"
          paddingRight="10"
          display="flex"
          width="100%"
        >
          <NavigateButton
            onClick={navigateToChoosingResturantsPage}
            title={<ArrowLeftIcon />}
          />
          <NavigateButton
            onClick={navigateToChoosingResturantsPage} //TODO - change to next page
            title={<ArrowRightIcon />}
            marginLeft={"85%"}
          />
        </Box>
      </>
    );
  }
  
  export default ChoosingAttractions;
  