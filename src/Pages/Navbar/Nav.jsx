import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubImage from '../../assets/NavGitImage.svg';
import BlogImage from '../../assets/BlogImage.png';
import '../Navbar/Nav.css';

function ColorSchemesExample({ setShowSkills, setShowProject, setShowBoard }) {
  function skillsMenuTrue() {
    setShowSkills(true);
  }

  function HomeMenuTrue() {
    setShowSkills(false);
    setShowProject(false);
    setShowBoard(false);
  }

  function ProjectsMenuTrue() {
    setShowProject(true);
    setShowSkills(false);
  }

  function BoardMenuTrue() {
    setShowBoard(true);
    setShowProject(false);
    setShowSkills(false);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: 'bolder' }}>
          Rin's
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={HomeMenuTrue}>
              Home
            </Nav.Link>
            <Nav.Link href="#Skills" onClick={skillsMenuTrue}>
              Skill's
            </Nav.Link>
            <Nav.Link href="#Projects" onClick={ProjectsMenuTrue}>
              Project
            </Nav.Link>
            <Nav.Link href="#board" onClick={BoardMenuTrue}>
              Board
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/HyeRinGrace" style={{ fontWeight: 'bolder' }}>
              <img src={GitHubImage} alt="GitHub" />
            </Nav.Link>
            <Nav.Link href="https://velog.io/@kdjsanh/posts" style={{ fontWeight: 'bolder' }}>
              <img src={BlogImage} alt="Blog" style={{ width: '30px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
