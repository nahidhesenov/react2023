import List from "./userdata.json"
import User from "./User"

function Userlist() {
  return (
    <div style={{ height:"50vh",display:"flex", gap:"30px" ,justifyContent:"center", alignItems:"center"}}>
    {List.map(el=> <User elem={el} />)}
    </div>
  )
}

export default Userlist