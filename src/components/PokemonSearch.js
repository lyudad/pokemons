import React, { Component } from 'react';
import { connect } from 'react-redux';


class PokemonSearch extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
          <div className="search">
            <input onChange={ this.handleChange }  className="form-control" placeholder="Search ..."/>
          </div>
        );
    }
}


export default connect(null, {  })(PokemonSearch);
