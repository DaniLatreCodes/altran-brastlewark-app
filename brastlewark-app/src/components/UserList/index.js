import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import logic from "../../logic/index";
import UserCart from "../UserCard/index";
import Loading from "../Loading/index";
import "./index.sass";

function UserList({ filteredList, onDetail }) {
  return (
    <>
      <section className='user_list'>
        {filteredList ? 
          (filteredList.length ? 
            filteredList.map(user => {
              return <UserCart key={user.id} user={user} onDetail={onDetail}/>;
            })
          : 
          <span className="no_results">No results</span>)
        :
        <Loading isLoading={!filteredList} />}
      </section>
    </>
  );
}

export default withRouter(UserList);
