
const validator = require('validator')
const axios = require('axios')


const  dataAPI =  {
  __urlAPI__: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',

  
  retrieveAllUsers(){
    validator.isURL(`${this.__urlAPI__}`)
    
    return ( async ()=> {
        const { data : { Brastlewark }} = await axios.get(`${this.__urlAPI__}`)
        return Brastlewark
    })()

  }
  
}


export default dataAPI