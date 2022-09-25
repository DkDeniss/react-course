import {useState} from "react";
import Album from "../album/Album";


export default function Albums() {
    let [albums, setAlbums] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(value => value.json())
        .then(value => {
            setAlbums(value);
        });

    return (<div>
            {albums.map((album, index) => (<Album item={album} key={index}/>))}
        </div>
    );
}