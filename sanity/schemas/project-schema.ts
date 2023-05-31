const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "functie",
      title: "Functie",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "uitleg",
      title: "Uitleg",
      type: "string",
    },
    {
      name: "talen",
      title: "Talen",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default project;
