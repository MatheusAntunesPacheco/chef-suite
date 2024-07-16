import React, { useState } from 'react';
import { Box, Grid, Snackbar, Alert } from '@mui/material';

import AppBarComponent from './components/AppBarComponent';

import SalesPage from './pages/SalesPage';
import TablesPage from './pages/Tables/index';
import OrdersPage from './pages/OrdersPage';
import MenuPage from './pages/MenuPage';

function renderPage(page, openSnackBar){
  switch (page){
    case 'Sales': return <SalesPage></SalesPage>;
    case 'Tables': return <TablesPage openSnackBar={openSnackBar}></TablesPage>
    case 'Menu': return <MenuPage></MenuPage>;
    case 'Orders': return <OrdersPage></OrdersPage>;
    default: return <SalesPage></SalesPage>;
  }
}

function App() {
  const [activePage, setActivePage] = useState('Sales');
  const [snack, setSnack] = useState({ open: false, message: '', type: '' });

  const pages = ["Tables", "Menu", "Orders", "Sales"];

  const openSnackBar = (messageSnackBar, typeSnackBar) => {
      setSnack({ open: true, message: messageSnackBar, type: typeSnackBar });
  };

  const closeSnackBar = () => {
      setSnack({ open: false, message: '', type: '' });
  };

  function handleChangePage(page){
    setActivePage(page);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <AppBarComponent onClickMenuButton={handleChangePage} pages={pages} />
            </Grid>
            <Grid item xs={12}>
              {renderPage(activePage, openSnackBar)}
            </Grid>
        </Grid>
      </Box>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={snack.open} autoHideDuration={2000} onClose={closeSnackBar}>
          <Alert
              onClose={closeSnackBar}
              severity={snack.type}
              variant="filled"
              sx={{ width: '100%' }}
          >
              {snack.message}
          </Alert>
      </Snackbar>
    </>
  );
}
export default App;
