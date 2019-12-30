import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom'
import MemeList from './containers/MemeList.js'
import NavBar from './components/NavBar.js'
import NotFound from './containers/NotFound.js'
import Form from './components/Form.js'
class App extends React.Component {
  state = {
    memes: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/memes')
    .then(r => r.json())
    .then((memesObj) => {
      this.setState({
        memes: memesObj
      })
    })
  }

  handleSubmit = (evt, newMeme) => {
    evt.preventDefault()
    fetch("http://localhost:3000/memes", {
      method:'POST',
      headers: { 
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        title: newMeme.title,
        user_id: newMeme.user_id,
        category: newMeme.category,
        img_url: newMeme.img_url
      })
    })
    .then(r => r.json())
    .then(newMeme => {
      this.setState({
        memes: [newMeme, ...this.state.memes]
      })
    })
  }
  
  
  
  
  render(){
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" render={() => <MemeList memes={this.state.memes}/>} />
            <Route path="/submit" render={() => <Form onSubmit={this.handleSubmit} />}/>
            <Route component={ NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
