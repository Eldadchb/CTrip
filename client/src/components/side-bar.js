import { useColorMode, Button, Box, Stack } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import SideBarButton from "./buttons";

function SideBar() {
  return (
    <Box className="controlers">
      <Stack direction="column" spacing={10} align="center">
        <SideBarButton title={"Create New Trip"} />
        <SideBarButton title={"Saved Trips"} />
      </Stack>
    </Box>
  );
}
export default SideBar;
