import { Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import image from 'assets/images/Portfolio-banner.png';
import { quick_bounce } from 'configs/transitionConfigs';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { socialButtonData } from 'utils/social-media';
import './BannerContent.css';
import { IBannerContent } from './types';

const BannerContent: IBannerContent = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid md={6} item>
        <img src={image} alt="abba" style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid md={6} item>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '2.2rem',
                sm: '3.8rem',
                md: '4rem',
              },
              marginTop: {
                sm: -2.5,
                md: 0,
                xs: 0,
              },
            }}
            variant="h2"
            className="glitch"
          >
            <span aria-hidden="true">shy &#60;X/&#62; perience</span>
            shy &#60;X/&#62; perience
            <span aria-hidden="true">shy &#60;X/&#62; perience</span>
          </Typography>
          <Stack spacing={3} justifyContent="center" direction="row">
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
                  target="_blank"
                />
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BannerContent;
