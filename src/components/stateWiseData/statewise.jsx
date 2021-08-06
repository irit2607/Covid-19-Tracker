import React, { useEffect, useState } from 'react'

const Statewise = () => {

    const [data, setData]=useState([]);
    
    const getCovidData = async()=>{    // using async coz we r using api to fetch data
         const res = await fetch('https://api.covid19india.org/data.json');    // using await coz in future we dont know do we get data or not so we r waiting
         const actualData = await res.json();
         console.log(actualData.statewise);
         setData(actualData.statewise);
        }

    useEffect(()=>{                  // using useEffect coz we want our data to be refresh only one time 
        getCovidData();              //at starting thats why we are using empty array[]
    }, []);

  return (
    <div className="container-fluid mt-5">
    <div className="main-heading">
        <h2 style={{textAlign:"center"}}> Covid-19 Tracker</h2>
    </div>
      <div className="table-responsive">
          <table className="table table-hover">
              <thead className="theme-dark">
                  <tr>
                      <th>State</th>
                      <th>Confirmed</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                      <th>Active</th>
                      <th>Updated</th>
                  </tr>
              </thead>
              <tbody>
              
              {
                  data.map((currElement, index)=>{
                      return(
                        <tr key={index}>
                        <th>{currElement.state}</th>
                      <th>{currElement.confirmed}</th>
                      <th>{currElement.recovered}</th>
                      <th>{currElement.deaths}</th>
                      <th>{currElement.active}</th>
                      <th>{currElement.lastupdatedtime}</th>
                  </tr>
                      )
                  })
              }
                      
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Statewise
