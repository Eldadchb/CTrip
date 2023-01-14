import {
  Input,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

function AutoCompleteSearchBar({ setStartingPoint }) {
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
    setStartingPoint({ lat, lng });
  };

  return (
    <>
      <Popover closeOnBlur={true}>
        <PopoverTrigger>
          <Button colorScheme="teal">
            <SearchIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent width={"500"}>
          <PopoverBody>
            <Input
              width={500}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Search"}
            />
            <Stack>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
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
export default AutoCompleteSearchBar;
