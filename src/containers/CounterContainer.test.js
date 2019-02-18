import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { CounterContainer } from './CounterContainer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CounterContainer Component', () => {
  let wrapper;
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockCounterContainerfn = jest.fn();

  beforeEach(() => {
    // pass the mock function as the login prop
    wrapper = shallow(
      <CounterContainer
        onIncrement={mockCounterContainerfn}
        onDecrement={mockCounterContainerfn}
      />
    );
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CounterContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
