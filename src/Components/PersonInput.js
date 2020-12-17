import React, { Component } from 'react';
import axios from 'axios';

export default class PersonInput extends Component {
    state= {
        name:''
    };

    handleSubmit = e =>{
        e.preventDefault();
        const user = {
            name:this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`,{user}).then(res=>{
            console.log(res);
            console.log(res.data);
    });
    }

    handleChange = e =>{
        this.setState({name:e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type = 'text' name = 'name' onChange = {this.handleChange}/>
                    </label>
                    <button type = 'submit'>Add</button>
                </form>
            </div>
        )
    }
}