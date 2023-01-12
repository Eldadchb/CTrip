import { Box, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SideBarButton from "./buttons";

function SideBar() {
  const navigate = useNavigate();
  const navigateToResturantsPage = () => navigate("/resturants");
  const navigateToSavedTripsPage = () => navigate("/saved_trips");

  return (
    <Box className="controlers">
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
    </Box>
  );
}
export default SideBar;
