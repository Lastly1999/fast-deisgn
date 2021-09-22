import example from '../example'
import Select from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Select example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Select plugin', () => {
  const app = createApp({}).use(Select)
  expect(app.component(Select.name)).toBeTruthy()
})
