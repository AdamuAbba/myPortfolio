export default {
  name: "timeline",
  title: "Time Line",
  type: "document",
  fields: [
    {
      name: "time",
      title: "Time Line",
      type: "string",
      description: "time/date",
    },
    {
      name: "cardTitle",
      title: "Card Title",
      type: "string",
    },
    {
      name: "cardSubTitle",
      title: "Card Subtitle",
      type: "string",
    },
    {
      name: "cardDetailedText",
      title: "Card Text",
      type: "string",
    },
    {
      name: "cardImageUrl",
      title: "Card Image Link",
      type: "url",
    },
  ],
};
