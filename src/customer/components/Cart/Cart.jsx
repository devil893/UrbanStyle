import React from "react";

const Cart= () => {
    return (
        <div>

            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                <CartItem/>
                </div>
            
            </div>
            
            <div className="px-5 sticly top-0 h-[100vh] mt-5 lg:mt-0">
                <div className="border">right side</div>

            </div>
        </div>
    )
}

export default Cart;