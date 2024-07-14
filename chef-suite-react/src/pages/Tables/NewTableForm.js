import React, { useState, memo } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

const NewTableForm = memo(({validateNewTable, addNewTable}) => {
    const [formData, setFormData] = useState({ newTable_tableId: '', newTable_tableSize: '' });

    const handleClearForm = () => {
        setFormData({
            newTable_tableId: '',
            newTable_tableSize: ''
        });
    };

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmitButton = () => {

        if (!validateNewTable(formData.newTable_tableId))
            return;

        addNewTable(formData.newTable_tableId, formData.newTable_tableSize);
        handleClearForm();
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="newTable_tableId"
                            name="newTable_tableId"
                            label="Table ID"
                            variant="standard"
                            value={formData.newTable_tableId}
                            onChange={handleChangeForm}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="newTable_tableSize"
                            name="newTable_tableSize"
                            label="Table Size"
                            type="number"
                            variant="standard"
                            value={formData.newTable_tableSize}
                            onChange={handleChangeForm}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
                        <Grid item>
                            <Button 
                                type="button" 
                                variant="outlined" 
                                startIcon={<ClearAllRoundedIcon />} 
                                onClick={handleClearForm}
                                disabled={formData.newTable_tableSize==='' && formData.newTable_tableId===''}>
                                
                                Clear
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                type="button" 
                                variant="contained" 
                                startIcon={<DoneOutlineRoundedIcon />} 
                                onClick={handleSubmitButton}
                                disabled={formData.newTable_tableSize==='' || formData.newTable_tableId===''}>
                                    
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
});

export default NewTableForm;