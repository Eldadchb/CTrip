import { Input, Box, Stack } from "@chakra-ui/react";
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

function AutoComplete() {
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (addressReq) => {
    console.log(addressReq);
    setValue(addressReq, false);
    clearSuggestions();
    const results = await getGeocode({ address: addressReq });
    const { lat, lng } = await getLatLng(results[0]);
    // return {lat, lng}
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="teal">
            <SearchIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent width={"500"} colorScheme="dark">
          <PopoverBody>
            <Box>
              <Input
                width={500}
                colorscheme="dark"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={"Search"}
              />
            </Box>
            <Stack>
              {status === "OK" && data.map(({ place_id, description }) => (
                <Button
                  key={place_id}
                  onClick={() => {
                    handleSelect(description);
                  }}
                >
                  {description}
                </Button>
              ))}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
export default AutoComplete;
