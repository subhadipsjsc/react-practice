import React from 'react';
import UsersClassComponent from './components/User_class_coponent';
import UsersFunctionalComponent from './components/User_functional_component'

function App() {
  return (
    <div className="App">
      ----------------------------------------------------------------------<br/>
      "REACT CLASS COMPONENT"<br/>
      ----------------------------------------------------------------------<br/>
      <UsersClassComponent name="rfc user 3"></UsersClassComponent>
      <UsersClassComponent> rcc user 2</UsersClassComponent>
      <UsersClassComponent> rcc user 3</UsersClassComponent>
      <br/>
      ----------------------------------------------------------------------<br/>
      "REACT FUNCTIONAL COMPONENT" <br/>
      ----------------------------------------------------------------------<br/>
     
      <UsersFunctionalComponent> rfc user 1</UsersFunctionalComponent>
      <UsersFunctionalComponent> rfc user 2</UsersFunctionalComponent>
      <UsersFunctionalComponent name="rfc user 3"> </UsersFunctionalComponent>
    </div>
  );
}

export default App;
