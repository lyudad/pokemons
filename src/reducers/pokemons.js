import {SET_POKEMONS_LIST,
        SET_SELECT_POKEMON,
        SET_TYPES_LIST} from '../types';

const initialState = {
    pokemons: {},
    selected:{},
    types:[]
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_POKEMONS_LIST:
        return {
            ...state,
            pokemons: action.payload
        };
    case SET_SELECT_POKEMON:
        return {
            ...state,
            selected: action.payload
        };
    case SET_TYPES_LIST:
        return {
            ...state,
            types: action.payload
        };
    default:
        return state;
    }
};
