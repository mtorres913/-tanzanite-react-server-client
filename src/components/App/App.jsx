// Source in our stylesheet
// 'import' is similar to 'require' on the server
import './App.css';
import { useState } from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Header from '../Header/Header.jsx';
import ClickCounter from '../ClickCounter/ClickCounter.jsx';
//App is a component
// useState updates the DOM when a variable changes
    // This looks like HTML but is really JSX create comp, put header into comp, 

  function App (){
    return (
    <div>
      {/** TODO:Create Header and ClickCounter components */}
 {/** Render our Creature List on the DOM */}
      <Header  />
      <ClickCounter />
      <CreatureList />
    </div>
    )
  }


export default App
