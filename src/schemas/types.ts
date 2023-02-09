import * as yup from 'yup';
import { CONTACT_FORM_SCHEMA } from './contact-form-schema';

type IContactForm = yup.InferType<typeof CONTACT_FORM_SCHEMA>;

export type { IContactForm };
