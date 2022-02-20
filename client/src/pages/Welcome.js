import React from 'react';

import moment from 'moment'
import Auth from '../utils/auth';

const Welcome = () => {

    return (
        <body>
            <div className="container">
                <h2 className="display-5 text-center text-dark user-title">Hi <span> {Auth.getProfile().data.username}</span>, how are you feeling today?</h2>
                <p className="lead text-muted text-center">{moment().format("Do MMMM YYYY")}</p>

                <p className="lead text-center pt-3">Select the colour that best represents your mood:</p>
                <div className="container radioContainer " >
                    <div className="row" >
                        <div className="col-6 col-sm-4 ">
                            <div className='radioBlock happy'>
                                Happy
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className='radioBlock joyful'>
                                Joyful
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className='radioBlock neutral'>
                                Neutral
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className='radioBlock angry'>
                                angry
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className='radioBlock sad'>
                                Sad
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 ">
                            <div className='radioBlock depressed'>
                                Depressed
                            </div>
                        </div>
                    </div>


                </div>

                </div>

                
                <div class="text-center sign-btn">
            <button type="button" class="btn btn-dark">Submit</button> 
          </div>

                

                







            







        </body>
    );
};

export default Welcome;