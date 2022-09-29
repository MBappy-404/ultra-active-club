import React, { useEffect, useState } from 'react';
import Equipment from '../Equipments/Equipment';
import logo from '../../images/logo.png';
import './Exercise.css';
import Activities from '../Activities/Activities';


const Exercise = () => {

     const [equipments, setEquipment] = useState([]);
     useEffect(() => {
          fetch("data.json")
               .then(response => response.json())
               .then(data => setEquipment(data))
     }, []);

     const handleCart = (selectedProduct) => {
          console.log(selectedProduct);
          
     }

     return (

          <div className="exercise-container">
               <div className='equipment-container' >
                    <div className="logo pb-4">
                         <img src={logo} alt="logo" height="75px" />
                    </div>
                    <div className='title pb-3'>
                         <h4>Select today’s exercise</h4>
                    </div>

                    <div className=" equipments ">
                         {
                              equipments.map(equipment => <Equipment 
                                   equipment={equipment}
                                   handleCart={handleCart}
                                   ></Equipment>)
                         }

                    </div>

               </div>

               <div className="activities">
                    <Activities></Activities>
               </div>
          </div>

     );
};

export default Exercise;