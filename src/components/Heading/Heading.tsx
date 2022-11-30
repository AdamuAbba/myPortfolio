import { Typography } from '@mui/material';
import { IHeading } from 'components/Heading/types';

const Heading: IHeading = ({ children }) => {
  return (
    <Typography className="styled-header" variant="h3">
      {children}
    </Typography>
  );
};

export default Heading;
