import example from '../example'
import Form from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Form example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Form plugin', () => {
  const app = createApp({}).use(Form)
  expect(app.component(Form.name)).toBeTruthy()
})
