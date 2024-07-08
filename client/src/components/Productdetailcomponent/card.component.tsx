import { Icon } from '@iconify/react/dist/iconify.js';
import images from "../../assets/images/circle-images.png";
import RatingComponent from './Rating.component';
const CardData = [
    {
        saleText: "sale 50%",
        description: "Bosch Professional GLI 18V-1900 (601446400) 1404V 1900LM"
    },
    {
        saleText: "sale 50%",
        description: "Bosch Professional GLI 18V-1900 (601446400) 1404V 1900LM"
    }
]
const CardComponent = () => {
    return (
        <>
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
        </>
    )
}

export default CardComponent;
