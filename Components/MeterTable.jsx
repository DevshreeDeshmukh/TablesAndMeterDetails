import React from 'react';
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
export const MeterTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
    <table className="table">
      <thead>
              <tr>
                  <th>Zones</th>
                  <th>kWh</th>
                  <th> MD kW</th>
                  <th>kVAH</th>
                  <th> kVA MD</th>
                  <th>RkVAH</th>
                  <th>Actions</th>
              </tr>
      </thead>
      <tbody>
          {
              rows.map((row,idx)=>{
                  return <tr key={idx}>
                      <td className="expand">{row.zonename}</td>
                      <td>{row.kWh}</td>
                      <td>{row.MD_kW}</td>
                      <td >{row.kVAH}</td>
                      <td>{row.kVA_MD}</td>
                      <td>{row.RkVAH}</td>
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
    </table></div>
  )
}
