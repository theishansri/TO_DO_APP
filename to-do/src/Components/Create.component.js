import React, { Component } from 'react'

export class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo_desc: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    onChangeTodoDesc = (e) => {
        this.setState({
            todo_desc: e.target.value
        })
    }
    onChangeResponsible = (e) => {
        this.setState({
            todo_responsible: e.target.value
        })
    }
    onChangeTodoPriority = (e) => {
        this.setState({
            todo_priority: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            todo_desc: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New TOdo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.todo_desc} onChange={this.onChangeTodoDesc} />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text" className="form-control" value={this.state.todo_responsible} onChange={this.onChangeResponsible} />
                    </div>
                    <div className="form-group">

                        <div className="form-check form-check-inline">
                            <input type="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Low" checked={this.state.todo_priority === 'Low'}
                                onChange={this.onChangeTodoPriority} />
                            <label className="form-check-label"> Low </label>
                            <div className="form-check form-check-inline">
                                <input type="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Medium" checked={this.state.todo_priority === 'Medium'}
                                    onChange={this.onChangeTodoPriority} />
                                <label className="form-check-label"> Medium </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="High" checked={this.state.todo_priority === 'High'}
                                    onChange={this.onChangeTodoPriority} />
                                <label className="form-check-label"> High </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Create
