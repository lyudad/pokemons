import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchPokemonsList, fetchPokemonDetales} from '../actions';

import ReactPaginate from 'react-paginate';

import PokemonListItem from './PokemonListItem';
import PokemonSearch from './PokemonSearch';

class PokemonsList extends Component {

    constructor(props) {
        super(props);

        this.state={
            pokemons: [],
            offset:0
        };
        this.onSelectItem = this.onSelectItem.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillMount() {
        this.props.fetchPokemonsList(0);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ pokemons: nextProps.pokemons });
    }

    onSelectItem(url){
        this.props.fetchPokemonDetales(url);
    }

    onSearch(str){
        if(str === '') return this.setState({ pokemons: this.props.pokemons });
        let pokemons = this.props.pokemons;
        const re = RegExp('^'+str+'.*', 'gi');

        pokemons = pokemons.filter(pokemon => {
            if (pokemon.name.search(re) !== -1) return true;
	          else return false;
        });

        this.setState({ pokemons});
    }

    renderPokemons(){
        const pokemons = this.state.pokemons;

        return pokemons.map((pokemon) =>
              <PokemonListItem
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
              onSelectItem={this.onSelectItem}/>
            );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 20);

        this.setState({offset});
        this.props.fetchPokemonsList(offset);
    };


    render() {
        return (
          <div className="col-sm-3">
             <PokemonSearch onSearch={this.onSearch}/>
             <div className="list-group">{this.renderPokemons()}</div>
             <ReactPaginate previousLabel={'prev'}
                       nextLabel={'next'}
                       breakLabel={<a href="">...</a>}
                       breakClassName={'break-me'}
                       pageCount={25}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={1}
                       onPageChange={this.handlePageClick}
                       containerClassName={'pagination'}
                       subContainerClassName={'pages pagination'}
                       activeClassName={'active'} />
          </div>
        );
    }
}

export default connect(null, { fetchPokemonsList, fetchPokemonDetales })(PokemonsList);
