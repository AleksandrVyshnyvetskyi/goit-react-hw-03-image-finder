import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  hendleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.searchName.trim() === '') {
      toast.error('Enter a keyword to search!');
      this.setState({
        searchName: '',
      });
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({
      searchName: '',
    });
  };

  render() {
    const { searchName } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.hendleSubmit}>
          <button type="submit" className="SearchForm-button" />
          <input
            className="SearchForm-input"
            onChange={this.hendleSearchChange}
            name="searchName"
            value={searchName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
