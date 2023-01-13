import { Button } from "@chakra-ui/react";

function ChoosingButton({ title, width, height, borderRad, color }) {
  return (
    <Button
      colorScheme={color}
      height={height}
      width={width}
      borderRadius={borderRad}
    >
      {title}
    </Button>
  );
}
export default ChoosingButton;
