const employerDocumentType = {
  name: "employer_projects",
  title: "Employer Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "official_site",
      title: "Official site",
      type: "url",
    },
    {
      name: "liveUrl",
      title: "Live Link",
      type: "url",
    },
    {
      name: "techs",
      title: "techs used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};

export default employerDocumentType;
