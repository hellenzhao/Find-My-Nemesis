import {Link} from 'react-router-dom';

export default function Roster({people}) {
    const rosterList = people.map((person, id) => {
        return <RosterItem name={person.name} id={id} imagePath={person.imagePath} datingScore={person.datingScore} />
    });
    
    return (
        <div className="App">
            <div class='header'>
            <img class='logo' src='../images/logo.png'></img>
            <h1>Find My Nemesis</h1>
            </div>
            <header className="App-header">
            <h2>Matches:</h2>
            <ul>{rosterList}</ul>
            </header>
      </div>
    );
}


function RosterItem({name, id, imagePath, datingScore}) {
    return (
        <Link to={'profile-'+id}>
            <li className="roster-item" personId={id}>
                <img src={imagePath} />
                <p class="name">{name}</p>
                <p class="score">{datingScore}</p>
            </li>
        </Link>
        
    );
}

