// UserSearchContainer.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSearch from '../components/UserSearch';
import { fetchUserReposRequest } from '../actions/taskActions';

const UserSearchContainer: React.FC = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state: any) => state.user.repos);
  const loading = useSelector((state: any) => state.user.loading);
  const error = useSelector((state: any) => state.user.error);

  const handleSubmit = (username: string) => {
    dispatch(fetchUserReposRequest(username));
  };

  return (
    <div>
      <UserSearch onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {repos.length > 0 && (
        <ul>
          {repos.map((repo: any) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSearchContainer;
