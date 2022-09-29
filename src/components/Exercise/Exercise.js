import React, { useEffect, useState } from 'react';
import Equipment from '../Equipments/Equipment';
import logo from '../../images/logo.png';
import './Exercise.css';
import Activities from '../Activities/Activities';


const Exercise = () => {

     const [equipments, setEquipment] = useState([]);
     const [exercise, setExercise] = useState([]);
     useEffect(() => {
          fetch("data.json")
               .then(response => response.json())
               .then(data => setEquipment(data))
     }, []);

     const handleCart = (equipments) => {
          // console.log(equipments);
          const newExercise = [...exercise, equipments];
          setExercise(newExercise);

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
                                   key={equipment.id}
                                   handleCart={handleCart}
                              ></Equipment>)
                         }

                    </div>

                    {/* blog  */}

                    <div className='mt-5 p-3'>
                         <h1 className='text-center text-primary '>Blog</h1>
                         <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                             <h4>How does React work?</h4>
                                        </button>
                                   </h2>
                                   <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                             <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                             <h4>What is the difference between props and state?</h4>
                                        </button>
                                   </h2>
                                   <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                             <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                             <h4>What else is the 'use effect' used for other than loading data from the api</h4>
                                        </button>
                                   </h2>
                                   <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                             <p> <strong>useEffect use cases</strong>: <br />
                                                  Running once on mount: fetch API data <br />
                                                  Running on state change: validating input field <br />
                                                  Running on state change: live filtering <br />
                                                  Running on state change: trigger animation on new array value <br />
                                                  Running on props change: update paragraph list on fetched API data update <br />
                                                  Running on props change: updating fetched API data to get BTC updated price</p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>

               </div>

               <div className="activities">
                    <Activities
                    
               exercise={exercise}

                    ></Activities>
               </div>
          </div>

     );
};

export default Exercise;