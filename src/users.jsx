import { use } from "react"
import User from "./user";
export default function Users({fetchUsers}){
    const users= use(fetchUsers)
    console.log(users);
    
    return(
        <div className="card">
            <h2>Users:  {users.length}</h2>
            {
                users.map(user=><User user={user}></User>)
            }
        </div>
    )
}