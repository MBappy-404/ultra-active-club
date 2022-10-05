import React from 'react';
 


const Equipment = (props) => {
     const { title, time, img, description, age } = props.equipment;
     return (

      
        
          <div className=''>
            <div className="card" style={{ width: "19rem" }}>
                <img className='rounded m-3 mb-0 image' src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0,100)}</p>
                    <h6>For Age: {age}</h6>
                    <h6>Time Required: {time} sec</h6>
                    <button onClick={()=> props.handleCart(props.equipment)} className='btn btn-primary mt-3'>Add to list</button>
                </div>
            </div>
        </div>

     );
};

export default Equipment;
