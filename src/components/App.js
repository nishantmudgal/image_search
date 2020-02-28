import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './SearchBar'
import Unsplash from '../api/Unsplash.js'
import ImageList from './ImageList'

class App extends React.Component {
  state = {images: []}

  onSearchSubmit = async (term) => {
    const response = await Unsplash.get('/search/photos', {
      params: { query: term }
    })
    this.setState({images : response.data.results})
  }
  render() {
    return <div className = "ui container" style = {{marginTop: '10px'}}>
      <Searchbar onSubmit = {this.onSearchSubmit}/>
      <ImageList images = {this.state.images} />
    </div>
  }
}

export default App
