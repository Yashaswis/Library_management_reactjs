import React, { Component } from 'react';
import './Style.css';
// import Button from 'material-ui/Button';
import { Button,Form, FormGroup, FormControl,FormText, ControlLabel } from "react-bootstrap";
class AddBook extends Component {
    state={
        ...this.returnStateobject()
    }
    returnStateobject() {
        if(this.props.currentIndex== -1)
            return{
                BookName:'',
                Edition:'',
                Author:'',
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
            <div class="bs-example">
    <form textAlign="center" float="center" onSubmit={this.handleSubmit} className="display">
        <div class="input-group mb-0">
        <div class="form-group row-md-2">
            <label class="sr-only">BookName</label>
            <input name="BookName" type="text" class="form-control form-control-sm"  placeholder="BookName" onChange={this.handleInputChange} value={this.state.BookName} required />
        </div>
        </div>
        <div class="input-group mb-0">
        <div class="form-group row-md-2">
            <label class="sr-only">Author</label>
            <input name="Author" type="text" class="form-control form-control-sm"  placeholder="Author" onChange={this.handleInputChange} value={this.state.Author} required />
        </div>
        </div>
        <div class="input-group mb">
         <div class="form-group row-md-2">
            <label class="sr-only">Edition</label>
            <input name="Edition" type="number" class="form-control form-control-sm"  placeholder="Edition" onChange={this.handleInputChange} value={this.state.Edition} required />
        </div>
        </div>
        <div class="input-group mb">
         <div class="form-group row-md-2">
            <label class="sr-only">Amount</label>
            <input name="Price" type="number" class="form-control form-control-sm" placeholder="Amount" onChange={this.handleInputChange} value={this.state.Price}  required />
        </div>
        </div>
        <div class="input-group mb">
         <div class="form-group row-md-2">
            <label class="sr-only">Date</label>
            <input name="Date" type="Date" class="form-control form-control-sm" placeholder="Date" onChange={this.handleInputChange} value={this.state.Date} required />
        </div>
        </div>
        <div class="input-group mb">
        <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>
</div>
        );
       
    }

}
export default AddBook;
