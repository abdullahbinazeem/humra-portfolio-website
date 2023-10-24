const technologies = {
  name: "technologies",
  title: "Technologies",
  type: "document",
  fields: [
    {
      name: "highlighted",
      title: "Highlighted (only first 3 highlighted will be shown)",
      type: "boolean",
      default: false,
    },
    {
      name: "name",
      title: "Tech Name (i.e: Javascript, CSS, etc.)",
      type: "string",
    },
    {
      name: "icon",
      title: "Tech Icon Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "years",
      title: "How many years of experience",
      type: "number",
    },

    {
      name: "description",
      title: "Highlight Description",
      type: "text",
    },
  ],
};

export default technologies;
