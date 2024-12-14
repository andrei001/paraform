"use-client"

import { Box, Button, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const DynamicForm = ({
    title,
    id,
    options,
    required,
  }: {
    title: string;
    id: string;
    options: string[];
    required: boolean;
  }) => {
    const [textInput, setTextInput] = useState<string[]>([""]);
    console.log(textInput)
    const [selectedOption, setSelectedOption] = useState<string[] | undefined>(
      options.length !== 0 ? [options[0]] : undefined,
    );
    return (
      <Box display="flex" flexDirection="column" marginTop="16px">
        <InputLabel>{title}</InputLabel>
        <Box>
          {textInput.map((e, index) => (
            <div style={{display:"flex", flexDirection:"row", marginBottom: "8px"}} key={`div-${index}`}>
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
              {options.length !== 0 && selectedOption !== undefined && (
                <Select
                  value={selectedOption[index]}
                  onChange={(e) =>
                    setSelectedOption([
                      ...selectedOption.slice(0, index),
                      e.target.value,
                      ...selectedOption.slice(index + 1),
                    ])
                  }
                  label={title}
                  variant="standard"
                >
                  {options.map((opt: string, index: number) => (
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
              if (selectedOption !== undefined)
                setSelectedOption([...selectedOption, options[0]]);
            }}
          >
            Add Another
          </Button>
      </Box>
    );
  };