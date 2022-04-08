import React from "react";
import Items from "../Items.jsx/Items";

const ListItem = ({data}) =>{
  return(
    <div className="main__wrapper">
      <Items data={data}/>
    </div>
  )
}
export default ListItem;