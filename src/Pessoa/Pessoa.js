
import React, {Component} from 'react';

import classes from './Pessoa.css'

class Pessoa extends Component {

   render() {
      console.log('[Pessoa.js] rendering...') 
      return [
            <p key="i1" onClick={this.props.click}>Eu sou {this.props.nome}, Eu sou uma Pessoa e tenho {this.props.idade} anos !</p>,
            <p key="i2" >{this.props.children}</p>,
            <input key="i3" type='text' onChange={this.props.changed} value={this.props.nome}></input>
      ];   
   }
   
}

export default Pessoa;
