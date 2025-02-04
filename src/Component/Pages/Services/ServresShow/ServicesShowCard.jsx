/* eslint-disable react/prop-types */
const ServicesCard = ({ title, description ,imges }) => {
  return (
    <div
      className="card    text-light h-100"
      style={{
        backgroundColor: "#1f2130",
        borderRadius: "20px",
        direction: "rtl",
      }}
    >
      <div className="card-body">
        <img
          src={imges}
          alt=""
          className=" me-auto"
          style={{
            position: "absolute",
            top: "0",
            right: "-40px",
            width: "180px",
          }}
        />
        <h5
          className="card-title "
          style={{ fontSize: "12px", marginTop: "80px" }}
        >
          {title}
        </h5>
        <p
          className="card-text"
          style={{
            direction: "rtl",
            color: "#D9D9D9",
            fontSize: "10px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
