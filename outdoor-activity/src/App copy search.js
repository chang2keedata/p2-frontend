import { Nav, Navbar, Container, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import axios from 'axios'
import AddActivity from './AddActivity'
// import EditActivity from './EditActivity'
import Activity from './Activity'
import logo from './logo.svg';
import './style.css'

export default class App extends React.Component {

  state = {
    renderPage: "activity",
    searchHours: ''
    // searchDifficulty: '',
    // searchTag: '',
    // searchCost: ''
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
    if (this.state.renderPage === "outdoor") {
      return (<Activity />)
    }
  }

  search = async () => {
    let searchResponse = await axios.get('https://5000-chang2keedata-p2backend-5uxmotpbq31.ws-us54.gitpod.io/search', {
      params : {
        opening_hours: this.state.searchHours,
        activity: this.state.searchDifficulty,
        tag: this.state.searchTag,
        cost: parseInt(this.state.searchCost)
      }
    });
        this.setState({
          'searchResults': searchResponse.data
        }) 
  }

  searchInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>

        <div className="App">
        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" onClick={this.renderBrowse} />{' '}
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
              <Form.Control placeholder="Search" className="me-5" name="searchHours" value={this.state.searchHours} onChange={this.searchInput}/>
            </Form>
            <Button className="m-1" variant="outline-success" onClick={this.search}>Search</Button>
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