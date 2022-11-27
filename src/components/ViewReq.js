import React from 'react'


export const ViewReq = ({requests,deleteBook}) => {
    
    return requests.map(request=>(
        
        <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.name}</td>
            <td>{request.justification}</td>
			<td>{request.condition}</td>
            <td>{request.pass}</td>
			<td className='delete-btn' onClick={()=>deleteBook(request.id)}>
			<button></button>
            </td> 
        </tr>            
    
))
}