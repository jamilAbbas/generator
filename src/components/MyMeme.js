import React from 'react';
import ReactDOM from 'react-dom';
import{connect} from 'react-redux';

class MyMeme extends React.Component{
  render(){
    return(
      <div>
        {
          this.props.myMemes.map((meme,index)=>{
            return(
              <img
                key={index}
                src={meme.data.url}
                alt="my-meme"
                className="my-meme-img"
               />
            )
          })
        }
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    myMemes:state.myMemes
  }
}
export default connect(mapStateToProps,null)(MyMeme);
