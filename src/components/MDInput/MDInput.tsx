import { FormControl, TextField } from '@mui/material';
import Paragraph from 'components/Paragraph';
import { useField } from 'formik';
import './MDInput.css';
import { IMDInput } from './types';

const MDInput: IMDInput = ({ name, label, multiline, rows, ...rest }) => {
  const [field, meta] = useField({ name });

  return (
    <FormControl style={{}} {...rest}>
      <TextField
        {...field}
        sx={{
          backgroundColor: 'white',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          border: meta.touched && meta.error ? '1px solid' : 'none',
          borderColor: meta.touched && meta.error ? 'red' : 'transparent',
        }}
        multiline={multiline}
        rows={rows}
        label={label}
        variant="filled"
      />
      {meta.touched && meta.error ? (
        <Paragraph
          sx={{
            color: 'red',
            fontSize: {
              md: '1rem',
              xs: '0.8rem',
            },
          }}
        >
          {meta.error}
        </Paragraph>
      ) : null}
    </FormControl>
  );
};

export default MDInput;
