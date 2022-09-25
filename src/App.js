import {Link, Route, Routes} from "react-router-dom";

import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Todos from "./components/todos/Todos";
import Post from "./components/Post/post";

function App() {

    return (
        <div>

            <ul>
                <li><Link to={'/'}>todos</Link></li>
                <li><Link to={'/albums'}>albums</Link></li>
                <li><Link to={'/comments'}>comments</Link></li>
            </ul>
            <hr/>
            <div>
                <Routes>
                    <Route path={'/'} element={<Todos/>}></Route>
                    <Route path={'/albums'} element={<Albums/>}></Route>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={'/comments/:id'} element = {<Post/>}/>
                    </Route>


                </Routes>
            </div>
            <hr/>

        </div>
    );
}

export default App;