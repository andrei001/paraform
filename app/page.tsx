"use client";

import {
  Box,
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";

const form = [
  {
    type: "text",
    placeholder: "Jane",
    id: "firstName",
    label: "First Name",
    required: true,
  },
  {
    type: "text",
    placeholder: "Doe",
    id: "lastName",
    label: "Last Name",
    required: true,
  },
  {
    type: "text",
    placeholder: "Apple",
    id: "company",
    label: "Company",
    required: false,
  },
  {
    type: "text",
    placeholder: "Software Engineer",
    id: "title",
    label: "Title",
    required: false,
  },
  {
    type: "phoneNumbers",
    id: "phoneNumbers",
    title: "Phone Numbers",
    options: ["home", "work", "mobile", "skype", "other"],
    required: false,
  },
  {
    type: "addresses",
    id: "addresses",
    title: "Addresses",
    required: false,
    options: ["home", "work", "other"],
  },
  {
    type: "email_addresses",
    id: "email_addresses",
    title: "Email Addresses",
    options: ["personal", "work", "other"],
    required: false,
  },
  {
    type: "website_addresses",
    id: "website_addresses",
    title: "Website Addresses",
    options: ["personal", "company", "portfolio", "blog", "other"],
    required: false,
  },
  {
    type: "social_media_addresses",
    id: "social_media_addresses",
    title: "Social Media Addresses",
    required: false,
  },
  { type: "educations", id: "educations", required: false },
  { type: "employments", id: "employments", required: false },
];

const DynamicForm = ({
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

const SimpleText = ({
  id,
  label,
  required,
}: {
  id: string;
  label: string;
  required: boolean;
}) => {
  const [textInput, setTextInput] = useState<string>("");
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

export default function Home() {
  const [schoolsList, setSchoolsList] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://harvest.greenhouse.io/v1/schools', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Authorization': 'Basic ZjA2YjJiMTUzZTAxNmY4ZTdjMzYzMjYyN2FmNTZiMWQtNzo=',
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      console.log(result)
      setSchoolsList(result);
    };

    fetchData();
  }, []);
  return (
    <Box
      display="flex"
      alignContent="center"
      flexDirection="column"
      margin="auto"
      width="80vh"
    >
      {form.map((e, index) =>
        e.type === "text" ? (
          <SimpleText id={e.id} label={e.label ?? ""} required={e.required} key={`key-${index}`} />
        ) : (
          <DynamicForm
            title={e.title ?? ""}
            id={e.id}
            options={e.options ?? []}
            required={e.required}
            key={`key-${index}`}
          />
        ),
      )}
    </Box>
  );
}
