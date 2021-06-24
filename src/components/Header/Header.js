import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as CONSTS from '../../constant/const';
import './styles.css';

export const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { title } = props;

  const goProfile = () => {
    dispatch({ type: CONSTS.LOGIN_DATA, payload: [] });
    history.push('/');
  };
  return (
    <div className="header" data-testid="header">
      <div className="blue-header">
        <div className="header-content">
          {title === 'search' ? (
            <span className="logo">Search Github Profile</span>
          ) : (
            <div className="result-header px-3">
              <i className="far fa-arrow-alt-circle-left back-btn" onClick={goProfile} />
              <span className="logo">Search Results</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
