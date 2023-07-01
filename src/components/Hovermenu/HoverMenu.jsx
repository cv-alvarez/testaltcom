import React from 'react'
import './index.css'
import data from '../../assets/data/categorias.json'
import { Link } from 'react-router-dom'


const HoverMenu = () => {
  const {categorias}= data
  console.log(categorias);
  return (
    <div className='hovermenu'>
      
        <span className='hovermenu_span' style ={{"padding" : "5px 32px"}}>Todas las categorías</span>
       <ul>
        {
          categorias.map((category=>
            (
            <li key={category.id} className='li_map'><Link to={`catalog/${category?.url}`} className='main_menus'>{category?.nombre}</Link></li>
            )))
        }
       </ul>
    </div>

  )
}

export default HoverMenu