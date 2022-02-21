import React, { useState } from 'react';

import moment from 'moment'
import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_MOOD } from '../utils/mutations';

const Welcome = () => {
    const [ selectedMood, setSelectedMood ] = useState ("")
    const [ description, setDescription ] = useState ("")

    const [addMood, { error, data }] = useMutation(ADD_MOOD);
    const handleSubmit = async () => {
        console.log(selectedMood)
        console.log(description) 
        try {
            const { data } = await addMood({
              variables: { moodColor:selectedMood, description },
            });
      
            console.log(data)
          } catch (e) {
            console.error(e);
          }
    }

    return (
        <body>
            <div className="container">
                <h2 className="display-5 text-center text-dark user-title">Hi <span> {Auth.getProfile().data.username}</span>, how are you feeling today?</h2>
                <p className="lead text-muted text-center">{moment().format("Do MMMM YYYY")}</p>

                <p className="lead text-center pt-3">Select the colour that best represents your mood:</p>
                <div className="container radioContainer " >
                    <div className="row" >
                        <div className="col-6 col-sm-4 ">
                            <div className={`radioBlock happy ${selectedMood==="#dcb084"?"selected":""}`} onClick={ () => setSelectedMood("#dcb084")}>
                                Happy
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className={`radioBlock joyful ${selectedMood==="#a19f89"?"selected":""}`} onClick={ () => setSelectedMood("#a19f89")}>
                                Joyful
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className={`radioBlock neutral ${selectedMood==="#c9dccf"?"selected":""}`} onClick={ () => setSelectedMood("#c9dccf")}>
                                Neutral
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className={`radioBlock angry ${selectedMood==="#903729"?"selected":""}`} onClick={ () => setSelectedMood("#903729")}>
                                Angry
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className={`radioBlock sad ${selectedMood==="#729598"?"selected":""}`} onClick={ () => setSelectedMood("#729598")}>
                                Sad
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className={`radioBlock depressed ${selectedMood==="#4f3e62"?"selected":""}`} onClick={ () => setSelectedMood("#4f3e62")}>
                                Depressed
                            </div>
                        </div>
                    </div>


                </div>


                <form className="desc-padding">
                    <textarea className="px-3" value={description} onChange={ (event) => setDescription(event.target.value) }></textarea>
                </form>

            </div>


            <div class="text-center sign-btn">
                <button type="button" class="btn btn-dark" onClick={handleSubmit}>Submit</button>
            </div>


        </body>
    );
};

export default Welcome;