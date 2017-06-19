import axios from 'axios';

import {SET_POKEMONS_LIST,
        SET_SELECT_POKEMON,
        SET_TYPES_LIST} from '../types';

const connectionString = 'http://pokeapi.co/api/v2';

export function fetchPokemonsList(offset) {
    return dispatch => {
        return axios.get(`${connectionString}/pokemon/?offset=${offset}`)
          .then(res => {
              dispatch(setPokemonsList(res.data.results));
          });
    };
}

export function setPokemonsList(data) {
    return {
        type: SET_POKEMONS_LIST,
        payload: data
    };
}

export function fetchPokemonDetales(url) {
    return dispatch => {
        return axios.get(url)
          .then(res => {
              dispatch(setPokemonDetales(res.data));
          });
    };
}

export function setPokemonDetales(data) {
    return {
        type: SET_SELECT_POKEMON,
        payload: data
    };
}

export function fetchTypesList(url) {
    return dispatch => {
        return axios.get(`${connectionString}/type`)
          .then(res => {
              dispatch(setTypesList(res.data.results));
          });
    };
}

export function setTypesList(data) {
    return {
        type: SET_TYPES_LIST,
        payload: data
    };
}

export function fetchPokemonsAcordingTypes(url) {
    return dispatch => {
        return axios.get(url)
          .then(res => {
              const pokemons = res.data.pokemon.map(item=>{
                  return item.pokemon;
              });
              dispatch(setPokemonsList(pokemons));
          });
    };
}
