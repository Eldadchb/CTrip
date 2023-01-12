import { Button } from "@chakra-ui/react";

function ChoosingButton({ title }) {
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
export default ChoosingButton;