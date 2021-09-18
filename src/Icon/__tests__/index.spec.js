import example from '../example'
import Icon from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test icon example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test icon plugin', () => {
  const app = createApp({}).use(Icon)
  expect(app.component(Icon.name)).toBeTruthy()
})
