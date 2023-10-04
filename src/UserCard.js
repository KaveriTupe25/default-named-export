const cardStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    width: '200px',
    height: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    margin: '10px',
}

export default function UserCard({ userName }) {

    return ( <
        div style = { cardStyle } >
        <
        h1 > { userName } < /h1>  < /
        div >
    )
}

export function UserBio({ age }) { <
    div >
        <
        h1 > { age } < /h1> < /
    div >
}