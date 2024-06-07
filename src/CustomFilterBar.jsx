import React from 'react';
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { Button } from '@mui/material';

function CustomFilerbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <Button
        color="primary"
        variant="contained"
        style={{ marginLeft: 'auto' }}
        onClick={() => alert('Hey i am alert')}
      >
        Alert
      </Button>
    </GridToolbarContainer>
  );
}

export default CustomFilerbar;
