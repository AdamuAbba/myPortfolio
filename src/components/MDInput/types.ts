import { FormControl, TextField } from '@mui/material';
import { ComponentProps } from 'react';

type TextFieldExtracts = Partial<
  Pick<ComponentProps<typeof TextField>, 'multiline' | 'rows'>
>;

interface Props extends ComponentProps<typeof FormControl>, TextFieldExtracts {
  label: string;
  name: string;
}

type IMDInput = React.FC<Props>;
export type { IMDInput };
