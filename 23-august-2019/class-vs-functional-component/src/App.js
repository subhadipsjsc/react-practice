import React from 'react';
import Users_rcc from './components/User_class_coponent';
import Users_rfc from './components/User_functional_component'

function App() {
  return (
    <div className="App">
      <Users_rcc></Users_rcc>
      <Users_rfc></Users_rfc>
    </div>
  );
}

export default App;
