import sanityClient from "@sanity/client";

export default sanityClient({
  useCdn: true,
  projectId: "gknjrcsh",
  dataset: "production",
});
