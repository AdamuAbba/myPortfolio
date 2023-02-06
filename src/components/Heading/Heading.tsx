import { Typography } from '@mui/material';
import { IHeading } from './types';

const Heading: IHeading = ({ children, ...rest }) => {
  return (
    <Typography
      {...rest}
      sx={{
        fontSize: {
          xs: '37px',
          sm: '43px',
          md: '3.5rem',
        },
      }}
      className="styled-header"
      variant="h3"
    >
      {children}
    </Typography>
  );
};

export default Heading;
