import React, { PureComponent } from 'react';
import Tags from './tags'
import Friends from './friends'


class Usuario extends PureComponent {

  render() {
    const { name, address, company, email, friends, tags, eyeColor, gender, age, picture, balance, phone } = this.props.data
    return (
      <div>
        <article>
          <img src= {picture} width="150px" height="150px" /> 
          <h1>{name}</h1>
          Color de Ojos: <span style= {{background: eyeColor }} >|______|</span> Edad: {age} Genero: {gender}
          <p>Direccion: {address}</p>
          <p> Email: <a href={email}>{email} </a>Telefono: {phone}</p>
          Trabaja en: {company}   Sueldo: {balance}
          <Friends friends = {friends}/>
          <Tags tags= {tags} />
        </article>
      </div>
    )
  }
}

export default Usuario;