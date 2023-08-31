import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Import the redux-mock-store package
import GistList from "./GistList"; // Import the component you want to test

const mockStore = configureStore([]); // Create a mock store

describe("GistList Component UI Rendering", () => {
  it("should render no data message when filteredGists is empty", () => {
    const initialState = {
      gists: {
        gists: [], // Simulate empty gists array
      },
    };
    const store = mockStore(initialState); // Create a mock store with the initialState

    // Render the GistList component wrapped in the Provider with the mock store
    const { getByAltText } = render(
      <Provider store={store}>
        <GistList searchTerm="" />
      </Provider>
    );

    // Assert that the "No Data" image 
    const noDataImage = getByAltText("No Data");
    expect(noDataImage).toBeInTheDocument();
  });

  it('should render Gist components when filteredGists has data', () => {
    const initialState = {
      gists: {
        gists: [
          // Simulate some gists data
          {
            id: '1',
            owner: { login: 'user1' },
          },
          {
            id: '2',
            owner: { login: 'user2' },
          },
        ],
      },
    };
    const store = mockStore(initialState);
  
    const { getAllByTestId } = render(
      <Provider store={store}>
        <GistList searchTerm="" />
      </Provider>
    );
  
    const gistComponents = getAllByTestId('gist-component');
    expect(gistComponents).toHaveLength(2); // Number of gists in the initial state
  });
    

  it('should filter gists based on search term', () => {
    const initialState = {
      gists: {
        gists: [
          {
            id: '1',
            owner: { login: 'user1' },
          },
          {
            id: '2',
            owner: { login: 'user2' },
          },
        ],
      },
    };
    const store = mockStore(initialState);
  
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <GistList searchTerm="user1" />
      </Provider>
    );
  
    const gistUser1 = getByText('user1');
    const gistUser2 = queryByText('user2');
    expect(gistUser1).toBeInTheDocument();
    expect(gistUser2).not.toBeInTheDocument();
  });
  });
