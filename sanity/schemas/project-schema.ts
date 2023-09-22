const project = {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "university",
      title: "University Name",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      hidden: ({ document }: any) => document?.enrolled,
    },
    {
      name: "enrolled",
      title: "Enrolled",
      type: "boolean",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
