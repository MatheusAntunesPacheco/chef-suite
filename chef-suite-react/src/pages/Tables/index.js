import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Box, Grid } from '@mui/material';

import NewTableForm from "./NewTableForm";

import BffService from '../../services/BffService';

const TableList = lazy(() => import('./TableList'));

export default function TablesPage({openSnackBar}){
    const [tablesList, setTablesList] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                console.log("Consultando API");
                const data = await BffService.getTableList();
                console.log("Retorno API: " + data);
                setTablesList(data);
            }
            catch(error){
                console.log("Error on call API: " + error);
            }
        }

        fetchData();
    }, []);

    function addNewTable(newTableId, newTableSize) {
        setTablesList([...tablesList, { id: newTableId, size: newTableSize }]);
        openSnackBar('Table ' + newTableId + ' registered successfully', 'success');
    }

    function removeTable(tableId) {
        setTablesList(t => t.filter(table => table.id !== tableId));
        openSnackBar('Table ' + tableId + ' successfully removed', 'success');
    }

    function validateNewTable(newTableId) {
        if (tablesList.some(table => table.id === newTableId)){
            openSnackBar('Already existing Table ' + newTableId, 'error');
            return false;
        }
        
        return true;
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1}/>
                <Grid item xs={3}>
                    <NewTableForm addNewTable={addNewTable} validateNewTable={validateNewTable}/>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={6}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TableList tablesList={tablesList} removeTable={removeTable} />
                    </Suspense>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Box>
    );
}