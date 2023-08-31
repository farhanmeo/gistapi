
import { useState } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import store from './store/store';

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Provider store={store}>
    <Wrapper className="App" data-testid="app">
    <Header onSearch={handleSearch} />
      <GistList searchTerm={searchTerm} />
      <GlobalStyles />
    </Wrapper>
    </Provider>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
