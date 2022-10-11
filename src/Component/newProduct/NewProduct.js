import React from 'react'
import './newProduct.css'

export default function NewProduct() {
  return (
    <div className="newProduct">
        <h1 className="addProductTitle"> New Product </h1>

        <form className="addProductForm">
            <div className="addProductItem">
                <label>Image</label>
                <input type='file' id='file' />
            </div>

            <div className="addProductItem">
                <label htmlFor='name' > Name </label>
                <input id="name" type='text' placeholder='Apple Airpods'/>
            </div>

            <div className="addProductItem">
                <label htmlFor='stock' > Stock </label>
                <input id="stock" type='text' placeholder='123'/>
            </div>

            <div className="addProductItem">
                <label> Active </label>
                <select id='active' name="active">
                    <option value="yes" > Yes </option>
                    <option value="no" > NO</option>
                </select>
            </div>
            <button className="addProductButton"> Create </button>
        </form>
    </div>
  )
}
