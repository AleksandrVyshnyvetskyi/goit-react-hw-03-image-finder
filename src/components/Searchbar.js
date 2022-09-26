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
    const searchChange = this.hendleSearchChange;
    const submit = this.hendleSubmit;
    const searchName = this.state.searchName;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={submit}>
          <button type="submit" className="SearchForm-button" />
          <input
            className="SearchForm-input"
            onChange={searchChange}
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
