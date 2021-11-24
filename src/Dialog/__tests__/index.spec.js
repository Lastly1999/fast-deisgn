import example from '../example'
import Dialog from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test Dialog example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test Dialog plugin', () => {
  const app = createApp({}).use(Dialog)
  expect(app.component(Dialog.name)).toBeTruthy()
})
