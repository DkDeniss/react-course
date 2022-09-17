import {useEffect, useState} from "react";
import {getUsersAxios} from "../services/user.api.axios";
import User from "../components/User";

function Users(){
    let [users, setUsers] = useState([]);

useEffect(() => {
    getUsersAxios().then(value => setUsers(value.data))
}, []);
return (<div>
    {users.map(value => <Users item={value} key={value.id}/>)}
</div>);
}

export default Users;

