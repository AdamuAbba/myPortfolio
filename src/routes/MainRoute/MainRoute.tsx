import { Route, Routes } from 'react-router-dom';
import './MainRoute.css';
import { Stack } from '@mui/material';
import { IMainRoute } from './types';
import NavBar from 'components/NavBar';
import HomeScreen from 'pages/HomeScreen';
import ProjectsScreen from 'pages/ProjectsScreen';
import MyFooter from 'components/MyFooter';

const MainRoute: IMainRoute = () => {
  return (
    <Stack
      bgcolor="#212529"
      sx={{
        display: 'flex',
        flex: 1,
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
      </Routes>
      <MyFooter />
    </Stack>
  );
};

export default MainRoute;
