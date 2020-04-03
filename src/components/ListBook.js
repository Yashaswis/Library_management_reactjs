import React, { Component } from 'react';
import AddBook from './AddBook';
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
                <table className="Table" align="center" >
                    <thead>
                        <tr>
                            <td className="format">Bookid</td>
                            <td className="format">BookName</td> 
                            <td className="format">Edition</td> 
                            <td className="format">Author</td>
                            <td className="format">Date</td>
                            <td className="format">Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                 <td className="formate">{index}</td>
                                <td className="formate">{item.BookName}</td>
                                <td className="formate">{item.Edition}</td>
                                <td className="formate">{item.Author}</td>
                                <td className="formate">{item.Date}</td>
                                <td className="formate">{item.Price}</td>
                                <td><button className="buttons" onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button className="buttons" onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default ListBook;