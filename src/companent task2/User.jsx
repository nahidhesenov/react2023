

export default function User({elem}) {
    return (
        <>
            <div style={{border:"1px solid grey",padding:"10px" ,borderRadius:"20px"}} key={elem.id}>
                <p>Username: {elem.username}</p>
                <p>Age: {elem.age}</p>
                <p>Telephone: {elem.tel}</p>   
            </div>
        </>
    )
}
