import { Nav, Navbar, Container, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
// import ActivityForm from './ActivityForm'
// import EditActivity from './EditActivity'
import Activity from './Activity'
import logo from './logo.svg';
import './style.css'

export default class App extends React.Component {

  state = {
    renderPage: "activity"
  }

  renderBrowse = () => {
    this.setState({
      renderPage: "browse"
    })
  }

  renderPage = () => {
    if (this.state.renderPage === "activity") {
      return (<Activity />)
    }
    if (this.state.renderPage === "browse") {
      return (<h1>browse</h1>)
    }
  }

  render() {
    return (
      <React.Fragment>

        <div className="App">
        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" />{' '}
            Outdoor
          </Navbar.Brand>

          <Navbar.Toggle className="coloring m-3" />
          <Container>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link><span onClick={this.renderBrowse}>Browse</span></Nav.Link>
                <Nav.Link>About Us</Nav.Link>
                <Nav.Link>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Container className="justify-content-end">
            <Form>
              <Form.Control type="search" placeholder="Search" className="me-5" />
            </Form>
            <Button className="m-1" variant="outline-success">Search</Button>
          </Container>
        </Navbar>
        </div>

        <div className="container">
          {this.renderPage()}
        </div>
      </React.Fragment>
    )
  }
}