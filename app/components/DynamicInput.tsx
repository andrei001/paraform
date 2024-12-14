"use client";

import {
  Box,
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

export const DynamicInput = ({
  title,
  id,
  subtypeOptions,
  options,
  required,
}: {
  title: string;
  id: string;
  subtypeOptions: string[];
  options: { id: number; name: string }[];
  required: boolean;
}) => {
  const [textInput, setTextInput] = useState<string[]>([""]);
  console.log(textInput);
  const [selectedSubtypeOption, setSelectedSubtypeOption] = useState<
    string[] | undefined
  >(subtypeOptions.length !== 0 ? [subtypeOptions[0]] : undefined);
  return (
    <Box display="flex" flexDirection="column" marginTop="16px">
      <InputLabel>{title}</InputLabel>
      <Box>
        {textInput.map((e, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "8px",
            }}
            key={`div-${index}`}
          >
            {options.length === 0 ? (
              <Input
                type="text"
                fullWidth
                id={id}
                onChange={(e) =>
                  setTextInput([
                    ...textInput.slice(0, index),
                    e.target.value,
                    ...textInput.slice(index + 1),
                  ])
                }
                required={required}
              />
            ) : (
              <Select
                value={textInput[index]}
                onChange={(e) =>
                  setTextInput([
                    ...textInput.slice(0, index),
                    e.target.value,
                    ...textInput.slice(index + 1),
                  ])
                }
                label={title}
                variant="standard"
              >
                {options.map(
                  (opt: { id: number; name: string }, index: number) => (
                    <MenuItem key={index} value={opt.name}>
                      {opt.name}
                    </MenuItem>
                  ),
                )}
              </Select>
            )}

            {subtypeOptions.length !== 0 &&
              selectedSubtypeOption !== undefined && (
                <Select
                  value={selectedSubtypeOption[index]}
                  onChange={(e) =>
                    setSelectedSubtypeOption([
                      ...selectedSubtypeOption.slice(0, index),
                      e.target.value,
                      ...selectedSubtypeOption.slice(index + 1),
                    ])
                  }
                  label={title}
                  variant="standard"
                >
                  {subtypeOptions.map((opt: string, index: number) => (
                    <MenuItem key={index} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              )}
          </div>
        ))}
      </Box>
      <Button
        onClick={() => {
          setTextInput([...textInput, ""]);
          if (selectedSubtypeOption !== undefined)
            setSelectedSubtypeOption([
              ...selectedSubtypeOption,
              subtypeOptions[0],
            ]);
        }}
      >
        Add Another
      </Button>
    </Box>
  );
};
