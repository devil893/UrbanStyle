import React, { useState, useEffect } from "react";
import "./EditProduct.css";
import upload_area from "./../../assets/upload_area.svg";
import { toast } from "react-toastify";

const EditProduct = ({ isOpen, onClose, product, onProductUpdated }) => {
    // Move all hooks to the top level
    const backend_url = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    
    const [image, setImage] = useState(null);
    const [imageChanged, setImageChanged] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        category: "",
        description: "",
        new_price: "",
        old_price: ""
    });

    // Initialize form with product details when component opens
    // Place useEffect before conditional return
    useEffect(() => {
        if (product && isOpen) {
            setProductDetails({
                name: product.name || "",
                category: product.category || "tshirts",
                description: product.description || "",
                new_price: product.new_price || "",
                old_price: product.old_price || ""
            });
            // Reset image state
            setImage(null);
            setImageChanged(false);
        }
    }, [product, isOpen]);

    // Early return after all hooks
    if (!isOpen) return null;

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
        setImageChanged(true);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const updateProduct = async () => {
        // Basic validation
        if (!productDetails.name || !productDetails.new_price || !productDetails.old_price) {
            toast.error("Please fill all required fields");
            return;
        }

        const formData = new FormData();
        formData.append("name", productDetails.name);
        formData.append("category", productDetails.category);
        formData.append("description", productDetails.description);
        formData.append("new_price", productDetails.new_price);
        formData.append("old_price", productDetails.old_price);

        // Only append image if it has been changed
        if (imageChanged && image) {
            formData.append("product", image);
        }

        try {
            const response = await fetch(`${backend_url}/api/products/${product.id}`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Product updated successfully");
                onClose(); // Close the modal
                
                // Call the callback to refresh product list
                if (onProductUpdated) {
                    onProductUpdated();
                }
            } else {
                toast.error(data.error || "Failed to update product");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            toast.error("An error occurred while updating the product");
        }
    };

    // Handle clicking outside the modal to close it
    const handleModalClick = (e) => {
        if (e.target.className === "edit-product-modal") {
            onClose();
        }
    };

    return (
        <div className="edit-product-modal" onClick={handleModalClick}>
            <div className="edit-product">
                <div className="edit-product-header">
                    <h2>Edit Product</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                
                <div className="editproduct-itemfield">
                    <p>Product Title</p>
                    <input 
                        value={productDetails.name} 
                        onChange={changeHandler} 
                        type="text" 
                        name="name" 
                        placeholder="Type here"
                    />
                    
                    <div className="editproduct-itemfield">
                        <p>Product Description</p>
                        <textarea 
                            value={productDetails.description}
                            onChange={changeHandler}
                            name="description"
                            placeholder="Enter product description"
                            className="editproduct-description"
                            rows="4"
                        />
                    </div>

                    <div className="editproduct-price">
                        <div className="editproduct-itemfield">
                            <p>Price</p>
                            <input 
                                value={productDetails.old_price} 
                                onChange={changeHandler} 
                                type="text" 
                                name="old_price" 
                                placeholder="Type here"
                            />
                        </div>
                        <div className="editproduct-itemfield">
                            <p>Offer Price</p>
                            <input 
                                value={productDetails.new_price} 
                                onChange={changeHandler} 
                                type="text" 
                                name="new_price" 
                                placeholder="Type here"
                            />
                        </div>
                    </div>
                    
                    <div className="editproduct-itemfield">
                        <p>Product Category</p>
                        <select 
                            value={productDetails.category} 
                            onChange={changeHandler} 
                            name="category" 
                            className="edit-product-selector"
                        >
                            <option value="tshirts">T-Shirts</option>
                            <option value="polo">Polo</option>
                            <option value="formalshirts">Formal Shirts</option>
                        </select>
                    </div>
                    
                    <div className="editproduct-itemfield">
                        <p>Product Image</p>
                        <label htmlFor="edit-file-input">
                            <img 
                                src={
                                    imageChanged && image ? 
                                    URL.createObjectURL(image) : 
                                    product?.image || upload_area
                                } 
                                alt="" 
                                className="editproduct-thumbnail-img"
                            />
                        </label>
                        <input 
                            onChange={imageHandler} 
                            type="file" 
                            name="image" 
                            id="edit-file-input" 
                            hidden
                        />
                    </div>
                    
                    <div className="edit-product-buttons">
                        <button onClick={onClose} className="cancel-btn">Cancel</button>
                        <button onClick={updateProduct} className="update-btn">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;

