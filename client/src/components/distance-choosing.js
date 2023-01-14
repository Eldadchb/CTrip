import {
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

function ChoosingDistance() {
  const [userInputs, setInputs] = useState([]);

  const handleChange = (value) => {
    setInputs(value)
  }

  const handleSubmit = () => {
    console.log((Number(userInputs)))
  };

  const btnRef = useRef();

  return (
    <>
      <NumberInput min={1} max={20} onChange={handleChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        ref={btnRef}
        colorScheme="teal"
        marginTop="4"
        width="60%"
        onClick={handleSubmit}
      >
        Done
      </Button>
    </>
  );
}

export default ChoosingDistance;
