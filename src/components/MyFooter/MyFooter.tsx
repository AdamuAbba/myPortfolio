import Stack from '@mui/material/Stack';
// import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
// import { FormEvent } from 'react';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { Container } from '@mui/material';
import { LoveExplosion } from 'assets/animations';
import Heading from 'components/Heading';
import MDInput from 'components/MDInput';
import Paragraph from 'components/Paragraph';
import { quick_bounce } from 'configs/transitionConfigs';
import { Formik } from 'formik';
import moment from 'moment';
import 'react-awesome-button/dist/styles.css';
import {
  RiErrorWarningFill,
  RiMailSendLine,
  RiSendPlaneFill,
} from 'react-icons/ri';
import Lottie from 'react-lottie';
import { SocialIcon } from 'react-social-icons';
import { toast } from 'react-toastify';
import { CONTACT_FORM_SCHEMA, IContactForm } from 'schemas';
import { useGetDevJokesQuery } from 'services/endpoints/dev';
import { useSendEmailMutation } from 'services/endpoints/email';
import { socialButtonData } from 'utils/social-media';
import './MyFooter.css';
import { IMyFooter } from './types';

const MyFooter: IMyFooter = () => {
  const devJokesQuery = useGetDevJokesQuery();
  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const chuckImage = require('assets/images/chucknorris_logo_coloured_small@2x.png');

  const initialValues: IContactForm = {
    email: '',
    name: '',
    message: '',
  };

  const handleOnSubmit = async (values: IContactForm) => {
    toast.promise(sendEmail(values), {
      error: {
        icon: () => <RiErrorWarningFill color="red" />,
        render: () => <Paragraph>Error</Paragraph>,
      },
      pending: {
        icon: () => <RiMailSendLine size={20} color="#d087a5" />,
        render: () => <Paragraph>Transmitting capsule</Paragraph>,
      },
      success: {
        icon: () => <RiSendPlaneFill size={20} color="#6cde6d" />,
        render: () => <Paragraph>Capsule delivered</Paragraph>,
      },
    });
  };

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
      spacing={3}
      sx={{
        paddingTop: {
          md: 7,
          xs: 5,
        },
      }}
      direction="column"
    >
      <a
        style={{ textDecoration: 'none', alignSelf: 'center', width: '75%' }}
        href="https://api.chucknorris.io/"
        target="_blank"
        rel="noreferrer"
      >
        <Stack
          mt={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container
            sx={{
              width: {
                md: '10rem',
                xs: '8rem',
              },
            }}
          >
            <img
              src={chuckImage}
              alt="chuck norris"
              style={{ width: '100%', height: 'auto' }}
            />
          </Container>
          <Paragraph textAlign="center">
            "{devJokesQuery.data?.value}"
          </Paragraph>
          <Paragraph>chuck Norris API</Paragraph>
        </Stack>
      </a>

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
          <Formik
            validateOnBlur={true}
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={CONTACT_FORM_SCHEMA}
          >
            {({ handleSubmit }) => (
              <Stack
                alignSelf="center"
                spacing={4}
                sx={{
                  width: {
                    xs: '80%',
                    md: '40%',
                  },
                }}
              >
                <Stack spacing={4} direction="row">
                  <MDInput
                    sx={{
                      width: '50%',
                    }}
                    label="name"
                    name="name"
                  />

                  <MDInput
                    sx={{
                      width: '50%',
                    }}
                    label="email"
                    name="email"
                  />
                </Stack>

                <MDInput
                  multiline={true}
                  rows={4}
                  name="message"
                  label="message"
                />
                {/*@ts-ignore*/}
                <LoadingButton
                  endIcon={<SendIcon />}
                  loading={isLoading}
                  loadingPosition="end"
                  variant="contained"
                  className="box-with-shadow"
                  onClick={handleSubmit}
                >
                  Send
                </LoadingButton>
              </Stack>
            )}
          </Formik>

          <Stack alignItems="center" justifyContent="center" direction="column">
            <Stack alignItems="center" direction="row">
              <Paragraph marginRight={-2}>Built with</Paragraph>
              <Lottie options={defaultOptions} width={80} />
              <Paragraph marginRight={1} marginLeft={-2}>
                by
              </Paragraph>
              <Paragraph
                sx={{
                  color: '#d087a5',
                }}
              >
                shy.X
              </Paragraph>
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
                    target="_blank"
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
              target="_blank"
            />
          </motion.div>
        </Stack>
        <Paragraph>{moment().format('MMMM YYYY')}</Paragraph>
      </Stack>
    </Stack>
  );
};

export default MyFooter;
