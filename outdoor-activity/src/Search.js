import { Nav, Navbar, Container, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import axios from 'axios'

export default class App extends React.Component {

  state = {
    searchHours: '',
    searchDifficulty: '',
    searchTag: '',
    searchCost: ''
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
            <Form>
              <Form.Control placeholder="Search" className="me-5" name="searchHours" value={this.state.searchHours} onChange={this.searchInput}/>
            </Form>
            <Button className="m-1" variant="outline-success" onClick={this.search}>Search</Button>
      </React.Fragment>
    )
  }
}