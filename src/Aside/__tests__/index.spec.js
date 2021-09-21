import example from '../example'
import Aside from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Aside example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Aside plugin', () => {
  const app = createApp({}).use(Aside)
  expect(app.component(Aside.name)).toBeTruthy()
})
