import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { PaletteContainer } from './PaletteContainer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('PaletteContainer Component', () => {
  let wrapper;
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockPaletteContainerfn = jest.fn();

  beforeEach(() => {
    // pass the mock function as the login prop
    wrapper = shallow(<PaletteContainer onSelect={mockPaletteContainerfn} />);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaletteContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
