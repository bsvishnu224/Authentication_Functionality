// Write your JS code here

import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        <div>
            <Link to="/"><p>Home</p></Link>
            <Link to="/About"><p>About</p></Link>
            
        
        
        </div>
    )
}
export default Header