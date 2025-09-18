export default function User({user}){
    const {name}=user
    return(
        <div className="card">
            <h2>Name:{name}</h2>
        </div>
    )
}