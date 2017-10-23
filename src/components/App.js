import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
 
import Posts from './Posts/'
import PostDetail from './PostDetail/'
import NewPost from './NewPost/'
import EditPost from './EditPost'
import HomeMenuBar from './Home'
import FooterMenuBar from './Footer'
 
class App extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

 componentDidMount() {
    let serverUrl = "http://localhost:3001";
    const url = `${serverUrl}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'Basic QURhZDphZERBRA==' } } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }*/

    render() {
    return (
      <div className="App">       
           <HomeMenuBar />
            <Switch>
              <Route exact path ='/' component={Posts} />
              <Route exact path ='/new' component={NewPost} />
              <Route exact path ='/edit/:id' component={EditPost} />
              <Route exact path ='/:category' component={Posts} />
              <Route exact path ='/:category/:id' component={PostDetail} />
            </Switch>  
           <FooterMenuBar/>
      </div>
    );
  }
}

export default App;
