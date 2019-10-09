import dataAPI  from '../data'

const logic = {

  retrieveAllUsers(){
    return ( async ()=>{
      const brastlewark = await dataAPI.retrieveAllUsers()
      return brastlewark
    })()
  },

  filterUser(query, users){
      const brastlewark = users.filter(user => {
        const { name } = user 
        return name.toUpperCase().includes(query.toUpperCase())
      })

      return brastlewark
  },

  userByName(userName, users){
      const user = users.find(user => {
        return user.name == userName
      })

      return user
  },

  userById(userId, users){
      const user = users.find(user => {
        return user.id == userId
      })

      return user
  },

  userByProfession(profession, users){
    const usersProfessionList = users.filter( user => {user.professions.find( proff => proff ===profession)})
    return usersProfessionList
  }

}

export default logic