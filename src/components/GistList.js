import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGists } from '../actions/gistActions';
import Gist from './Gist';
import './GistList.css';

const GistList = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const allGists = useSelector(state => state.gists.gists);
  const [filteredGists, setFilteredGists] = useState(allGists);

  useEffect(() => {
    dispatch(fetchGists()); // Fetch all gists by default
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = allGists.filter(gist =>
        gist.owner.login.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGists(filtered);
    } else {
      setFilteredGists(allGists); // Show all gists if no search term
    }
  }, [allGists, searchTerm]);
console.log("filteredGists", filteredGists);
  return (
    <div>
      {
      filteredGists.length > 0 ?
      filteredGists.map(gist => (
        <Gist key={gist.id} gist={gist} />
      )):
      <div  className="gist-list no-data">
<img src="/assets/noRecords.png" alt="No Data" className="no-data-image" />
      {/* <h1>No Record Found</h1> */}
      </div>
      }
    </div>
  );
};

export default GistList;
