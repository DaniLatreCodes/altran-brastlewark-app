import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import logic from "../../logic/index";
import "./index.sass";

function Detail({ history, match, location, userList }) {
  const [user, setUser] = useState();
  useEffect(() => {
    if (userList) {
      const { params: { id } } = match;
      const userFromDetail = logic.userById(id, userList);

      setUser(userFromDetail);
    }
  }, [userList, location.pathname]);

  function handleGoToFriend(name) {
    const user = logic.userByName(name, userList);
    history.push(`/detail/${user.id}`);
  }


  return (
    <>
      <section className='container'>
        {user && (
          <article
            className='user-detail'
            style={{ backgroundColor: `${user.hair_color.trim().toLowerCase()}` }}>
            <header>
              <section>
                <div
                  className='user-img'
                  style={{ backgroundImage: `url(${user.thumbnail})` }}></div>
              </section>
              <section className='user-nick'>
                <p>{user.name}</p>
              </section>
            </header>

              <section className="user_data">
                <div className='user_basic_data'>
                    <p>Age: &nbsp;{`${user.age}`}</p>
                    <p>Weight: &nbsp;{user.weight}</p>
                    <p>Height: &nbsp; {user.height}</p>
                    <p>Hair color: &nbsp; {user.hair_color}</p>
                </div>
              </section>
              <section className='social_info'>
              <section>
                <label>Professions</label>
                <ul className='user_properties'>
                  {user.professions.map(profession => {
                    return <li>{profession}</li>;
                  })}
                </ul>
              </section>
              <section>
                <label>Friends</label>
                <ul className='user_properties user_friends'>
                  {user.friends.map(friend => {
                    return <li onClick={() => handleGoToFriend(friend)}>{friend}</li>;
                  })}
                </ul>
              </section>
            </section>
          </article>
        )}
      </section>
    </>
  );
}

export default withRouter(Detail);
