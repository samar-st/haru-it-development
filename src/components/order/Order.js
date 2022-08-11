import React from 'react';
import './Order.css';
import { IoIosArrowDown } from 'react-icons/io';

const Order = () => {
  return (
    <div className='order_item'>
        <div className='inside_item'>
        <h2 className='text_main'>Заказать проект</h2>
        <p className='content_item'>Наш Мененджер с вами свяжеться в течении 2х часов. 
            Ну а наша команда справиться с любыми сложностями</p>
        <div className='form_item'>
            <input type="text" className='input1'
            placeholder='Full Name' Full Name />
            <input type="tel" className='input1'
            placeholder='Phone' required />
            <input type="text" className='input1'
            placeholder='Info' required />
        </div>
        <input type="submit" className='sending' />
        </div>
    </div>
  )
}

export default Order