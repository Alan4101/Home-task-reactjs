import { React, useEffect, useState } from "react";
import { getAllItems } from "../api/apiServise";
import StyledTable from "../components/UI/Table/StyledTable";
import config from "../config";

const Members = () => {
  // const [error, setError] = useState(null);
  // const [isLoad, setIsLoaded] = useState(false);
  const [members, setMembers] = useState([])

  const [membersHeader, setMembersHeader] = useState([
    "№",
    "First name",
    "Last name",
    "Email",
    "Team",
  ])

  useEffect(() => {
    const get = async () => {
      const url = `${config.url}/members`
      const data = await getAllItems(url)
      setMembers(data)
    }
    get()
  }, [])
  return (
    <div className="container__member">
      <div className="container-title">
        <h1 className="head__title">Members</h1>
      </div>
      <div className="container__table">
        <StyledTable
          type="members"
          tableHeader={membersHeader}
          data={members}
        ></StyledTable>
      </div>
    </div>
  )
}
export default Members
