// Write your JS code here

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const submitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onClickLogin = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      submitSuccess(data.jwt_token)
    }
  }
  const token=Cookies.get('jwt_token')
  if (token!==undefined){
    return <Redirect to="/"/>
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={onClickLogin}>Login with Sample Creds</button>
    </div>
  )
}

export default Login
