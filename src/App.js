import { useState } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import store from './store/store';

const App = () => {
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Handler function to update the search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Provider store={store}>
      {/* Main wrapper */}
      <Wrapper className="App" data-testid="app">
        {/* Header component with search functionality */}
        <Header onSearch={handleSearch} />

        {/* GistList component to display gists */}
        <GistList searchTerm={searchTerm} />

        {/* Global styles */}
        <GlobalStyles />
      </Wrapper>
    </Provider>
  );
}

// Styled wrapper for the entire app
const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
