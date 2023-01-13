import { Button } from "@chakra-ui/react";

function NavigateButton({ title, onClick, marginLeft }) {
  return (
    <Button
      size="md"
      height="8vh"
      width="8%"
      colorScheme="cyan"
      variant="solid"
      marginLeft={marginLeft}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
export default NavigateButton;
