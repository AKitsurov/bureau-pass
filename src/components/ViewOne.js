import React from 'react'


export const ViewOne = ({requests,id,deleteBook}) => {
    
    return (
        
        <tr key={requests[id].id}>
            <td>{requests[id].id}</td>
            <td>{requests[id].name}</td>
            <td>{requests[id].justification}</td>
			<td>{requests[id].condition}</td>
            <td>{requests[id].pass}</td>
			<td className='delete-btn' onClick={()=>deleteBook(requests[id].id)}>
			<button></button>
            </td> 
        </tr>            
    
)
}