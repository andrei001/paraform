"use client"

import { Box, Input, InputLabel } from "@mui/material";
import { useState } from "react";


export const SimpleText = ({
    id,
    label,
    required,
  }: {
    id: string;
    label: string;
    required: boolean;
  }) => {
    const [textInput, setTextInput] = useState<string>("");
    console.log(textInput)
    return (
      <Box display="flex" flexDirection="column">
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          required={required}
          type="text"
          id={id}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </Box>
    );
  };