import ProjectList from 'components/ProjectList';
import { Stack } from '@mui/material';
import Heading from 'components/Heading';
import { GiAxeInLog } from 'react-icons/gi';

const ProjectsScreen = () => {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: '#212529',
      }}
    >
      <Stack spacing={5} direction="column">
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
    </Stack>
  );
};

export default ProjectsScreen;
