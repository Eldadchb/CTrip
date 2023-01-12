import { Button } from "@chakra-ui/react";

function NavigateButton({ title, onClick }) {
  return (
    <Button
      size="md"
      height="8vh"
      width="8%"
      colorScheme="cyan"
      variant="solid"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
export default NavigateButton;
