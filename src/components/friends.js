import React, {PureComponent} from 'react';

export default class Friends extends PureComponent {
    render(){
        const {friends} = this.props;
        return (
            <p>Lista de Amigos: {friends.map( (friend ) => <span>{friend.name} / </span> )}</p>
        );
    }
}