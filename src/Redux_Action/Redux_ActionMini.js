import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Redux_ActionMini extends Component {
  render() {
    return (
      <div>
         <span>
          <button onClick={this.props.handleGiamSoLuong} className='btn btn-danger'>-</button>
          <strong className='mx-5'>{this.props.soLuong}</strong>
          <button onClick={this.props.handleTangSoLuong} className='btn btn-success'>+</button>
        </span>
      </div>
    )
  }
}

let mapStatetoProps=(state)=>{
    return{
        soLuong:state.numberReducer.number,
    };
}


let mapDispatchToProps=(dispatch)=>{
    return{
        handleTangSoLuong:()=>{
            let action={
              type:"TANG_SO_LUONG",
            };
            dispatch(action);
          },
      
          handleGiamSoLuong:()=>{
            dispatch({
              type:"GIAM_SO_LUONG",
              payload:1
            });
          },
    }
}

export default connect (mapStatetoProps,mapDispatchToProps)(Redux_ActionMini)
