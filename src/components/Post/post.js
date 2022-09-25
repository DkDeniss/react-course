import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

export default function Post() {
    let {id} = useParams();
    let [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            });

    }, [id]);
    return (
        <div>
            <Outlet/>
            {JSON.stringify(post)}

        </div>
    );
}