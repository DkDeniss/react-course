export default function User({item, chooseUser}){

return (<div>
        <h2>{item.id} - {item.name} </h2>
        <button onClick={() =>{
            chooseUser(item.id)
        } }>user details</button>

    </div>
)}