import {Link} from "react-router-dom";

export default function Comment({comment}) {
    return (
        <div>
            <Link to={`${comment.id}`}><h2>{comment.name}</h2>
            </Link>
        </div>
    );
}