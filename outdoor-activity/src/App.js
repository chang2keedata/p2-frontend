import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Form from './Form'
import './style.css'

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Activity Form</h1>
        <Form/>
      </div>
    </React.Fragment>
  )
}