import { use } from "react"

export default function Users({fetchUsers}){
    const user=use(fetchUsers)
    console.log(user);
    
    return(
        <div className="card">
            <h3>Users:</h3>
        </div>
    )
}