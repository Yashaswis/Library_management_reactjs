import React, { Component } from 'react';
import AddBook from './AddBook';
import PaginationButtons from './pagination';
<<<<<<< HEAD
=======

>>>>>>> fe45ab4fb288d625acf1517b8825d2be3e466f94
import './Style.css';

class ListBook extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }
    returnList() {
        if (localStorage.getItem('Books') == null)
            localStorage.setItem('Books', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('Books'))
    }
    handleEdit = index => {
        this.setState({
            currentIndex: index
        })
    }
    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('Books', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('Books', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
    render() {
        return (
            <div>
                <AddBook
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <hr />
                <h3>List of books</h3>
                <div class="bs-example">
                <table className="table table-striped table-dark" >
                    <thead>
                        <tr>
                            <th >Bookid</th>
                            <th >BookName</th> 
                            <th>Edition</th> 
                            <th >Author</th>
                            <th >Date</th>
                            <th >Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td >{index}</td>
                                <td >{item.BookName}</td>
                                <td >{item.Edition}</td>
                                <td>{item.Author}</td>
                                <td >{item.Date}</td>
                                <td >{item.Price}</td>
                                <td><button className="buttons" onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button className="buttons" onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <PaginationButtons />
<<<<<<< HEAD
            </div>

=======
>>>>>>> fe45ab4fb288d625acf1517b8825d2be3e466f94
            </div>
        );
    }

}
export default ListBook;