export default function Album(props) {
    let {item: album} = props;

    return (<div>
        <h2>{album.id} - {album.title} </h2>


        <hr/>
    </div>);
}