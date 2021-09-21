import example from '../example'
import Input from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Input example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Input plugin', () => {
  const app = createApp({}).use(Input)
  expect(app.component(Input.name)).toBeTruthy()
})
