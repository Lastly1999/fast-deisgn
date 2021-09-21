import example from '../example'
import Container from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Container example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Container plugin', () => {
  const app = createApp({}).use(Container)
  expect(app.component(Container.name)).toBeTruthy()
})
