import api from 'services/api';
import sanityClient from '../../client';

const personal = api.injectEndpoints({
  endpoints: (builder) => ({
    getPersonalProjects: builder.query<any, void>({
      queryFn: async () => {
        try {
          const response = await sanityClient.fetch(
            `*[_type == "projects"]{title,date,description,gitUrl,liveUrl,mainImage{asset->{_id,url}},techs}`
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

export const { useGetPersonalProjectsQuery } = personal;
