const contact = {
  name: "contact",
  title: "Contact Information ( Create One Only )",
  type: "document",
  fields: [
    {
      name: "first_name",
      title: "First Name *Displayed*",
      type: "string",
    },
    {
      name: "last_name",
      title: "Last Name  *Displayed*",
      type: "string",
    },
    {
      name: "intro_sentence",
      title: "Intro Sentence",
      type: "string",
    },
    {
      name: "intro_description",
      title: "Intro Description",
      type: "text",
    },
    {
      name: "about_description",
      title: "About Me Description",
      type: "text",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "phone_number",
      title: "Phone Number *NOT REQUIRED*",
      type: "string",
    },
  ],
};

export default contact;
