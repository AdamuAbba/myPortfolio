import { Typography } from '@mui/material';
import { IParagraph } from './types';
import './Paragraph';

const Paragraph: IParagraph = ({ children, ...rest }) => {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: '18px',
          sm: '19px',
          md: '20px',
        },
      }}
      {...rest}
      variant="h6"
      color="white"
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
