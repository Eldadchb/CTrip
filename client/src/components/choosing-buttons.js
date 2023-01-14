import { Button } from "@chakra-ui/react";

function ChoosingButton({ title, width, height, borderRad, color, onClick }) {
  return (
    <Button
      colorScheme={color}
      height={height}
      width={width}
      borderRadius={borderRad}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
export default ChoosingButton;
