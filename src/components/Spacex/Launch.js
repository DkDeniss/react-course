export default function ({item}) {
    return(
        <div>
            <h2>{item.mission_name} - {item.launch_year}</h2>
            <img src={item.links.mission_patch_small}/>

        </div>
    )
}
