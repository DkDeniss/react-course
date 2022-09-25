export default function Todo(props) {
    let {item: post} = props;

    return (<div>
        <h2>{post.id} - {post.title} </h2>


        <hr/>
    </div>);
}