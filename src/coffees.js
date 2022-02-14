import React, {useState, useEffect} from "react";

function Coffees(){
    //create a state variable line 5
    const [coffeeList,setCoffeeList]=useState();
   //put sample API or "Call api" below always add [] either empty or w temp etc inside
    useEffect(() => {
        //fetch gets the code for hot coffee . then .then to get the data
        //react doesnt like empty arrays
        fetch('https://api.sampleapis.com/coffee/hot')
        .then(response =>response.json())
        .then(data => setCoffeeList(data))
        .catch(err =>console.error(err))
    }, [])
    return (
        //or a <div> whatever makes sense
        //take coffeelist and create ordered list using map
        <section className ="cofee-container" id="coffees">
        <h2>Coffee Recipes</h2>
        {/* do conditional rending before using .map */}
        {/* check in localhost mobile pic in console */}
        {!coffeeList
        ?<h3>loading...</h3>
        : <ol>{coffeeList.map(coffee =>{
            return <li key={coffee.id} >{coffee.title}</li>
        })}</ol>
         }
        {/* u use coffee.id from local host page in terminal console */}
        {/* there is no property map of undefined thats why we got error */}
        {/* we cant rendur before defining the data which is coffee */}
    
      
        </section>
    )
}


export default Coffees;