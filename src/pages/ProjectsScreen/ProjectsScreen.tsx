import ProjectList from 'components/ProjectList';
import { Stack } from '@mui/material';
import Heading from 'components/Heading';
import { GiAxeInLog } from 'react-icons/gi';

const ProjectsScreen = () => {
  return (
    <Stack bgcolor="#212529" spacing={5} direction="column">
      <Heading>
        <span>
          <GiAxeInLog />{' '}
        </span>
        projects
        <br />&<br />
        collaborations
      </Heading>
      <ProjectList />
    </Stack>
  );
};

export default ProjectsScreen;
