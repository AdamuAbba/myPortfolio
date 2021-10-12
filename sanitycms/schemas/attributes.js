export default {
  name: "attributes",
  title: "Attributes",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "description",
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
      name: "cardAngle",
      title: "Card Angle",
      type: "string",
      options: {
        list: [
          { value: "-20deg", title: "Lean Left" },
          { value: "20deg", title: "Lean Right" },
        ],
      },
    },
  ],
};
