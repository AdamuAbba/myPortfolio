import NavBar from 'components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from 'screens/HomeScreen';
import ProjectsScreen from 'screens/ProjectsScreen';
// @ts-ignore
import MyFooter from 'components/MyFooter';
import './Main.css';
import Stack from '@mui/material/Stack';

const Main = () => {
  return (
    <Stack className="body">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
      </Routes>
      <MyFooter />
    </Stack>
  );
};

export default Main;
