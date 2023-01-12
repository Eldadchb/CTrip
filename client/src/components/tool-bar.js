import { useColorMode, Button, Box } from "@chakra-ui/react";

function ToolBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="tool-bar">
      <Button onClick={toggleColorMode} colorScheme="green" size="lg">
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}
export default ToolBar;
