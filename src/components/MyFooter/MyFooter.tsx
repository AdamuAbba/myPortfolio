import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FormEvent, useRef } from 'react';
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Lottie from 'react-lottie';
import { SocialIcon } from 'react-social-icons';
import { useGetDevJokesQuery } from 'services/chuckNorissApi/endpoints/dev';
import * as loveExplosion from 'animations/loveExplosion.json';
import './MyFooter.css';
import Typography from '@mui/material/Typography';
import Paragraph from 'components/Paragraph';
import { IMyFooter } from 'components/MyFooter/types';
import Link from '@mui/material/Link';
import Heading from 'components/Heading';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { socialButtonData } from 'utils/social-media';
import { quick_bounce } from 'configs/transitionConfigs';
import moment from 'moment';

const MyFooter: IMyFooter = () => {
  const { data } = useGetDevJokesQuery();
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        // @ts-ignore
        e.target,
        process.env.REACT_APP_USER_ID as string
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // @ts-ignore
    e.target.reset();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    // @ts-ignore
    animationData: loveExplosion.default as any,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Stack className="footer" direction="column">
      <Stack mt={2} className="chuck-view">
        {/* @ts-ignore */}
        <Paragraph>"{data?.value}"</Paragraph>
        <Paragraph>chuck Norris API</Paragraph>
      </Stack>

      <Stack spacing={3} pb={4}>
        <Heading>Contact me</Heading>
        <Stack className="second-view" direction="row">
          <Stack
            spacing={4}
            className="form"
            component="form"
            noValidate
            autoComplete="off"
          >
            <Stack spacing={4} direction="row">
              <FormControl>
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput id="component-outlined" label="Name" />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="component-outlined">email</InputLabel>
                <OutlinedInput id="component-outlined" label="email" />
              </FormControl>
            </Stack>
            <FormControl>
              <InputLabel htmlFor="component-outlined">message</InputLabel>
              <OutlinedInput
                multiline={true}
                rows={4}
                id="component-outlined"
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

          <Stack spacing={2}>
            <Stack className="lottie-view" direction="row">
              <Paragraph>Built with</Paragraph>
              <Lottie
                options={defaultOptions}
                style={{ margin: 0 }}
                width={80}
              />
              <Paragraph>by Abba</Paragraph>
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
            <Paragraph>
              <Link
                target="_blank"
                href="mailto:abbaadamu302@gmail.com"
                underline="always"
                rel="noopener"
              >
                abbaadamu302@gmail.com
              </Link>
            </Paragraph>
          </Stack>
        </Stack>
      </Stack>

      <Stack className="date-view">
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
