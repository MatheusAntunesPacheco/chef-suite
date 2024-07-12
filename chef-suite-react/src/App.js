import React, { useState } from 'react';

import AppBarComponent from './components/AppBarComponent';

import SalesPage from './pages/SalesPage';
import TablesPage from './pages/TablesPage';
import OrdersPage from './pages/OrdersPage';
import MenuPage from './pages/MenuPage';

function renderPage(page){
  switch (page){
    case 'Sales': return <SalesPage></SalesPage>;
    case 'Tables': return <TablesPage></TablesPage>
    case 'Menu': return <MenuPage></MenuPage>;
    case 'Orders': return <OrdersPage></OrdersPage>;
    default: return <SalesPage></SalesPage>;
  }
}

function App() {
  const [activePage, setActivePage] = useState('Sales');
  const pages = ["Tables", "Menu", "Orders", "Sales"];

  function handleChangePage(page){
    setActivePage(page);
  }

  return (
    <>
      <AppBarComponent onClickMenuButton={handleChangePage} pages={pages} />
      <div>{renderPage(activePage)}</div>
    </>
  );
}
export default App;
