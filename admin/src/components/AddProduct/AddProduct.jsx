import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "./../../assets/upload_area.svg";
import {toast} from "react-toastify";

const AddProduct = () => {

    const backend_url = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    const [image,setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        category:"tshirts",
        description: "", // Added description field
        new_price:"",
        old_price:""
    });

    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const addProduct = async () =>{
        const formData = new FormData();
        formData.append("name",productDetails.name);
        formData.append("product",image);
        formData.append("category",productDetails.category);
        formData.append("description",productDetails.description); // Added description
        formData.append("new_price",productDetails.new_price);
        formData.append("old_price",productDetails.old_price);
    
        const response = await fetch(`${backend_url}/api/products`,{
            method:"POST",
            headers:{
                "Authorization": `Bearer ${token}`
            },
            body:formData,
        });
        if(response.ok){
            setProductDetails({
                name: "",
                category:"tshirts",
                description: "", // Reset description
                new_price:"",
                old_price:""
            });
            setImage(false);
            toast.success("product added");
        }
        else toast.error("failed");
    }

    return ( 
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here"/>
                
                <div className="addproduct-itemfield">
                    <p>Product Description</p>
                    <textarea 
                        value={productDetails.description}
                        onChange={changeHandler}
                        name="description"
                        placeholder="Enter product description"
                        className="addproduct-description"
                        rows="4"
                    />
                </div>

                <div className="addproduct-price">
                    <div className="addproduct-itemfield">
                        <p>Price</p>
                        <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here"/>
                    </div>
                    <div className="addproduct-itemfield">
                        <p>Offer Price</p>
                        <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here"/>
                    </div>
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Category</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                        <option value="tshirts">T-Shirts</option>
                        <option value="polo">Polo</option>
                        <option value="formalshirts">Formal Shirts</option>
                    </select>
                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        <img src={image?URL.createObjectURL(image):upload_area} alt="" className="addproduct-thumbnail-img"/>
                    </label>
                    <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
                </div>
                <button onClick={addProduct} className="addproduct-btn">ADD</button>
            </div>
        </div>
     );
}
 
export default AddProduct;
