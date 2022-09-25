import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/todos/Todos";
import Home from "./components/home/Home";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";

function App() {

    return (
<div>

<ul>
    <li><Link to={'/'}>home</Link></li>
    <li><Link to={'todos'}>todos</Link></li>
    <li><Link to={'albums'}>albums</Link></li>
    <li><Link to={'comments'}>comments</Link></li>
</ul>
    <hr/>
    <div>
    <Routes>
        <Route path={'/'} elements = {<Home/>}/>
        <Route path={'todos'} elements = {<Todos/>}/>
    <Route path={'albums'} elements = {<Albums/>}/>
    <Route path={'comments'} elements = {<Comments/>}/>

    </Routes>
    </div>




</div>
    );
}

export default App;