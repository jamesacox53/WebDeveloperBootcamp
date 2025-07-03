import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useState } from "react";

export default function FormDemo() {
  const [nameStr, setNameStr] = useState("");
  const [volumeInt, setVolumeInt] = useState(50);

  const updateName = (event) => _updateName(event, setNameStr);
  const changeVolume = (event, newVal) => _changeVolume(newVal, setVolumeInt);

  return (
    <div>
      <h1>Name is {nameStr}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Fido"
        label="Puppy Name"
        variant="outlined"
        value={nameStr}
        onChange={updateName}
      />
      <h2>Volume is: {volumeInt}</h2>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
          <VolumeDown />
          <Slider
            aria-label="Volume"
            value={volumeInt}
            onChange={changeVolume}
          />
          <VolumeUp />
        </Stack>
      </Box>
    </div>
  );
}

function _updateName(event, setNameStr) {
  setNameStr(event.target.value);
}

function _changeVolume(newVal, setVolumeInt) {
  setVolumeInt(newVal);
}
