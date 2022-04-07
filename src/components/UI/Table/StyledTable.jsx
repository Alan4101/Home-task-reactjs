import { React } from "react";

const StyledTable = ({ data }) => {
  const s = JSON.parse(data)
  console.log( 'data', s)
  
  return (
    <table>
    <thead>
        <tr>
        <th>№</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Team</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            {/* {
              data.map(item=>(
              <tr>
                <td>{item.first_name}</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            ))
            } */}
        </tr> 
    </tbody>
</table>
    
        
        
        
 
  );
};
export default StyledTable;
