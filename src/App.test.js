import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, {
  PaletteContainer,
  CounterContainer,
  WaitingListContainer,
} from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    let wrapper;
    wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
