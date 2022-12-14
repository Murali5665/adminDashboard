import { Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../charts/Charts'
import { productData } from '../dummydata'
import './product.css'

export default function Product() {
  return (
    <div className='product'>
        
        <div className="productTitleContainer">
            <h3 className="productTitle"> Product </h3>
            <Link to="/newproduct" className='link'> <button className="productAddButton"> Create </button> </Link>
        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>

            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg"/>
                    <span className="productName"> Apple Airpods </span>
                </div>

                <div className="productInfoBottom">
                    <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                    </div>

                    <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                    </div>

                    <div className="productInfoItem">
                      <span className="productInfoKey">In stock:</span>
                      <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="productBottom">

            <form className="productForm">
                <div className="productFormLeft">
                        <label > Product Name </label>
                        <input id="productname" type="text" placeholder="Apple AirPod"/>
                   
                        <label > In stock </label>
                        <select name="inStock" id="idStock">
                            <option value="yes"> Yes </option>
                            <option value="no"> No </option>
                        </select>
                   
                        <label > Active </label>
                        <select name="active" id="active">
                            <option value="yes"> Yes </option>
                            <option value="no"> No </option>
                        </select>
                </div>

                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg"  />
                        <label htmlFor='file' > <Publish/> </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button  className="productButton" >  Update </button>
                </div>

            </form>
        </div>
    </div>
  )
}
