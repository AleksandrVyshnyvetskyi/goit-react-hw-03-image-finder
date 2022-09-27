import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";


export  class App extends React.Component {
  state = {
    searchName: '',
  }

  handlFormSubmit = searchName => {
    this.setState({ 
      searchName
    })
  }

  render (){
    const {searchName} = this.state;
  return (
    <div className="App">
      <Searchbar onSubmit={this.handlFormSubmit}/>
      <ImageGallery searchName={searchName}/>
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
