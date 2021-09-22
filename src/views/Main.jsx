import {Link} from 'react-router-dom'


const Main = (props) => {
    return (
        <>

        
        <h1>Home Page</h1>

        <Link to="/haiku">Haiku</Link><br/>
        <Link to="shakespeareanSonnet">Shakespearean Sonnet</Link>
        
        </>
    )
}

export default Main