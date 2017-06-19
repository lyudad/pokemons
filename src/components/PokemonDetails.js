import React, { Component } from 'react';
import { connect } from 'react-redux';
const _ = require('lodash');


class PokemonDetails extends Component {

    render() {
        console.log('this.props', this.props);
        if(_.isEmpty(this.props.pokemon)) return (<div className="col-sm-4"/>);
        const pokemon = this.props.pokemon;
        const abilities = pokemon.abilities.map(item => {
            return item.ability.name;
        });
        const forms = pokemon.forms.map(item => {
            return item.name;
        });
        const types = pokemon.types.map(item => {
            return item.type.name;
        });

        return (
          <div className="col-sm-4 pokemon-area">
                 <h3>{pokemon.name}</h3>
                 <img src={pokemon.sprites.front_default} alt="pokemon"/>
                 <div><span>Species: </span>{pokemon.species.name}</div>
                 <div><span>Abilities: </span>{abilities.join(', ')}</div>
                 <div><span>Forms: </span>{forms.join(', ')}</div>
                 <div><span>Types: </span>{types.join(', ')}</div>
          </div>
        );
    }
}


export default connect(null, {  })(PokemonDetails);
