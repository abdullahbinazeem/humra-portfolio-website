const work = {
  name: "work",
  title: "Work Timeline",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Work Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image Attachment",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Work Description",
      type: "text",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      hidden: ({ document }: any) => document?.current,
    },
    {
      name: "current",
      title: "Current Position",
      type: "boolean",
    },
    {
      name: "url",
      title: "Link",
      type: "url",
    },
  ],
};

export default work;
