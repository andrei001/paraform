import {
  Box,
} from "@mui/material";
import { DynamicForm } from "./components/DynamicForm";
import { SimpleText } from "./components/SimpleText";

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

export default function Home() {
  //const [schoolsList] = useState<string | undefined>(undefined);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://harvest.greenhouse.io/v1/schools', {
  //       method: 'GET',
  //       mode: 'cors',
  //       headers: {
  //         'Authorization': 'Basic ZjA2YjJiMTUzZTAxNmY4ZTdjMzYzMjYyN2FmNTZiMWQtNzo=',
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const result = await response.json();
  //     console.log(result)
  //     setSchoolsList(result);
  //   };

  //   fetchData();
  // }, []);
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
