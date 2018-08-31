import React, {PureComponent} from 'react';

export default class Tags extends PureComponent {
    render(){
        const {tags} = this.props;
        return (
        <p>Etiquetas: {tags.map( (tag ) => <span>{tag} - </span> )}</p>
        );
    }
}