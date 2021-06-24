import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { searchUser } from '../../actions/action';
import Header from '../Header';
import './styles.css';

export const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, loginData } = useSelector((state) => state.search);
  const [searchKey, setSearchKey] = useState('');
  const [searchFlag, setSearchFlag] = useState(false);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
    setSearchKey;
  };

  const searchProfile = () => {
    dispatch(searchUser(searchKey, 1));
    setSearchFlag(true);
  };

  useEffect(() => {
    if (loginData.length > 0) {
      history.push('/result');
    }
  }, [history, loginData]);

  return (
    <div className="main" data-testid="search">
      <Header title="search" />
      <div className="content">
        <div className="row">
          <div className="col-md-8 mr-2 mb-2">
            <input
              className="form-control"
              type="text"
              value={searchKey}
              placeholder="Login"
              onChange={handleChange}
              name="search"
            />
          </div>
          <div className="col-md-4 ml-2 mb-2">
            <button className="btn btn-primary search-btn" onClick={searchProfile}>
              Submit
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            {loading ? (
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              searchFlag &&
              loginData.length === 0 && (
                <div className="alert alert-danger position-relative d-flex" role="alert">
                  There is no Data
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
