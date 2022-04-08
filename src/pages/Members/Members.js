import { React, useEffect, useState } from "react";
import { getAllItems } from "../../api/apiServise";
import Loader from "../../components/UI/Loader/Loader";
import Message from "../../components/UI/Message/Message";
import StyledTable from "../../components/UI/Table/StyledTable";
import config from "../../config";
import { useHttp } from "./../../hooks/useHttp";

const Members = () => {
  const { loading, error, request, clearError } = useHttp();
  const [members, setMembers] = useState([]);
  const [membersHead, setMembersHead] = useState({
    first_name: "First name",
    last_name: "Last name",
    email: "Email",
    team: "Team",
  });

  useEffect(() => {
    // getMembers();
  console.log(members);

  }, []);

  const getMembers = async () => {
    const url = `${config.url}/members`;
    const data = await request(url, "get");
    setMembers(data);
  };
 
  if (!error) {
    return (
      <>
        <Message>
          <p>Warrning! Can`t get data.</p>
        </Message>
        {/* <StyledTable tableHeader={membersHead}></StyledTable> */}
      </>
    );
  } else {
    if (loading) {
      return <Loader></Loader>;
    } else {
      
        return (
          <div className="container__member">
            <div className="container-title">
              <h1 className="head__title">Members</h1>
            </div>
            <div className="container__table">
              <StyledTable
                type="members"
                tableHeader={membersHead}
                data={members}
              ></StyledTable>
            </div>
          </div>
        
      );
    }
  }
};
export default Members;
