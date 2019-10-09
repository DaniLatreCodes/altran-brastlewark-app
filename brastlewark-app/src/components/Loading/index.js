import React from 'react'
import './index.sass'

function Loading({isLoading}){

return(
  <> 
    { isLoading && <div className="lds-css ng-scope"><div className="lds-cube"><div></div><div></div><div></div><div></div></div></div> }
  </>
)

}

export default Loading