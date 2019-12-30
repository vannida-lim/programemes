import React from 'react'
import Meme from '../components/Meme.js'

class MemeList extends React.Component {
    render() {
      return (
        <div class="ui centered bottom attached segment">
            {this.props.memes.map(meme => <Meme key={meme.id} meme={meme}/>)}
        </div>
      );
    }
  }
  
  export default MemeList;