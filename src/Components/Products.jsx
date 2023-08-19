import React, { useState } from 'react'
import './styling.css'

let flag = false;
let idx = '';

const Products = () => {

    const [arr, setArr] = useState([]);
    const [name, setName] = useState('Add')



    let add = () => {
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let price = document.getElementById('price').value;
        let qty = document.getElementById('qty').value;

        if (flag) {
            let obj = {
                id: id,
                name: name,
                price: price,
                qty: qty
            }
            arr.splice(idx, 1, obj);
            setArr([...arr]);
        } else {
            if (id == "" || name == "" || price == "" || qty == '') {
                alert("Please fill all the columns first!");
            } else {
                let obj = {
                    id: id,
                    name: name,
                    price: price,
                    qty: qty
                }
                setArr([...arr, obj]);
            }
        }
        flag = false;
        setName('Add')
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('qty').value = '';

    }

    const edited = (event) => {
        let index = event.target.closest('tr').id;
        idx = index;
        flag = true;
        document.getElementById('id').value = arr[index].id;
        document.getElementById('name').value = arr[index].name;
        document.getElementById('price').value = arr[index].price;
        document.getElementById('qty').value = arr[index].qty;
        setName('Update')
    }

    const deleted = (event) => {
        let index = event.target.closest('tr').id;
        arr.splice(index, 1);
        setArr([...arr]);
    }


    return (
        <center>
            <table class="table1">
                <tr>
                    <td>Product Id</td>
                    <td> <input id="id" type="text" /> </td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td> <input id="name" type="text" /> </td>
                </tr>
                <tr>
                    <td>Product Price</td>
                    <td> <input id="price" type="text" /> </td>
                </tr>
                <tr>
                    <td>Product Quantity</td>
                    <td> <input id="qty" type="number" min='0' /> </td>
                </tr>
                <tr>
                    <td> <button id="btn" type="submit" onClick={add} > {name} Product </button> </td>
                </tr>
            </table>

            <table id="done">
                <thead class="head">
                    <td>Product Id</td>
                    <td>Product Name</td>
                    <td>Product Price</td>
                    <td>Quantity</td>
                    <td colSpan={2}>Actions</td>
                </thead>
                <tbody id='body'>
                    {arr.length != 0 && arr.map((product, index) => {
                        return (
                            <tr id={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>
                                <td style={{ color: 'green', cursor: 'pointer' }} onClick={edited}>Edit</td>
                                <td style={{ color: 'red', cursor: 'pointer' }} onClick={deleted}>Delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </center>
    )
}

export default Products