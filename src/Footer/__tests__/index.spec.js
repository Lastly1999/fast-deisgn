import example from '../example'
import Footer from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Footer example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Footer plugin', () => {
  const app = createApp({}).use(Footer)
  expect(app.component(Footer.name)).toBeTruthy()
})
