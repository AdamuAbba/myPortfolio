const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gitUrl',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'liveUrl',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'youTube',
      title: 'Youtube',
      type: 'url',
    },
    {
      name: 'techs',
      title: 'techs used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};

export default projects;
