import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample({setShowSkills,setShowProject}) {


  function skillsMenuTrue(){
    setShowSkills(true);
  }

  function HomeMenuTrue(){
    setShowSkills(false);
    setShowProject(false);
  }

  function ProjectsMenuTrue(){
    setShowProject(true);
    setShowSkills(false);
  }

  
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">HR</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={HomeMenuTrue}>Home</Nav.Link>
            <Nav.Link href="#Skills" onClick={skillsMenuTrue}>Skill's</Nav.Link>
            <Nav.Link href="#Projects" onClick={ProjectsMenuTrue}>Project</Nav.Link>
            <Nav.Link href="/board">Board</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
