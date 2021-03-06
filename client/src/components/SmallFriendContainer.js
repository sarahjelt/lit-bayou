import React from 'react';

export const SmallFriendContainer = (props) => (
    <div className='col s12 m3' style={Style.container}>
        <p style={Style.headerText}>{props.userFriends.length !== 0 ? 'Your friends: ' : 'You don\'t have any friends yet. Search to connect!'}</p>
        <div style={Style.imgContainer}>
            {renderUserFriends(props.userFriends)}
        </div>
    </div>
)

const renderUserFriends = (userFriends) => {
    console.log('trying to render user friends', userFriends)
    return userFriends.map((friend, index) => (
        <div style={Style.smallFriendIcon} key={index}>
            <a href={hrefDeterminer(friend.id)}><img style={Style.img} src={friend.img} alt={friend.name} /></a>
            <p style={Style.smallFriendUsername}>{friend.name}</p>
        </div>
    ))
}

const hrefDeterminer = (id) => {
    return `/user/${id}`
}

const Style = {
    container: {
        border: '1px solid black',
        width: '100%',
        minHeight: '600px',
        marginRight: '10px',
    },
    headerText: {
        fontSize: '25px',
        margin: '20px',
        borderBottom: '1px solid black'
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    img: {
        width: '100px',
        borderRadius: '60px',
        margin: '5px',
    },
    smallFriendIcon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'center'
    },
    smallFriendUsername: {
        fontSize: '12px',
        marginTop: 0
    }
}
