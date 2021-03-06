import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
// import axios from 'axios'
import AddActivity from './AddActivity'
// import EditActivity from './EditActivity'
import Activity from './Activity'
import logo from './logo.svg';
import './style.css'

export default class App extends React.Component {

  state = {
    renderPage: "activity",
  }

  renderAdd = () => {
    this.setState({
      renderPage: "add"
    })
  }

  renderPage = () => {
    if (this.state.renderPage === "activity") {
      return (<Activity />)
    }
    if (this.state.renderPage === "add") {
      // return (<AddActivity />)
      return <AddActivity doneAddingActivity={this.doneAddingActivity} />
    }
  }

  render() {
    return (
      <React.Fragment>

        <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} width="70px" height="70px" />{' '}
            Outdoor
          </Navbar.Brand>

          <Navbar.Toggle className="coloring m-3" />
          <Container>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link><span onClick={this.renderAdd}>AddActivity</span></Nav.Link>
                <Nav.Link>About Us</Nav.Link>
                <Nav.Link>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
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