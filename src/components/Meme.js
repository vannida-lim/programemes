import React from "react";

const Meme = props => {
  return (
    <div className="ui card" >
      {/* <h2>{props.meme.title}</h2>
      <p>Submitted By: {props.meme.user_id}</p> */}
        <div class="content">
            <div class="header">{props.meme.title}</div>
            < div class="description">Submitted By: {props.meme.user_id}</div>
        </div>
        <div className="image">
            <img className="ui big image" src={props.meme.img_url} alt={props.meme.title}/>
        </div>
        <div class="extra content">
            <a>
              <i aria-hidden="true" class="like icon"></i>
            10 Likes
             </a>
        </div>
    </div>
  );
};

export default Meme;