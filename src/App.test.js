import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, {
  PaletteContainer,
  CounterContainer,
  WaitingListContainer,
} from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('has a valid snapshot', () => {
    const component = renderer.create(<App />);
    let tree = component.toJson();
    expect(tree).toMatchSnapshot();
  });
});
describe('PaleteContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaletteContainer />, div);
  });
  it('has a valid snapshot', () => {
    const component = renderer.create(<PaletteContainer />);
    let tree = component.toJson();
    expect(tree).toMatchSnapshot();
  });
});
describe('CounterContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CounterContainer />, div);
  });
  it('has a valid snapshot', () => {
    const component = renderer.create(<CounterContainer />);
    let tree = component.toJson();
    expect(tree).toMatchSnapshot();
  });
});
describe('WaitingListContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WaitingListContainer />, div);
  });
  it('has a valid snapshot', () => {
    const component = renderer.create(<WaitingListContainer />);
    let tree = component.toJson();
    expect(tree).toMatchSnapshot();
  });
});
