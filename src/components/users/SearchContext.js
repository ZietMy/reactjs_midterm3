import React, { createContext, useState } from 'react';
import { searchUserApi } from '../../api';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);

  const searchUsers = async (searchText) => {
    try {
      const response = await searchUserApi(searchText);
      setUsers(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SearchContext.Provider value={{ text, setText, users, setUsers, searchUsers }}>
      {children}
    </SearchContext.Provider>
  );
};
