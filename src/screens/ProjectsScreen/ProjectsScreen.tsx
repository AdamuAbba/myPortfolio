import { Container, Row } from 'react-bootstrap';
import { GiPaintBucket } from 'react-icons/gi';
import EmployerProjects from 'components/EmployerProjects';
import MyFooter from 'components/MyFooter';
import ProjectList from 'components/ProjectList';
import './ProjectsScreen.css';

const ProjectsScreen = () => {
  return (
    <Container fluid className="main-container">
      <Row>
        <Container className="d-flex align-items-center justify-content-center annie-font mb-4 pb-2">
          <h1 className="styled-header project-header ">
            <span>
              <GiPaintBucket />
            </span>
            project List
          </h1>
        </Container>
        <ProjectList />
        <EmployerProjects />
      </Row>
    </Container>
  );
};

export default ProjectsScreen;
