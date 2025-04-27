import React, { useContext } from "react";
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { StoreContext } from "../../context/StoreContext";

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(StoreContext);

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img 
                    key={i} 
                    src={i <= rating ? star_icon : star_dull_icon} 
                    alt={`star ${i}`} 
                />
            );
        }
        return stars;
    };

    return ( 
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    {renderStars(Math.round(product.averageRating || 0))}
                    <p>({product.numReviews || 0} reviews)</p>
                </div>
                <div className="productdisplay-right-prices">
                   <div className="productdisplay-right-price-old">
                    ${product.old_price}
                   </div>
                   <div className="productdisplay-right-price-new">
                    ${product.new_price}
                   </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description || "No description available"}
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                {/* Reviews Section */}
                <div className="productdisplay-reviews">
                    <h2>Customer Reviews</h2>
                    {product.reviews && product.reviews.length > 0 ? (
                        <div className="reviews-list">
                            {product.reviews.map((review, index) => (
                                <div key={index} className="review-item">
                                    <div className="review-header">
                                        <div className="review-stars">
                                            {renderStars(review.rating)}
                                        </div>
                                        <div className="review-date">
                                            {new Date(review.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="review-comment">
                                        {review.comment}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-reviews">No reviews yet</p>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default ProductDisplay;
