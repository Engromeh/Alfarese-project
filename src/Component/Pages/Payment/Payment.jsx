import payment1 from "../../../Images/Orange.svg";
import payment2 from "../../../Images/we.svg";
import payment3 from "../../../Images/instapay.svg";
import payment4 from "../../../Images/vodefone.svg";
import payment5 from "../../../Images/etasilat.svg";
import payment6 from "../../../Images/bank.svg";

const Payment = () => {
  return (
    <div className="py-3 w-100" style={{ backgroundColor: "#171a28" }}>
 <div className="d-flex flex-wrap justify-content-center gap-4 flex-md-row flex-column align-items-center">        <img src={payment1} alt="Orange Money" style={{ width: "180px", height: "135px" }} />
        <img src={payment2} alt="We Pay" style={{ width: "285px", height: "135px" }} />
        <img src={payment3} alt="Instapay" style={{ width: "180px", height: "135px" }} />
        <img src={payment4} alt="Vodafone" style={{ width: "180px", height: "135px" }} />
        <img src={payment5} alt="Banque Misr" style={{ width: "180px", height: "135px" }} />
        <img src={payment6} alt="Banque Misr" style={{ width: "180px", height: "135px" }} />
      </div>
    </div>
  );
};

export default Payment;
