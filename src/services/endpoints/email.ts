import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { IContactForm } from 'schemas';
import api from 'services/api';

const email = api.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation<EmailJSResponseStatus, IContactForm>({
      queryFn: async (values) => {
        try {
          const response = await emailjs.send(
            process.env.REACT_APP_SERVICE_ID as string,
            process.env.REACT_APP_TEMPLATE_ID as string,
            values,
            process.env.REACT_APP_USER_ID as string
          );
          return { data: response };
        } catch (error: any) {
          return {
            error: {
              status: error.status,
              statusText: error.text,
              data: 'error sending email',
            },
          };
        }
      },
    }),
  }),
});

export const { useSendEmailMutation } = email;
