import React, { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom"
import {  withRouter } from "react-router-dom"
import './index.sass'
import UserList from './components/UserList'
import NavBar from './components/NabBar'
import Landing from './components/Landing/index'
import Detail from './components/Detail'
import logic from './logic'


function App({history}) {
  const [userList, setUserList] = useState()
  const [filteredList, setFilteredList] = useState()

  useEffect( () => {
    async function getAllUsers(){
      
      const allUsers = await logic.retrieveAllUsers()
      setUserList(allUsers)
      setFilteredList(allUsers)
    }
    getAllUsers()
  }, [])

  function handleSearch(query){
      const users = logic.filterUser(query, userList)
      setFilteredList(users)
  }

  function handleDetail(id){
    history.push(`/detail/${id}`)
  }


  return (
    <div className="App">
      <Switch>
        <div>
          <NavBar search={handleSearch}/>
          <Route  path='/' exact render= { ()=> <Landing/> }/> 
          <Route  path="/userList" render= { ()=> <UserList filteredList={filteredList} onDetail={handleDetail}/> }/> 
          <Route  path="/detail/:id" render= { ()=> <Detail userList={userList} /> }/> 
        </div>
      </Switch>
    </div>
  );
}

export default withRouter(App) 
