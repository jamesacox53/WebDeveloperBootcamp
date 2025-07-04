import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";

export default function ButtonDemo() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained" onClick={() => alert("Hi")}>
        Contained
      </Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={() => alert("Hi")}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        color="error"
        size="medium"
        onClick={() => alert("Hi")}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => alert("Hi")}
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>

      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </>
  );
}
