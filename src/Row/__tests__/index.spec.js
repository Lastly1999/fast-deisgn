import example from '../example'
import Row from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Row example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Row plugin', () => {
  const app = createApp({}).use(Row)
  expect(app.component(Row.name)).toBeTruthy()
})
