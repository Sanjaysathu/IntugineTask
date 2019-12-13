import React from 'react';
import './Status.css';

const Status = ({aws,carrier,source,dest,brand,start,end,status,p,selected}) =>{
    return(   
                <tr onClick={()=>selected(p)} >
                    <td>#{aws}</td>
                    <td>{carrier}</td>
                    <td>{source}</td>
                    <td>{dest}</td>
                    <td>{brand}</td>
                    <td>{start}</td>
                    <td>{end}</td>
                    <td>{status}</td>
                </tr>
                
    )
    }

export default Status;