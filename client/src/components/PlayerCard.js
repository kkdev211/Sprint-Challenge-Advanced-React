import React from 'react';
import { render } from 'react-dom';

class PlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var player = this.props.player; 
        console.log("player:" , player);
        return(
            <div className="card">
                <div className="card-info">
                        
                            <h3>{player.name}</h3>
                            <p>{player.country}</p> 
                            <p>{player.searches}</p>
                </div>
            </div>
        )
    }     
};
export default PlayerCard;