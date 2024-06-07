import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import './App.css';
import CustomFilterBar from './CustomFilterBar';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'pic',
    headerName: 'Pic',
    type: 'number',
    width: 110,
    renderCell: (params) => (
      <img
        src={params.row.url}
        alt="dog"
        style={{ width: '100%', height: 'auto' }}
      />
    ),
  },
  { field: 'width', headerName: 'Width', width: 130 },
  { field: 'height', headerName: 'Height', width: 130 },
];

export default function HomeScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api.thedogapi.com/v1/images/search?limit=10'
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  console.log(data);
  return (
    <div style={{ height: 400, width: '60%', marginLeft: '20%', marginTop: '10%' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold',
          fontSize: '2rem'
        }}
      >
        View Dog Data
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        slots={{
          toolbar: CustomFilterBar, // Use the custom toolbar
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

