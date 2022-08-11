import React from 'react';
import './Systems.css';
import EcoImg from "../../assets/Group 1.png"

const Systems = () => {
  return (
     <div className='item_container'>
        <div className="eco_haru">
            <h2>ЭКО система <br /> HARU</h2>
            <img src={EcoImg} alt="" />
        </div>
        <div className='item_systems'>
        <h1>Наши клиенты доверяют нам.</h1>
        <div className="stats">
            <div className="numbers">
                <span>10</span>
                <span>Наши проекты</span>
            </div>
            <div className="numbers">
                <span>20</span>
                <span>Наша команда</span>
            </div>
            <div className="numbers">
                <span>23</span>
                <span>Довольных клиентов</span>
            </div>
        </div>
    </div>
     </div>
  )
}

export default Systems