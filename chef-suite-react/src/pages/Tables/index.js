import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Box, Grid } from '@mui/material';

import NewTableForm from "./NewTableForm";
const TableList = lazy(() => import('./TableList'));

const tables = [
    { id: '1', size: '4'},
    { id: '2', size: '2'},
    { id: '3', size: '6'},
    { id: '4', size: '4'},
    { id: '5', size: '6'},
    { id: '6', size: '10'},
    { id: '7', size: '4'},
    { id: '8', size: '4'},
    { id: '9', size: '4'},
    { id: '10', size: '2'}
]

export default function TablesPage({openSnackBar}){
    const [tablesList, setTablesList] = useState(null);

    useEffect(() => {
        setTablesList(tables);
    });

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