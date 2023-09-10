import {Link} from 'react-router-dom';

export default function Roster({people}) {
    const rosterList = people.map((person, id) => {
        return <RosterItem name={person.name} id={id} imagePath={person.imagePath} />
    });
    
    return (
        <div className="App">
            <header className="App-header">
                <h2>Matches:</h2>
                <ul>{rosterList}</ul>
            </header>
      </div>
    );
}


function RosterItem({name, id, imagePath}) {
    return (
        <Link to={'profile-'+id}>
            <li className="roster-item" personId={id}>
                <div class="formatli">
                <img src={imagePath} />
                <p class="name">{name}</p>
                </div>
            </li>
        </Link>
        
    );
}

