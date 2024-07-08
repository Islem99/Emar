
import { Icon } from "@iconify/react/dist/iconify.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import images from "../../assets/images/circle-images.png";
import RatingComponent from "./Rating.component";
const CardData = [
    {
        saleText: "sale 50%",
        description: "Bosch Professional GLI 18V-1900 (601446400) 1404V 1900LM"
    },
    {
        saleText: "sale 50%",
        description: "Bosch Professional GLI 18V-1900 (601446400) 1404V 1900LM"
    },
    {
        saleText: "sale 50%",
        description: "Bosch Professional GLI 18V-1900 (601446400) 1404V 1900LM"
    },
    {
        saleText: "sale 50%",
        description: "Bosch Professional GLI 18V-1900 (601446400) 1404V 1900LM"
    }
]
const SliderItem = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <div className="slider-item">
            <div className="d-flex justify-content-between">

                <h1>Products related To This Item</h1>
                <p>Page 1 of 24</p>
            </div>
            <Slider {...settings}>

                {CardData.map((item, i) => (
                    <div className="card-content" key={i}>
                        <div className="card-body">
                            <span>{item.saleText}</span>
                            <div className='d-flex  justify-content-center py-5'>
                                <img src={images} alt="img not found" />
                            </div>
                        </div>
                        <div className="card-bottom">
                            <h1>{item.description}</h1>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h2>AED14.99 <span>AED20.99</span></h2>
                                <div className="lock-button">
                                    <Icon icon="heroicons:shopping-bag" style={{ color: "black" }} width={20} height={20} />
                                </div>

                            </div>
                            <RatingComponent />
                        </div>
                    </div>
                ))}




            </Slider>
        </div>
    )
}

export default SliderItem;
