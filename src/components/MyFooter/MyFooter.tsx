import Stack from '@mui/material/Stack';
// import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
// import { FormEvent } from 'react';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { LoveExplosion } from 'assets/animations';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import { quick_bounce } from 'configs/transitionConfigs';
import moment from 'moment';
import 'react-awesome-button/dist/styles.css';
import Lottie from 'react-lottie';
import { SocialIcon } from 'react-social-icons';
import { socialButtonData } from 'utils/social-media';
import './MyFooter.css';
import { IMyFooter } from './types';
import { useGetDevJokesQuery } from 'services/endpoints/dev';

const MyFooter: IMyFooter = () => {
  const { data } = useGetDevJokesQuery();

  // const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_SERVICE_ID as string,
  //       process.env.REACT_APP_TEMPLATE_ID as string,
  //       // @ts-ignore
  //       e.target,
  //       process.env.REACT_APP_USER_ID as string
  //     )
  //     .then((result) => {
  //       console.log(result.text);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  //   // @ts-ignore
  //   e.target.reset();
  // };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    // @ts-ignore
    animationData: LoveExplosion,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Stack
      sx={{
        paddingTop: {
          md: 7,
          xs: 5,
        },
      }}
      direction="column"
    >
      <Stack mt={2} className="chuck-view">
        {/* @ts-ignore */}
        <Paragraph>"{data?.value}"</Paragraph>
        <Paragraph>chuck Norris API</Paragraph>
      </Stack>

      <Stack
        sx={{
          marginTop: {
            xs: 3,
            md: 0,
          },
        }}
        spacing={3}
        pb={4}
      >
        <Heading>contact me</Heading>
        <Stack
          sx={{
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
          }}
          className="second-view"
        >
          <Stack
            spacing={4}
            className="form"
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              width: {
                xs: '80%',
                md: '40%',
              },
            }}
          >
            <Stack spacing={4} direction="row">
              <FormControl
                sx={{
                  width: '50%',
                }}
              >
                <TextField
                  sx={{
                    backgroundColor: 'white',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                  label="name"
                  variant="filled"
                />
              </FormControl>

              <FormControl
                sx={{
                  width: '50%',
                }}
              >
                <TextField
                  sx={{
                    backgroundColor: 'white',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                  label="email"
                  variant="filled"
                />
              </FormControl>
            </Stack>
            <FormControl>
              <TextField
                sx={{
                  backgroundColor: 'white',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
                multiline={true}
                rows={4}
                variant="filled"
                label="message"
              />
            </FormControl>
            <LoadingButton
              endIcon={<SendIcon />}
              loading={false}
              loadingPosition="end"
              variant="contained"
              className="box-with-shadow"
            >
              Send
            </LoadingButton>
          </Stack>

          <Stack alignItems="center" justifyContent="center" direction="column">
            <Stack alignItems="center" direction="row">
              <Paragraph marginRight={-2}>Built with</Paragraph>
              <Lottie
                options={defaultOptions}
                style={{ margin: 0 }}
                width={80}
              />
              <Paragraph marginLeft={-2}>by shy.X</Paragraph>
            </Stack>

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
      </Stack>

      <Stack pb={5} justifyContent="center" alignItems="center">
        <Stack alignItems="center" direction="row">
          <Paragraph>Portfolio source code :</Paragraph>
          <motion.div
            whileHover={{ y: -7, scale: 1.2 }}
            transition={quick_bounce}
          >
            <SocialIcon
              className="drop-effect"
              style={{ marginLeft: 10 }}
              fgColor="#ffff"
              url="https://github.com/AdamuAbba/myPortfolio"
            />
          </motion.div>
        </Stack>
        <Paragraph>{moment().format('MMMM YYYY')}</Paragraph>
      </Stack>
    </Stack>
  );
};

export default MyFooter;
