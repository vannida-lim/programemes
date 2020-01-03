import React from "react";

const Meme = props => {
    // const liked = props.liked === true
  return (
    <div id="meme-card" className="ui card" >
      {/* <h2>{props.meme.title}</h2>
      <p>Submitted By: {props.meme.user_id}</p> */}
        <div className="content">
            <div className="header">{props.meme.title}</div>
            < div className="description">Submitted By: {props.meme.user_id}</div>
        </div>
        <div className="ui divider"></div>
        <div className="image">
            <img className="ui big image" src={props.meme.img_url} alt={props.meme.title}/>
        </div>
        <div className="extra content">
            <button onClick={() => props.like(props.meme)}>
              <i aria-hidden="true" className={props.liked === true ? "red like icon": "like icon"}></i>
            </button>
            <button onClick={() => props.delete(props.meme)}>
                Delete Meme
            </button>
        </div>
    </div>
  );
};

export default Meme;