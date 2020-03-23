import React from 'react';
import { render } from 'react-dom';

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var player = this.props.player; 
        return(
            <div className="list">
                <div className="list">
                    {/* <img src={user.avatar_url}></img> */}
                    <h3>{player.name}</h3>
                    {/* <p>{player.country}</p> */}
                    {/* <p>{player.searches}</p> */}
                </div>
            </div>
        )
    }     
};
export default PlayerList;