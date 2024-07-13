import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const tablesData = [
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

function groupTablesBySize(tablesList){
    let groupedTable = tablesList.reduce((tablesBySize, { size, id }) => {
        if (!tablesBySize[size])
            tablesBySize[size] = [];

        tablesBySize[size].push(id);
        return tablesBySize;
    }, {});

    var result = [];
    for (var val in groupedTable){
        result.push( {
            size: val,
            tables: groupedTable[val]
        } )
    }

    return result;
}
  
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell align="right">Tables for {row.size} people</TableCell>
            <TableCell align="right">{row.tables.length} tables</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                    Tables List
                </Typography>
                <Table size="small" aria-label="purchases">
                    <TableHead>
                    <TableRow>
                        <TableCell>Table id</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.tables.map((table) => (
                            <TableRow key={table}>
                                <TableCell component="th" scope="row">
                                    Table nº {table}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </Box>
            </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
}

function TableList(){
    const [tablesList, setTablesList] = useState(tablesData);

    var groupTables = groupTablesBySize(tablesList);
    console.log(groupTables);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                <TableCell />
                <TableCell align="right">Table size</TableCell>
                <TableCell align="right">Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    groupTables.map((row) => (
                    <Row key={row.size} row={row} />
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      );
}

export default TableList;