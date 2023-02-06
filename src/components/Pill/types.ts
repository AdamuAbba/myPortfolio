import { ComponentProps } from 'react';
import Box from '@mui/material/Box';

interface Props extends ComponentProps<typeof Box> {}

type IPill = React.FC<Props>;
export type { IPill };
