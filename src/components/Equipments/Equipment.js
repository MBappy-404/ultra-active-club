import React from 'react';
import './Equipment.css'


const Equipment = (props) => {
     const { title, time, img, description, age } = props.equipment;
     return (

      
        
          <div className=''>
            <div className="card" style={{ width: "18rem" }}>
                <img className='rounded m-3 mb-0 image' src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0,100)}</p>
                    <h6>For Age {age}</h6>
                    <h6>Time Required {time} sec</h6>
                    <button className='btn btn-primary'>Add to list</button>
                </div>
            </div>
        </div>

     );
};

export default Equipment;