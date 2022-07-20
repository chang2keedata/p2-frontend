import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class AddActivity extends React.Component {

    state = {
        'vendor': '',
        'street': '',
        'postcode': '',
        'opening_hours': '',
        'activity_name': '',
        'activity_difficulty': '',
        'tag': [],
        'cost_desc': '',
        'cost': [], 
    }

    addNew = async () => {
        await axios.post('https://5000-chang2keedata-p2backend-5uxmotpbq31.ws-us54.gitpod.io/create',{
            'vendor': this.state.vendor,
            'street': this.state.street,
            'postcode': this.state.postcode,
            'opening_hours': this.state.opening_hours,
            'activity_name': this.state.activity_name,
            'activity_difficulty': this.state.activity_difficulty,
            // 'tag': this.state.tag.split(','),
            'cost_desc': this.state.cost_desc,
            // 'cost': this.state.cost.split(',')
        })
        this.props.doneAddingActivity();
    }

    updateForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateTag = (event) => {

        if (this.state.tag.includes(event.target.value)) {
            // removing
            let indexToRemove = this.state.tag.indexOf(event.target.value);
            let cloned = [
                ...this.state.tag.slice(0, indexToRemove),
                ...this.state.tag.slice(indexToRemove+1)
            ]
            this.setState({
                'tag':cloned
            })
        } else {
        this.setState({
            'tag':[...this.state.tag, event.target.value]
            })
        }      
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" 
                           className="form-control mt-1"
                           name="vendor"
                           placeholder="Vendor Name"
                           value={this.state.vendor}
                           onChange={this.updateForm}
                    />
                </div>
                <div>
                    <input type="text" 
                           className="form-control mt-1"
                           name="street"
                           placeholder="Street"
                           value={this.state.street}
                           onChange={this.updateForm}
                    />
                  </div>
                <div>
                    <input type="text" 
                           className="form-control mt-1"
                           name="postcode"
                           placeholder="Postcode"
                           value={this.state.postcode}
                           onChange={this.updateForm}
                    />
                </div>
                <div>
                    <label>Opening Hours</label>{' '}
                    <select className="form-controls mt-1" value={this.state.opening_hours} onChange={this.updateForm}>
                        <option value="mon-fri">Mon - Fri</option>
                        <option value="sat-sun">Sat - Sun</option>
                        <option value="mon-sun">Mon - Sun</option>
                    </select>
                </div>
                <div>
                    <input type="text" 
                           className="form-control mt-1"
                           name="activity_name"
                           placeholder="Activity Name"
                           value={this.state.activity_name}
                           onChange={this.updateForm}
                    />
                </div>
                <div>
                    <label>Activity Difficulty:</label>
                    <input type="radio"
                           name="activity_difficulty"
                           value="easy" 
                           className="form-check-input m-1"
                           onChange={this.updateForm}
                           checked={this.state.activity_difficulty === 'easy'}
                           />
                    <label className="form-check-label">Easy</label>

                    <input type="radio" 
                           name="activity_difficulty"
                           value="intermediate"
                           className="form-check-input m-1"
                           onChange={this.updateForm}
                           checked={this.state.activity_difficulty === 'intermediate'}
                           />
                    <label className="form-check-label">Intermediate</label>

                    <input type="radio"
                           name="activity_difficulty"
                           value="hard"
                           className="form-check-input m-1"
                           onChange={this.updateForm}
                           checked={this.state.activity_difficulty === 'hard'}/>
                    <label className="form-check-label">Hard</label>
                </div>
                <div>
                    <input type="text" 
                           className="form-control mt-1"
                           name="cost_desc"
                           placeholder="Cost Description"
                           value={this.state.cost_desc}
                           onChange={this.updateForm}
                    />
                </div>
                <div>
                    <input type="text" 
                           className="form-control mt-1"
                           name="cost"
                           placeholder="Cost"
                           value={this.state.cost}
                           onChange={this.updateForm}
                    />
                </div>
                <div>
                    <label>Tags:</label>{' '}
                    <input type="checkbox" onChange={this.updateTag} className="form-check-input m-1" name="tag" value="water" checked={this.state.tag.includes('water')}/>
                    <label class="form-check-label">Water</label>

                    <input type="checkbox" onChange={this.updateTag} className="form-check-input m-1" name="tag" value="land" checked={this.state.tag.includes('land')}/>
                    <label class="form-check-label">Land</label>

                    <input type="checkbox" onChange={this.updateTag} className="form-check-input m-1" name="tag" value="air" checked={this.state.tag.includes('air')}/>
                    <label class="form-check-label">Air</label>
                </div>
                <div class="d-grid">
                <button className="btn btn-primary p-1" onClick={this.addNew}>Add</button>
                </div>
                <hr />
                <h2>Entered information:</h2>
                <p>Your vendor name: {this.state.vendor}</p>
                <p>Your street name: {this.state.street}</p>
            </div>
        )
    }
}