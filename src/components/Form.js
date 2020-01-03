import React from 'react'
class Form extends React.Component {
    state = {
      title: "",
      user_id: "",
      category: "",
      img_url:""
    }
  
    handleOnChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }
    
    render() {
      return(
        <div className="ui container">
        <h1>Submit a Meme </h1>
        <form className="ui form" onSubmit={(evt) => this.props.onSubmit(evt, this.state)}>
            <div className="equal width fields">
                <div className="field">
                    <label>Meme Title</label>
                    <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.handleOnChange}/>
                </div>
                <div className="field">
                    <label>Meme Category</label>
                    <select name="category" value={this.state.category.value} onChange={this.handleOnChange}>
                        <option value="meme">Meme</option>
                        <option value="comic">Comic</option>
                        <option value="gif">Gif</option>
                    </select>
                </div>
                <div className="field">
                    <label>User Id</label>
                    <input type="text" placeholder="user id" name="user_id" value={this.state.user_id} onChange={this.handleOnChange}/>
                </div>
                <div className="field">
                    <label>Meme URL</label>
                    <input type="text" placeholder="meme" name="img_url" value={this.state.img_url} onChange={this.handleOnChange} />
                </div>
            </div>
          <input className="ui button" type="submit" value="Submit" />
        </form>

        </div>
        
      ) 
    }
  }
  
  export default Form;