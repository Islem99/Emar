import { useState } from "react";
const TableData = [
  {
    heading: "Brand",
    subHeading: "No Brand"
  },
  {
    heading: "Power Source",
    subHeading: "Corded Electric"
  },
  {
    heading: "Maximum Rotational Speed",
    subHeading: "3000 RPM"
  },
  {
    heading: "Voltage",
    subHeading: "4.5 Volts"
  },
  {
    heading: "Amperage",
    subHeading: "4.5 Amps"
  },
  {
    heading: "Color",
    subHeading: "Green"
  },
  {
    heading: "Included Components",
    subHeading: "5 x construction drill bits, 1* auxiliary handle,  1 x manual, 1 x chuck key, 1 x impact drill"
  },
  {
    heading: "Speed",
    subHeading: "3000 RPM",
    className: "last-child"
  }
]

const ProductDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="product-description">
      <h1>Product Description</h1>
      <p>
        Powerful Motor: Features a 4.5 Amps copper motor which delivers a very nice performance at 3000RPM. Providing additional durability to support overload production for drilling and chipping on wood,
        masonry, steel, wall, concrete and other hard materials {isExpanded && (
          <>Additional information goes here</>
        )}
        {isExpanded ? (
          <span onClick={toggleExpand} style={{ cursor: "pointer" }}> See less</span>
        ) : (
          <span onClick={toggleExpand} style={{ cursor: "pointer" }}> ... See more</span>
        )}
      </p>
      <hr />
      <div className="product-description-content">
        <h1>Product Information</h1>
        <h4>Technical Details</h4>
        <div className="table-content">
          <div className="left-side">
            {TableData.map((item, index) => (
              <div className={`row m-0 table-row ${item.className}`} key={index}>
                <div className="col-lg-6 table-colum">
                  {item.heading}
                </div>
                <div className="col-lg-6">
                  {item.subHeading}
                </div>
              </div>
            ))}
          </div>
          <div className="right-side">
            {TableData.map((item, index) => (
              <div className={`row m-0 table-row ${item.className}`} key={index}>
                <div className="col-lg-6 table-colum">
                  {item.heading}
                </div>
                <div className="col-lg-6">
                  {item.subHeading}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription;