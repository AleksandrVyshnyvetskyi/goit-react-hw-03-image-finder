import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";

import { Button } from "./Button";

export  class App extends React.Component {
  // state = {
  //   id: 'id',
  //   webformatURL: 'ссылка на маленькое изображение для списка карточек',
  //   largeImageURL: 'ссылка на большое изображение для модального окна',
  //   allImage: 2,
  // }

  // async componentDidMount(){
  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=29359715-57cbbaa05904a72f5703b5006&image_type=photo&orientation=horizontal&per_page=12')
  //   .then(res => res.json()).then(allImage => this.setState({allImage}))
  // }

  state = {
    searchName: '',
    showModal: false,
  }


  handlFormSubmit = searchName => {
    this.setState({ searchName })
  }

  render (){
  return (
    <div className="App">
      <Searchbar onSubmit={this.handlFormSubmit}/>
      <ImageGallery searchName={this.state.searchName}/>
      <Button/>
      {/* <Loader/> */}
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
    )
  }
}
