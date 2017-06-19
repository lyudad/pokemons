import React, { Component } from 'react';
import { connect } from 'react-redux';

import PokemonsList  from '../components/PokemonsList';
import PokemonDetails from '../components/PokemonDetails';
import PokemonsTypesList from '../components/PokemonsTypesList';

class Main extends Component {

    render() {
        return (
          <div className="container">
            <div className="row">
              <PokemonsList pokemons={this.props.pokemons.pokemons}/>
              <PokemonDetails  pokemon={this.props.pokemons.selected}/>
              <PokemonsTypesList types={this.props.pokemons.types}/>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    };
}

export default connect(mapStateToProps, {  })(Main);
