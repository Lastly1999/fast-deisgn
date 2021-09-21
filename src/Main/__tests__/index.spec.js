import example from '../example'
import Main from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Main example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Main plugin', () => {
  const app = createApp({}).use(Main)
  expect(app.component(Main.name)).toBeTruthy()
})
