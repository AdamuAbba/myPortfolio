// import EmployerProjects from 'components/EmployerProjects';
import ProjectList from 'components/ProjectList';
import { Stack } from '@mui/material';
import Heading from 'components/Heading';
import { GiPaintBucket } from 'react-icons/gi';

const ProjectsScreen = () => {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: '#212529',
      }}
    >
      <Stack direction="column">
        <Heading>
          <span>
            <GiPaintBucket />
          </span>
          projects
        </Heading>
        <ProjectList />
      </Stack>
      {/* <EmployerProjects /> */}
    </Stack>
  );
};

export default ProjectsScreen;
