import React from 'react';
import { Box, Collapse, IconButton, Typography, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';

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
    const { row, removeTable } = props;
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
            <TableCell align="center">Tables for {row.size} people</TableCell>
            <TableCell align="center">{row.tables.length} tables</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} align="center">
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        List of Tables
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableBody>
                            {row.tables.map((table) => (
                                <TableRow key={table}>
                                    <TableCell component="th" scope="row" align="center">
                                        Table {table}
                                    </TableCell>
                                    <TableCell component="th" scope="row" align="center">
                                        <IconButton aria-label="delete" onClick={() => removeTable(table)}><DeleteIcon /></IconButton>
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

export default function TableList({tablesList, removeTable}){

    var groupTables = groupTablesBySize(tablesList);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell align="center">Table size</TableCell>
                    <TableCell align="center">Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    groupTables.map((row) => (
                    <Row key={row.size} row={row} removeTable={removeTable} />
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      );
}