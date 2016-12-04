import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {

        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="col-xs-12 search-bar">
                <input
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="input search criteria"/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this
            .props
            .onSearchChange(term);
    }

}

export default SearchBar;