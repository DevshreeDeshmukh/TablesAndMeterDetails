import React from 'react'
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
export const CurrentVoltTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
    <table className="table">
      <thead>
              <tr>
                  <th>Current and Volt measurement</th>
                  <th> R phase</th>
                  <th> Y phase</th>
                  <th>B Phase</th>
                  <th>Actions</th>
              </tr>
      </thead>
      <tbody>
          {
              rows.map((row,idx)=>{
                  return <tr key={idx}>
                      <td className="expand">{row.CVmeasure}</td>
                      <td>{row.rPhase}</td>
                      <td>{row.yPhase}</td>
                      <td >{row.bPhase}</td>
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
