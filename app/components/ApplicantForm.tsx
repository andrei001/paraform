"use client";

import { FormControl } from "@mui/material";
import { DynamicInput } from "./DynamicInput";
import { SimpleText } from "./SimpleTextInput";
import { FormItem, FormTypes, School } from "../types";
import { useState } from "react";

interface IApplicantForm {
  form: FormItem[];
  schools: School[];
}

export const ApplicantForm = ({ form, schools }: IApplicantForm) => {
  const [applicantData, setApplicantData] = useState<object>({});
  console.log(applicantData);
  const getMatchingFormInput = (e: FormItem) => {
    switch (e.type) {
      case FormTypes.Text:
        return (
          <SimpleText
            id={e.id}
            label={e.label}
            required={e.required}
            setApplicantData={setApplicantData}
          />
        );
      case FormTypes.Dynamic:
        return (
          <DynamicInput
            title={e.title}
            id={e.id}
            subtypeOptions={e.subtypeOptions ?? []}
            options={e.id === "educations" ? schools : []}
            required={e.required}
            setApplicantData={setApplicantData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormControl
      style={{
        width: "80vh",
        margin: 'auto',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
      }}
    >
      {form.map((e, index) => (
        <div key={`div-${index}`}>{getMatchingFormInput(e)}</div>
      ))}
    </FormControl>
  );
};
