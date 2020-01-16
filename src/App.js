import React from "react";
import "./App.css";
import News from './component/News'
import SearchBar from './component/SearchBar'
class App extends React.Component {
  state = {
     hits : [],
    searchText : '',
    searchOption : 'default'
    };



    fetchData = (searchText) => {
      fetch(`http://hn.algolia.com/api/v1/search?query= ${searchText}`)
      .then(response => response.json())
      .then(parsedJSON => {
        console.log(parsedJSON);
        this.setState({ hits: parsedJSON.hits });
      })
      .catch(error => console.log("parsing failed", error));
    }
    // componentDidMount() {
    //   this.fetchData();
    // }

    handleSearch = (e) => {
      this.setState({searchText: e.target.value})
      this.fetchData(this.state.searchText)
    };

    setOption = (e) => {
      this.setState({searchOption : e.target.value})
    }

  render() {
    return(
    
    <div>
      <select onChange = {this.setOption}>
        <option value="date">date</option>
        <option value="author">author</option>
      </select>
      <SearchBar
      handleSearch = {this.handleSearch}
      
      />
      <News news = {
        this.state.hits
      }
      
      
      />
    </div>);
  }
}

export default App;
