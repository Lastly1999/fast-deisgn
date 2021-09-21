import example from '../example'
import Header from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Header example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Header plugin', () => {
  const app = createApp({}).use(Header)
  expect(app.component(Header.name)).toBeTruthy()
})
