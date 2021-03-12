import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import { List } from './List'
import Character from './Character'

configure({
  adapter: new Adapter(),
})

describe('<App />', () => {
  it('Should render 5 characters', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Character)).toHaveLength(6)
  })
})
