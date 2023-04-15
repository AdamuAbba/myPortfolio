import { Stack } from "@mui/material";
import Heading from "components/Heading";
import ProjectList from "components/ProjectList";
import { GiAxeInLog } from "react-icons/gi";

const ProjectsScreen = () => {
  return (
    <Stack bgcolor="#212529" spacing={5} direction="column">
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        direction="row"
      >
        <GiAxeInLog style={{ marginTop: 10 }} color="#d087a5" size={45} />
        <Heading>projects</Heading>
      </Stack>
      <ProjectList />
    </Stack>
  );
};

export default ProjectsScreen;
