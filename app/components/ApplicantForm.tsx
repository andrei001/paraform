"use client"

import { Box } from "@mui/material";
import { DynamicInput } from "./DynamicInput";
import { SimpleText } from "./SimpleTextInput";
import { FormItem, FormTypes } from "../types";

interface IApplicantForm {
  form: FormItem[];
}

export const ApplicantForm = ({ form }: IApplicantForm) => {
  const getMatchingFormInput = (e: FormItem) => {
    switch (e.type) {
      case FormTypes.Text:
        return <SimpleText id={e.id} label={e.label} required={e.required} />;
      case FormTypes.Dynamic:
        return (
          <DynamicInput
            title={e.title}
            id={e.id}
            options={e.subtypeOptions ?? []}
            required={e.required}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      display="flex"
      alignContent="center"
      flexDirection="column"
      margin="auto"
      width="80vh"
    >
      {form.map((e, index) => (
        <div key={`div-${index}`}>{getMatchingFormInput(e)}</div>
      ))}
    </Box>
  );
};
