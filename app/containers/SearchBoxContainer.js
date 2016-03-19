import { connect } from 'react-redux';
import React from 'react';
import SearchBox from '../components/SearchBox';
import { searchKeyword, filterMessages, disableFilterMessages } from '../actions/index';

const detectChange = () => {
  console.log('Detecting changes...');
}

const mapStateToProps = (state) => {
  return {
    filteredUsername: state.SearchBoxReducer.inputField
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    detectChange,
    handleKeyPress: (input) => {
      if (input) {
        dispatch(searchKeyword(input))
        .then(() => {
          console.log('HAI')
        })
        .catch(err => {
          console.log(err);
        })
        // dispatch(filterMessages(input));
      } else if (!input.length){
        console.log('no length')
        dispatch(disableFilterMessages())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);