import Stack from '@mui/material/Stack';
import AttributesRow from 'components/AttributesRow';
import BannerContent from 'components/BannerContent';
import TechStacks from 'components/TechStacks';
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
