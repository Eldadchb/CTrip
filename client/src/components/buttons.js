import { useColorMode, Button, Box } from "@chakra-ui/react";

function SideBarButton({ title }) {
  return (
    <Button
      size="md"
      height="15vh"
      width="100%"
      colorScheme="cyan"
      variant="solid"
    >
      {title}
    </Button>
  );
}
export default SideBarButton;
