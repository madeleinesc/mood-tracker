import React from 'react';

import moment from 'moment'
import Auth from '../utils/auth';

const Welcome = () => {

    return (
        <body>
            <div className="container">
                <h2 className="display-5 text-center text-dark user-title">Hi <span> {Auth.getProfile().data.username}</span>, how are you feeling today?</h2>
                <p className="lead text-muted text-center">{moment().format("Do MMMM YYYY")}





10:40
 </p>


                <p className="lead text-center pt-3">Select the colour that best represents your mood:</p>
                <div className="container radioContainer ">
                    <div className="row">
                        <div className="col-4 radioBlock happy">Happy</div>
                    </div>
                    <div className="row">
                        <div className="col-4 radioBlock joyful">Joyful</div>
                    </div>
                    <div className="row">
                        <div className="col-4 radioBlock Neutral">Neutral</div>
                    </div>
                    <div className="row">
                        <div className="col-4 radioBlock Angry">Angry</div>
                    </div>
                    <div className="row">
                        <div className="col-4 radioBlock Sad">Sad</div>
                    </div>
                    <div className="row">
                        <div className="col-4 radioBlock Depressed">Depressed</div>
                    </div>

                

                </div>

                <div class="text-center sign-btn">
            <button type="button" class="btn btn-dark">Submit</button> 
          </div>

                

                







            </div>







        </body>
    );
};

export default Welcome;