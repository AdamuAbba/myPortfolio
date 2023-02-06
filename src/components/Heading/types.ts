import { Typography } from '@mui/material';
import { ComponentProps } from 'react';
interface Props extends ComponentProps<typeof Typography> {}

type IHeading = React.FC<Props>;

export type { IHeading };
