import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";


export  class App extends React.Component {
  state = {
    searchName: '',
    // showModal: false,
    // page: 0,
    // items: [],
    // largeImageURL: '',
    // totalPages: 0,
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState.page: ', prevState.page)
  //   console.log('this.state.page: ', this.state.page)
  //   const {page, searchName} = this.state;
  //   if(prevState.page !== page || prevState.searchName !== searchName) {
  //     this.loadImages(searchName, page);
  //   }
  // }

  handlFormSubmit = searchName => {
    this.setState({ 
      searchName, 
      page: 1, 
      items: [], 
    })
  }

  // onOpenModal = largeImageURL => {
  //   this.setState({ largeImageURL });
  // };

  // onCloseModal = () => {
  //   this.setState({ largeImageURL: '' });
  // };


  // loadImages = async (searchName, page) => {
  //   try {
  //     const data = await imageApi.fetchImages(searchName, page);
  //     this.setState(prevState => ({
  //       items: [...prevState.items, ...data.hits],
  //       totalPages: data.totalHits,
  //     }));
  //   } catch (error) {
  //     this.setState({ error });
  //   }
  // };

  // onLoadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

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
