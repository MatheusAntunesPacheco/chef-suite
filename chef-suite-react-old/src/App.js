import * as React from 'react';
import AppBarMenu from './components/AppBarMenu';

function App() {

  function handleOnClickAppBarMenu(page){
    alert(page);
  }

  return (
    <>
      <AppBarMenu {...handleOnClickAppBarMenu}/>
    </>
  );
}
export default App;
