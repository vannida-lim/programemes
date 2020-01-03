import React from 'react'
import Meme from '../components/Meme.js'

class MemeList extends React.Component {

    render() {
        
      return (
        <div className="ui centered bottom attached segment">
            {this.props.memes.map(meme => <Meme key={meme.id} meme={meme} like={this.props.like} liked={this.props.liked} delete={this.props.delete}/>)}
        </div>
      );
    }
  }
  
  export default MemeList;