import React from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'

export default class Activity extends React.Component {

    async componentDidMount() {
        let activityResponse = await axios.get('https://5000-chang2keedata-p2backend-5uxmotpbq31.ws-us54.gitpod.io/search');

        this.setState({
          'allvendors': activityResponse.data
        })  
    }

    state = {
        'allvendors': [],
    }

    render() {
        return(
            <React.Fragment>
                <h1>Our Activity</h1>
                {this.state.allvendors.map(function(m, index){
                    return (
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title key={index}>{m.vendor}</Card.Title>
                          <Card.Text>
                            <div>{m.activity.map(a =>
                                <React.Fragment>
                                <div>{a.name}</div> 
                                <div>{a.difficulty}</div>
                                </React.Fragment>
                                )}</div>
                            <div>Address: {m.address.street}</div>
                            <div>Postcode: {m.address.postcode}</div>
                          </Card.Text>
                          <Button variant="primary">More</Button>
                          <Button variant="primary">More</Button>
                        </Card.Body>
                      </Card>
                    )
                })}
            </React.Fragment>
        )
    }
}