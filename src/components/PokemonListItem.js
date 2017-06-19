import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonsListItem extends Component {

    render() {
        const {name, onSelectItem, url} = this.props;
        return (
          <div onClick={()=>onSelectItem(url)} className="list-group-item">{name}</div>
        );
    }
}

export default connect(null, { })(PokemonsListItem);
