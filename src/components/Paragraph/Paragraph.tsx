import { Typography } from '@mui/material';
import { IParagraph } from 'components/Paragraph/types';
import './Paragraph';
const Paragraph: IParagraph = ({ children, className }) => {
  return (
    <Typography className={className && className} variant="h6" color="white">
      {children}
    </Typography>
  );
};

export default Paragraph;
