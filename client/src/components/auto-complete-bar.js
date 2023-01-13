import { Input, Box } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { useRef, useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

function AutoComplete({ position }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  console.log(status, data);

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="teal">
            <SearchIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <Box>
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={"Search"}
              />
            </Box>
            <ul>
              {data.map(({ place_id, description }) => (
                <li>{description}</li>
              ))}
            </ul>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
export default AutoComplete;
