import { Box, Typography } from '@mui/material';
import { IPill } from './types';
import './Pill.css';

const Pill: IPill = ({ children, ...rest }) => {
  return (
    <Box className="styled-box" {...rest}>
      <Typography
        sx={{
          fontSize: '0.8rem',
          color: 'white',
          textShadow: '2px 4px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        <strong>{children}</strong>
      </Typography>
    </Box>
  );
};

export default Pill;
