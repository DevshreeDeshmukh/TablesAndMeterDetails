import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
                <tr>
                    <th>Equipment Name</th>
                    <th>Quantity</th>
                    <th>Capacity</th>
                    <th>Measurment Unit</th>
                    <th>Total Load</th>
                    <th>Load in KW</th>
                    <th>Actions</th>
                </tr>
        </thead>
        <tbody>
            {
                rows.map((row,idx)=>{
                    return <tr key={idx}>
                        <td className="expand">{row.eqname}</td>
                        <td>{row.quantity}</td>
                        <td>{row.capacity}</td>
                        <td >{row.munit}</td>
                        <td>{row.totLoad}</td>
                        <td>{row.loadKW}</td>
                        <td >
                        <span className='actions'>
            
                            <BsFillTrashFill className='delete-btn' onClick={()=>deleteRow(idx)}/>
                    
                            <BsFillPencilFill className='edit-btn' onClick={()=>editRow(idx)}/>
                        </span>
                    </td>
                    </tr>
                })
            }   
        </tbody>
      </table>
    </div>
  );
};
