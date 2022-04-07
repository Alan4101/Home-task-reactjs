import { React , useEffect, useState} from 'react';
import { getAllItems } from '../../api/apiServise';
import StyledTable from '../../components/UI/Table/StyledTable';
import config from '../../config';

const Members = () =>{
  const [members, setMembers] = useState({});
  const [membersHead, setMembersHead] = useState({
    first_name: 'First name',
    last_name : 'Last name',
    email     : 'Email',
    team      : 'Team',
  })

  useEffect(()=>{
    const get = async()=>{
      const url = `${config.url}/members`
      const data = await getAllItems(url);
      setMembers({...data})
    }
    get()
  },[])

  return (
    <>
      <StyledTable tableHeader={membersHead} data={members}></StyledTable>
    </>
  )
}
export default Members;