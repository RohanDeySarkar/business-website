import React from 'react';
import './Products.css';
import {cardDetails} from './cardDetails';
import Navbar from './Navbar';
import VideoCard from './VideoCard';

function Products() {
    return (
        <div>
            <div className="header">
                <div className="header__left">
                    <Navbar /> 
                    <h2>Products</h2> 
                </div>

                <div className="header__right">
                    <h2>ti-interior hub</h2>
                </div>
            </div>

            <div className="products">
                {cardDetails.map((detail) => 
                    <VideoCard
                        image={detail.image}
                        title={detail.name}
                        description={detail.des}
                    />
                )}
            </div>

            <div className="footer">
                <p>We Design and Manufacture All Types of Resedential and Commercial Interior Furnitures and Decors</p>
            </div>
        </div>
    )
}

export default Products
