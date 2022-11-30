import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { quick_bounce } from 'configs/transitionConfigs';
import { motion } from 'framer-motion';
import image from 'images/Portfolio-banner.png';
import { SocialIcon } from 'react-social-icons';
import { socialButtonData } from 'utils/social-media';
import './BannerContent.css';

const BannerContent = () => {
  return (
    <Stack direction="row" className="main-view">
      <img src={image} alt="abba" className="banner-image" />
      <Stack spacing={3}>
        <Typography variant="h2" className="glitch">
          <span aria-hidden="true">shy &#60;X/&#62; perience</span>
          shy &#60;X/&#62; perience
          <span aria-hidden="true">shy &#60;X/&#62; perience</span>
        </Typography>
        <Stack spacing={3} direction="row">
          {socialButtonData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -7, scale: 1.2 }}
              transition={quick_bounce}
            >
              <SocialIcon
                className="drop-effect"
                network={item.network}
                fgColor="#ffff"
                url={item.link}
              />
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BannerContent;
