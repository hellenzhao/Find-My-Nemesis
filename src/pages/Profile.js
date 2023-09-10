

export default function Profile({id, person}) {
    return (
        <>
            <div class="profile">
                <div class="folder">
                    <div class="align">
                    <img class="pfp" src={person.imagePath}></img>
                    <h2>{person.name}</h2>
                    </div>
                    <h3>Greatest Fears: </h3>
                    <ul>
                        {person.fears.map(fear => {
                            return <li>{fear}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}