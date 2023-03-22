import { useState , useEffect} from "react";
// We must import axios in each component we want to use it
import axios from 'axios';
import CreatureForm  from "./CreatureForm.jsx";

function CreatureList() {
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
    const [listOfCreatures, setListOfCreatures] = useState([]);
 

    const fetchCreatureList = () => {
        axios.get ('/creature').then((response) => {
            // * Update the array, React does the rest!
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in ${error}`);
            alert(`Something went wrong.`);
        })
    }
    //! vvvvv Dont do this!!! vvvv It may mess up Reacts timing
    // fetchCreatureList();
     useEffect(() => {
        //At this point, React is ready
        fetchCreatureList();
     }, []);

   
     // Empty array is important [] 
    //All components return what we want them to display
    return (
        <div>
            <CreatureForm 
            creatureName={creatureName}
            setCreatureName={setCreatureName}
            creatureOrigin={creatureOrigin}
            setCreatureOrigin={setCreatureOrigin}
            fetchCreatureList={fetchCreatureList}
            />

            <h2>Creature List</h2>
            <ul> 
                {
                    listOfCreatures.map((creature) => (
                        // What we want to render
                        <li key={creature.id}>
                        {creature.name} from {creature.origin}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

//All components must export

export default CreatureList;