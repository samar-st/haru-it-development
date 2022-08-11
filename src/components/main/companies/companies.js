import React from "react";
import './companies.css';
import CompaniesLogo from '../../../assets/itpark.png';
import CompaniesHand from '../../../assets/hand.png';

const Companies = () => {
    return(
        <div className=" container companies">
            <div className="companies__text">
                <h2>Нам доверяют</h2>
                <p>здесь должен был юыть какойто текс но я покашто нре знаю и чтобы хотя бы чтото было я пишу это</p>
            </div>
            <div className="companies__wrapper">
                <div className="companies__left">
                    <div className="companies__logo">
                        <img src={CompaniesLogo} alt="asd"></img>
                    </div>   
                    <div className="companies__logo">
                        <img src={CompaniesLogo} alt="asd"></img>
                    </div> 
                </div>
                <div className="companies__logo logo__centre">
                    <img src={CompaniesLogo} alt="asd"></img>
                </div>
                <div className="companies__right">
                    <div className="companies__logo">
                        <img src={CompaniesLogo} alt="asd"></img>
                    </div>
                    <div className="companies__logo">
                        <img src={CompaniesLogo} alt="asd"></img>
                    </div>
                </div>
            </div>
            <div className="companies__hand">
                <img src={CompaniesHand} alt="css"></img>
            </div>
        </div>
    )
}

export default Companies