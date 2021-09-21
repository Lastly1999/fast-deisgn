<template>
  <app-type></app-type>
  <f-container class="demo-container">
    <f-header class="demo-header">
      header
    </f-header>
    <f-main class="demo-main">main</f-main>
  </f-container>
  <f-container class="demo-container">
    <f-header class="demo-header">
      header
    </f-header>
    <f-main class="demo-main">main</f-main>
    <f-footer class="demo-footer">footer</f-footer>
  </f-container>
  <f-container class="demo-container" mode="horizontal">
    <f-aside class="demo-aside-vertical">
      aside
    </f-aside>
    <f-main class="demo-main">main</f-main>
  </f-container>
  <f-container class="demo-container">
    <f-header class="demo-header">
      header
    </f-header>
    <f-container class="demo-container-vertical" mode="horizontal">
      <f-aside class="demo-aside-vertical-2">
        aside
      </f-aside>
      <f-main class="demo-main">main</f-main>
    </f-container>
  </f-container>
  <f-container class="demo-container">
    <f-header class="demo-header">
      header
    </f-header>
    <f-container class="demo-container-vertical" mode="horizontal">
      <f-aside width="300" class="demo-aside-vertical-2">
        aside
      </f-aside>
      <f-container>
        <f-main class="demo-main">main</f-main>
        <f-footer class="demo-footer">footer</f-footer>
      </f-container>
    </f-container>
  </f-container>
</template>

<script>
import Main from "../../Main/Main.tsx"
import Aside from "../../Aside/Aside.tsx"
import Header from "../../Header/Header.tsx"
import Footer from "../../Footer/Footer.tsx"
import Container from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'ContainerExample',
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Aside.name]: Aside,
    [Main.name]: Main,
    [Footer.name]: Footer,
    AppType
  }
}
</script>
<style>
.demo-container {
  height: 300px;
  margin-bottom: 40px;
}
.demo-header {
  height: 60px;
  line-height: 60px;
  background: #b3c0d1;
  text-align: center;
}
.demo-aside-vertical {
  background-color: #b3c0d1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-aside-vertical-2 {
  background-color: #d3dce6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-main {
  height: 100%;
  background-color: #e9eef3;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}
.demo-footer {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #b3c0d1;
}
.demo-container-vertical {
  height: 400px;
}
</style>
