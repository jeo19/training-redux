import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { WaitingListContainer } from './WaitingListContainer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('WaitingListContainer Component', () => {
  let wrapper;
  const list = [
    { id: 0, name: 'Jhon', entered: true },
    { id: 1, name: 'Maria', entered: false },
    { id: 2, name: 'Thomas', entered: false },
  ];
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockWaitingListContainerfn = jest.fn();

  beforeEach(() => {
    // pass the mock function as the login prop
    wrapper = shallow(
      <WaitingListContainer
        waitingList={list}
        changeInput={mockWaitingListContainerfn}
        create={mockWaitingListContainerfn}
        enter={mockWaitingListContainerfn}
        leave={mockWaitingListContainerfn}
      />
    );
  });
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<WaitingListContainer waitingList={initialState} />, div);
    // ReactDOM.unmountComponentAtNode(div);
    shallow(<WaitingListContainer />);
  });
});
