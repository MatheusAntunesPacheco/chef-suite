import * as React from 'react';
import AppBarMenu from './components/AppBarMenu';

function handleChangePage(page){
  alert(page);
}

function App() {

  return (
    <>
      <AppBarMenu onClickMenuButton={handleChangePage} />
    </>
  );
}
export default App;
