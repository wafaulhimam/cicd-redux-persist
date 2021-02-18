import React from 'react';
import { shallow } from 'enzyme';
import Title from '../index';

const title = 'Test Title';
let wrapped = shallow(<Title>{title}</Title>)

describe('Component Title', () => {
    it('should render title component perfectly', () => {
        expect(wrapped).toMatchSnapshot();
    })
})

