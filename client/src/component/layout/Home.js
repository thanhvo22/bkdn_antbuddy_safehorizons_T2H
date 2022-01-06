import { Redirect } from "react-router-dom";
const Home = () => {
    return (
        
        <h2> {window.localStorage.getItem('user')}</h2>
    )
}

export default Home;