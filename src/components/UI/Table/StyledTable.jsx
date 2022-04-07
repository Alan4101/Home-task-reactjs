import { React } from "react";
import TableHeader from "./TableHeader";
import styles from './StyleTable.module.css';

const StyledTable = ({ data, tableHeader, type}) => {
  return (
    <table className={styles.tableWrapper}>
      <thead className={styles.tableHeader}>
        <TableHeader header={tableHeader}></TableHeader>
      </thead>
      <tbody>

        {
          type === 'members'?
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.team.name}</td>
              </tr>
            )): null
       }
      </tbody>
    </table>
  )
}
export default StyledTable
