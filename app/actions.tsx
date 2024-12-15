"use server"

export const onSubmit = async (applicationData: object) => {
    "use server"
    fetch("https://harvest.greenhouse.io/v1/candidates", {
      method: "POST",
      body: JSON.stringify({
        ...applicationData,
        applications: [{ job_id: "4285367007" }],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Basic ZjA2YjJiMTUzZTAxNmY4ZTdjMzYzMjYyN2FmNTZiMWQtNzo=",
        "On-Behalf-Of": "4280249007",
      },
    });
  };