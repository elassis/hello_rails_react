import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './App.css';

const GET_NEW_GREETING = 'GET_NEW_GREETING';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting(){
  console.log('getGreeting Action')
  return dispatch =>{
    dispatch({type:GET_NEW_GREETING});
    return fetch('v1/greetings.json')
    .then(response => response.json())
    .then(json => dispatch(getGreetingsSuccess(json)))
    .catch(error => console.log(error));
    }
  };
  
  export function getGreetingsSuccess(json){
    return{
      type:GET_GREETING_SUCCESS,
      json
    };
  };

class Greeting extends React.Component {
  render () {
    const { greetings } =  this.props  
    const GreetingList = greetings.map((greeting)=>{
      return <li key={greeting.id}>{greeting.title}</li>
    })

    return (
      <React.Fragment>
        <div className="component-container">{ GreetingList }
        <button className="GreetingBtn" onClick={() => this.props.getGreeting()}>new Greeting</button>
        </div>
      </React.Fragment>
    );
  }
}
const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings
});
const mapDispatchToProps = { getGreeting};
Greeting.propTypes = {
  greeting: PropTypes.string
};
export default connect(structuredSelector,mapDispatchToProps)(Greeting);
