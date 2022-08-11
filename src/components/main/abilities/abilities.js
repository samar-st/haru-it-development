import React from 'react';
import './abilities.css'


const Abilities = () => {
    return(
        <div className='abilities'>
            <h2>Наши способности</h2>
            <div className='container abilities__wrapper'>
                <div className='abilities__item'>
                    <div className='abilities__round'></div>
                    <div className='abilities__text-wrapper'>
                        <h3>Connect your wallet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='abilities__tringle'></div>
                </div>
                <div className='abilities__item'>
                    <div className='abilities__round'></div>
                    <div className='abilities__text-wrapper'>
                        <h3>Connect your wallet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='abilities__tringle'></div>
                </div>
                <div className='abilities__item'>
                    <div className='abilities__round'></div>
                    <div className='abilities__text-wrapper'>
                        <h3>Connect your wallet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='abilities__tringle'></div>
                </div>
            </div>
        </div>
    )
}

export default Abilities