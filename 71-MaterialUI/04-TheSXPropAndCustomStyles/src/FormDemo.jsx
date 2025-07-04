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
    <Box sx={{ width: 400, border: "1px solid red", p: 2, margin: "0 auto" }}>
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

      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <VolumeDown />
        <Slider aria-label="Volume" value={volumeInt} onChange={changeVolume} />
        <VolumeUp />
      </Stack>
    </Box>
  );
}

function _updateName(event, setNameStr) {
  setNameStr(event.target.value);
}

function _changeVolume(newVal, setVolumeInt) {
  setVolumeInt(newVal);
}
