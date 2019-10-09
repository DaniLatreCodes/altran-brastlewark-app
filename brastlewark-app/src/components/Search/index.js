import React from "react";
import { withRouter } from "react-router-dom";
import "./index.sass";

import logic from "../../logic";

function Search({ search }) {

  function handleSearch(event) {
    event.preventDefault();
    const {target: { value: query }} = event
    search(query)
  }

  return (
    <>
      <div className='form'>
        <input type='text' name='name' autoComplete='off' onChange={handleSearch} required />
        <label for='name' class='label-name'>
          <span className='content-name'>Search</span>
        </label>
      </div>
    </>
  );
}

export default withRouter(Search);
