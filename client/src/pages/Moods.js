import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Moods = () => {
    const { loading, data } = useQuery(QUERY_ME) 
    console.log(data)
    if(loading) {
        return (<h1 className="display-4">loading</h1>)
    }
    return (
        <body>
            <div className="container">
            <h2 className="display-5 text-center text-dark user-title">Moods</h2>
            {data.me.moods.map(mood =>(
                <div className="row">
                    <div className="col-2" style={{backgroundColor:mood.moodColor}}></div>
                    <div className="col-4">{mood.date}</div>
                    <div className="col-6">{mood.description}</div>
                 </div>   
            ))}
            </div>
        </body>
    )
}

export default Moods;