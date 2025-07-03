import { useState } from "react";
import Rating from "@mui/material/Rating";

export default function RatingDemo() {
  const [ratingInt, setRatingInt] = useState(2);

  return (
    <div>
      <h1>Rating Demo. Current Rating: {ratingInt}</h1>
      <Rating
        name="simple-controlled"
        value={ratingInt}
        onChange={(event, newValue) => {
          setRatingInt(newValue);
        }}
      />
    </div>
  );
}
