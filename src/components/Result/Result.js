import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

import Header from '../Header';
import { searchUser } from '../../actions/action';
import * as CONSTS from '../../constant/const';
import './styles.css';

export const Result = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginData, totalCount, searchKey, error } = useSelector((state) => state.search);
  const [userData, setUserData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageClick = (data) => {
    let { selected } = data;
    let offset = Number(Math.ceil(selected) + 1);
    dispatch(searchUser(searchKey, offset));
  };

  const closeError = () => {
    dispatch({ type: CONSTS.GET_DATA_ERROR, payload: '' });
  };
  useEffect(() => {
    const orderedArray = _.sortBy(loginData, (o) => o.login);
    setUserData(orderedArray);
  }, [loginData]);

  useEffect(() => {
    const totalCounts = totalCount > 1000 ? 1000 : totalCount;
    const pages = Number(parseInt(totalCounts / 9)) + Number(totalCounts % 9 > 0 ? 1 : 0);
    setTotalPages(pages);
  }, [totalCount]);

  return (
    <div className="main" data-testid="result">
      <Header title="result" />
      <div className="content">
        <div className="row d-flex justify-content-center">
          {error !== '' && (
            <div className="alert alert-danger position-relative d-flex" role="alert">
              {error}
              <button type="button" className="closeBtn" onClick={closeError}>
                <i className="fas fa-times" />
              </button>
            </div>
          )}
          {userData.length > 0 &&
            userData.map((profile, index) => (
              <div className="col-md-9 col-xs-12 profile-tab" key={index}>
                <div className="row">
                  <div className="col-md-5 col-xs-12 d-flex align-items-center">
                    <img src={profile.avatar_url} alt="avatar" />
                  </div>
                  <div className="col-md-7 col-xs-12 d-flex align-items-center">
                    <div className="w-100 px-4">
                      <div className="title">Login</div>
                      <div className="name">{profile.login}</div>
                      <div className="title mt-3">Type</div>
                      <div className="name">{profile.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="d-flex justify-content-center text-center">
          <ReactPaginate
            previousLabel={'⟨'}
            nextLabel={'⟩'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </div>
  );
};
