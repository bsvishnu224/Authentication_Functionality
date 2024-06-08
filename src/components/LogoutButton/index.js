// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const Logout=(props)=>{

    const onClickLogout=()=>{
        const {history}=props
        Cookies.remove("jwt_token")
        history.replace('/login')
    }
    return(
        <button onClick={onClickLogout}>Logout</button>
    )
}
export default withRouter(Logout)