import React , { useState, useEffect } from 'react'
import logic from '../../logic/index'
import './index.sass'


function UserCard({user, onDetail}){

  return(
    <> 
      <article className="user_card" style={
        {backgroundColor: `${user.hair_color.trim().toLowerCase()}`}} >
        <header onClick={() => onDetail(user.id)}>
          <section className="wrap">
            <div className='user-img' style={{backgroundImage: `url(${user.thumbnail})`}}></div>
          </section>
          <section className="user-name wrap">
            <p>{user.name}</p>
          </section>
        </header>
        <section>
          <ul className="user_info">
            <li>Age: &nbsp;{`${user.age}`}</li>
            <li>Weight: &nbsp;{user.weight}</li>
            <li>Height: &nbsp; {user.height}</li>
            <li>Hair color: &nbsp; {user.hair_color}</li>
          </ul>
        </section>

      </article>

    </>
  )

}

export default UserCard