import {useState, useEffect} from "react";
import User from "../components/User";
import {getUserAxios, getUsersAxios} from "../services/user.api.axios";

function Users(){
    let [users, setUsers] = useState([]);
    let [PickUser, setPickUser] = useState([]);

useEffect(() => {
    getUsersAxios().then(value => setUsers(value.data))
}, []);

const chooseUser = (id) => {
  getUserAxios(id).then(value => setPickUser(value.data) )
}

return (<div>

    <hr/>
    <h3>Here is info</h3>
    {PickUser && (<div>{PickUser.username} - {PickUser.email}</div>)}
    <hr/>
    {users.map((user, index) => (<
        User
        item={user}
        key={index}
        chooseUser={chooseUser}
    />))}
</div>);
}

export default Users;

