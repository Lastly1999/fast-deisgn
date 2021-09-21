import example from '../example'
import Col from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Col example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Col plugin', () => {
  const app = createApp({}).use(Col)
  expect(app.component(Col.name)).toBeTruthy()
})
