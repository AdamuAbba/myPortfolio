import * as yup from 'yup';

const EMAIL = yup
  .string()
  .email('Attention❗️: Uncolonized simpleton\nYou have entered invalid data')
  .required(
    "Attention❗️: Primitive life form\n'Shy.X 👽' would like to make contact"
  );
const NAME = yup
  .string()
  .required(
    'Attention❗️: Primitive life form\nColony members must have a valid identifier'
  );
const MESSAGE = yup
  .string()
  .required('Warning❗️: empty message capsule 🚀\npffs! Humans');

const CONTACT_FORM_SCHEMA = yup.object({
  email: EMAIL,
  name: NAME,
  message: MESSAGE,
});

export { CONTACT_FORM_SCHEMA };
