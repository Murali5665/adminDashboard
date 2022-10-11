import React, { useState } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import {userRows} from '../dummydata.js'
import { DeleteOutline } from '@mui/icons-material';
import{ Link } from 'react-router-dom'
import './userList.css'

export default function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', 
        headerName: 'User', 
        width: 160,
        renderCell:(paramas) =>{
            return(
                <div className="userListUser">
                    <img className="userListImg" src={paramas.row.avatar} alt="" />
                    {paramas.row.username}
                </div>
            )
        }
    },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'status', headerName: 'Status', width: 120 },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 200,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
            return (
                <>
                <Link to={`/user/${params.row.id}`} className='link'>
                    <button className="userListEdit"> Edit </button>
                </Link>
                <DeleteOutline className='userListDelete' 
                 onClick={() => handleDelete(params.row.id)}
                />

                </>
            )
          }
        }
      ];
      


  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

 
