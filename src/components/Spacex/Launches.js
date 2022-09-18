import {useState, useEffect} from "react";
import {getLaunchAxios} from "../../services/user.api.axios";
import Launch from "./Launch";

export default function Launches(){
    let [launches, setLaunches] = useState([]);

useEffect(() => {
    getLaunchAxios().then(value => setLaunches(value.data))
}, [])
    return (<div>
        {launches.filter(value => value.launch_year !== "2020").map((launch, index) => (<
            Launch
            item={launch}
            key={index}
        />))}
    </div>);




}
