import example from '../example'
import Layout from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Layout example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Layout plugin', () => {
  const app = createApp({}).use(Layout)
  expect(app.component(Layout.name)).toBeTruthy()
})
