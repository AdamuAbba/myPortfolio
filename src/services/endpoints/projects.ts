import api from 'services/api';
import sanityClient from '../../client';

const projects = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<any, void>({
      queryFn: async () => {
        try {
          const response = await sanityClient.fetch(
            `*[_type == "projects"]{title,description,gitUrl,liveUrl,youTube,mainImage{asset->{_id,url}},techs}`
          );
          return { data: response };
        } catch (error) {
          return {
            error: {
              status: 500,
              statusText: 'Internal Server Error',
              data: 'error',
            },
          };
        }
      },
    }),
  }),
});

export const { useGetProjectsQuery } = projects;
