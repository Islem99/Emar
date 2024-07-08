import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Slider from "react-slick";
import imagse2 from "../../assets/images/Rectangle-1.png";
import imagse1 from "../../assets/images/Rectangle-2.svg";
import RatingComponent from "./Rating.component";


const ProductBanner = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

    };
    return (
        <div className="banner-component">
            <div className="row">
                <div className="col-lg-8">
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <figure>
                                <Icon icon="ph:heart-thin" style={{ color: "#000000" }} />
                                <img src={imagse1} alt="" />
                            </figure>
                            <Slider {...settings}>
                                <div>
                                    <img src={imagse2} alt="img not found" />
                                </div>
                                <div>
                                    <img src={imagse2} alt="img not found" />

                                </div>
                                <div>
                                    <img src={imagse2} alt="img not found" />

                                </div>
                                <div>
                                    <img src={imagse2} alt="img not found" />

                                </div>


                            </Slider>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h1>13mm Hammer Drilling Machine Multi Functional
                                Electric Drill Machine Drill Screw Driver Option
                                Reverse Forward Slow Fast</h1>
                            <div className="banner-rating">
                                <RatingComponent />
                                <p>89 Ratings | 39 Answered Questioned</p>

                                <p>   <span>Brand: </span> No Brand | More Power Tool from No Brand</p>
                            </div>
                            <div className="pricing-content">
                                <h1>AED14.99</h1>
                                <span>Promotions</span>
                                <div className="Promotions-button">
                                    Min. Spend ADE 50 <Icon icon="ep:arrow-down" style={{ color: "white" }} width={15} height={15} />
                                </div>
                            </div>
                            <span className="span">AED20.99</span>
                            <hr />
                            <div className="banner-content-inner">
                                <h2>About this item</h2>
                                <ul>
                                    <li>
                                        Powerful Motor: Features a 4.5 Amps copper motor which delivers a very nice performance at
                                        3000RPM. Providing additional durability to support overload production for drilling and
                                        chipping on wood, masonry, steel, wall, concrete and other hard materials
                                    </li>
                                    <li>
                                        2 Functions in 1: Equipped with a green dual-mode selector on the top, you can easily switch
                                        between hammer and drill functions by one button according to various work requirements.
                                        Twelve adjustable speeds
                                    </li>
                                </ul>
                                <hr />
                                <p>Color Family   <span>Multicolor</span></p>
                                <div className="ticket-amount">
                                    <p>Quantity</p>
                                    <button
                                        className="arrow-up"
                                        onClick={decrementCounter}
                                    >
                                        -
                                    </button>
                                    <span className="number">
                                        {counter}
                                    </span>
                                    <button
                                        className="arrow-down"
                                        onClick={incrementCounter}>
                                        +
                                    </button>
                                </div>
                                <div className="d-flex justify-content-end  mt-3 gap-2">
                                    <button className="buy-button">Buy Now</button>
                                    <button className="add-button">Add to Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="banner-right-content">
                        <h5>Delivery</h5>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div className="d-flex gap-2">
                                <Icon icon="ion:location-outline" style={{ color: "#000000" }} width={20} height={20} />
                                <p>Sheikh Zayed bin Sultan
                                    Street, UAE</p>
                            </div>
                            <button className="change-button">Change</button>
                        </div>
                        <hr />
                        <div className="d-flex  gap-2 mt-2">
                            <Icon icon="ion:location-outline" style={{ color: "#000000" }} width={20} height={20} />
                            <div className="w-100">
                                <div className="d-flex  align-items-center  gap-2">
                                    <h5>Free Delivery</h5>
                                    <span>1 Apr - 5 Apr</span></div>
                                <div className="d-flex justify-content-between  align-items-center">
                                    <span>3 - 7 day(s)</span>
                                    <h5>Free</h5>
                                </div>
                                <div className="message-area">
                                    <p>Enjoy free shipping promotion with
                                        minimum spend of Rs. 0 in certain
                                        area</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-2 mt-2">
                            <Icon icon="ion:location-outline" style={{ color: "#000000" }} width={20} height={20} />
                            <h5>Cash On Delivery Available</h5>
                        </div>
                        <hr />
                        <h5>Services</h5>
                        <div className="d-flex gap-2   mt-2">

                            <Icon icon="ion:location-outline" style={{ color: "#000000" }} width={20} height={20} />
                            <div>

                                <h5>14 days free and easy return</h5>
                                <p>Change of mind is not applicable</p>
                            </div>
                        </div>
                        <div className="d-flex gap-2   mt-2">

                            <Icon icon="ion:location-outline" style={{ color: "#000000" }} width={20} height={20} />
                            <h5>Warranty not available</h5>
                        </div>
                        <hr />
                        <div className="d-flex gap-2  justify-content-between  mt-2">
                            <div>
                                <p>Sold By</p>
                                <h5>Lorem Ipsum</h5>
                            </div>
                            <button className="change-button">Chat</button>
                        </div>
                        <hr className="mb-0" />
                        <div className="row">
                            <div className="col-lg-6 text-center py-3" style={{
                                borderRight: "1px solid #000000"
                            }}>
                                <p>Ship on Time</p>
                                <h3>86%</h3>
                            </div>
                            <div className="col-lg-6 text-center py-3">
                                <p>Postive Seller </p>
                                <p>Rating</p>
                                <h3>99%</h3>
                            </div>
                        </div>
                        <hr className="mt-0" />
                        <div className="d-flex   justify-content-center  mt-2">
                            <button className="change-button">Visit Store</button>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductBanner;
