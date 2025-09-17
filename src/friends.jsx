import { use } from "react"
import Friend from "./friend"
export default function Friends({fetchFriend})
{
    const friends= use(fetchFriend)
    return(
        <div className="card">
            <h1>Users:  {friends.length}</h1>
            {
                friends.map(friend =><Friend  key={friend.id}friend={friend}></Friend>)
            }
        </div>
    )
}