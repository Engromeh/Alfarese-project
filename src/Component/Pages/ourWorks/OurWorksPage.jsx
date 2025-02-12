// import Image from "../../../Images/image 5.svg"
import OurWorksCard from "./OurWorksCard";
import Slider from "./Slider";
import btnIcon from "../../../Images/Group 229.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const data = [
  { id: 1, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
  { id: 2, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
  { id: 3, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
  { id: 4, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
  { id: 5, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
  { id: 6, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
  { id: 7, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
  { id: 8, img:" Image", title: "تنظيم فعاليات و مؤتمرات" },
];
const OurWorksPage = () => {
  return (
    <>
    <div className="" style={{ backgroundColor: "#151723" }}>
    <Slider />
      <div className="container p-5">
        <div
          className="row m-0 gy-3 gx-4 justify-content-center px-sm-1 py-3 px-md-5 "
          style={{
            backgroundColor: "#2e2e3a",
            borderRadius: "20px",
          }}
        >
          {data.map((el) => (
            <OurWorksCard key={el.id} title={el.title} />
          ))}
          <div className="px-1 px-md-3 mt-5">
            <button
              className="btn text-light py-3 text-center w-100"
              style={{ backgroundColor: "#1f2130", borderRadius: "12px" }}
            >
              {"<"} مشاهده باقي الاعمال{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="m-auto me-md-5 pb-2 ms-md-auto" style={{ width: "fit-content" }}>
        <button className="btn d-block " style={{ backgroundColor: "#f4cdac" }}>
          استشاره مجانيه <img src={btnIcon} alt="" style={{ width: "30px" }} />
        </button>
      </div>
    </div>
    </>
  );
};

export default OurWorksPage;
