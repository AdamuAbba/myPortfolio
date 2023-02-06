import AttributesRow from 'components/AttributesRow';
import BannerContent from 'components/BannerContent';
import TechStacks from 'components/TechStacks';
import Stack from '@mui/material/Stack';

import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <Stack direction="column">
      <BannerContent />
      <AttributesRow />
      <TechStacks />
    </Stack>
  );
};

export default HomeScreen;
