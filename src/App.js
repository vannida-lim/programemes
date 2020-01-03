import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch} from 'react-router-dom'
import MemeList from './containers/MemeList.js'
import NavBar from './components/NavBar.js'
import NotFound from './containers/NotFound.js'
import Form from './components/Form.js'
import { Sticky } from 'semantic-ui-react'
import Profile from './components/Profile.js'
class App extends React.Component {
  state = {
    memes: [],
    current_user: [],
    liked: false
  }

  getMemes(){
    fetch('http://localhost:3000/memes')
    .then(r => r.json())
    .then((memesObj) => {
      this.setState({
        memes: memesObj
      })
    })
  }

  componentDidMount(){
    this.getMemes()

    fetch('http://localhost:3000/users')
    .then(r => r.json())
    .then((usersObj) => {
      this.setState({
        current_user: usersObj[0]
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

  handleLike = (meme) => {
    fetch(`http://localhost:3000/memes/${meme.id}`, {
      method:'PATCH',
      headers: { 
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        liked: !this.state.liked
      })
    })
    .then(r => r.json())
    .then(likeObj => {
      this.setState({
        liked: likeObj.liked
      })
    })
     
  }

  handleDelete = (meme) => {
    fetch(`http://localhost:3000/memes/${meme.id}`, {
      method:'DELETE',
      headers: { 
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(r => r.json())
    .then(memeObj => {
      this.getMemes()
    })
  }
  

  render(){
    return (
      <Router>
        <div>
          <Sticky>
          <NavBar/>
          </Sticky>
          <Switch>
            <Route id="meme-container" exact path="/" render={() => <MemeList like={this.handleLike} memes={this.state.memes} liked={this.state.liked} delete={this.handleDelete}/>} />
            <Route path="/submit" render={() => <Form onSubmit={this.handleSubmit} />}/>
            <Route path="/profile" render={() => <Profile current_user={this.state.current_user}/>}/>
            <Route component={ NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
