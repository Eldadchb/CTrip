import { useColorMode, Button, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="tool-bar">
      <Button
        onClick={toggleColorMode}
        colorScheme="green"
        size="lg"
        padding={2}
        margin={4}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Box>
  );
}
export default NavBar;
