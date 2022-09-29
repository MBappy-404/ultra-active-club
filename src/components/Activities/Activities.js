import React from 'react';
import user from '../../images/user.jpg'

import './Activities.css'

const Activities = () => {
     return (
          <div>
               <div className="container ">

                    {/* user  */}
                    <div className="user d-flex m-2">
                         <div>
                              <img src={user} className="w-75 rounded  " alt="" />

                         </div>
                         <div className='align-self-center'>
                              <h5>M.Bappy</h5>
                              <p>Rajshahi,Bangladesh</p>
                         </div>
                    </div>

                    {/* user details  */}


                    <div className='user-details d-flex bg mt-4 justify-content-between p-3'>

                         <div>
                              <h5>75<small>kg</small></h5>
                              <p>Weight</p>
                         </div>
                         <div>
                              <h5>5.6</h5>
                              <p>Height</p>
                         </div>
                         <div>
                              <h5>22<small>Yrs</small></h5>
                              <p>Age</p>
                         </div>
                    </div>

                    {/* add a break */}

                    <div className='mt-3'>
                         <h5>Add A Break</h5>
                    </div>
                    <div className='break bg d-flex bg  justify-content-between p-3 mt-4'>

                         <div>
                              <button className='btn btn-light rounded-pill'>10s</button>
                         </div>
                         <div>
                         <button className='btn btn-light rounded-pill'>20s</button>
                         </div>
                         <div>
                         <button className='btn btn-light rounded-pill'>30s</button>
                         </div>
                         <div>
                         <button className='btn btn-light rounded-pill'>60s</button>
                         </div>

                    </div>

                    {/* Exercise Details  */}


                    {/* Exercise Time  */}
                    <div className='mt-5'>
                         <h5>Exercise Details</h5>
                    </div>
                    <div className='break bg  d-flex justify-content-between  p-4 mt-4'>
                         <div>
                              <h6>Exercise Time</h6>
                         </div>
                         <div>
                              <span>0sec</span>
                         </div>
                    
                    </div>

                    {/* break time  */}
                    <div className='break bg  d-flex justify-content-between  p-4 mt-3'>
                         <div>
                              <h6>Break time</h6>
                         </div>
                         <div>
                              <span>0sec</span>
                         </div>
                    
                    </div>


                    {/* Activity Completed  */}
                    <div className='mt-5 text-center'>
                    <button type="button" class="btn btn-primary w-100">Activity Completed</button>
                    </div>
               </div>

          </div>
     );
};

export default Activities;