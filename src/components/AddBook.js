import React, { Component } from 'react';
import './Style.css';
class AddBook extends Component {
    state={
        ...this.returnStateobject()
    }
    returnStateobject() {
        if(this.props.currentIndex== -1)
            return{
                BookName:'',
                Edition:'',
                Subject:'',
                Date:'',
                Price:''
            }
        else
            return this.props.list[this.props.currentIndex]
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateobject() })
            console.log(prevProps, this.props)
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    render() {
        return (
            <fieldset>
            <h2>AddBook</h2>
            <form onSubmit={this.handleSubmit} className="display">
                <input name="BookName" type="text" placeholder="BookNamer" onChange={this.handleInputChange} value={this.state.BookName} /><br />
                < input name="Edition" type="number" placeholder="Edition" onChange={this.handleInputChange} value={this.state.Edition} /><br />
                < input name="Author" type="text" placeholder="Author" onChange={this.handleInputChange} value={this.state.Author} /><br />
                < input name="Price" type="number" placeholder="Price" onChange={this.handleInputChange} value={this.state.Price} /><br />
                < input name="Date" type="Date" placeholder="Date" onChange={this.handleInputChange} value={this.state.Date} /><br />
                <button type="submit">Save</button>
            </form>
            </fieldset>
        )
       
    }

}
export default AddBook;