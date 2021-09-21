<template>
  <app-type>分为 24格 栅格化搭配出的栅格布局</app-type>
  <f-row class="grid-row">
    <f-col :span="24" class="grid-content bg-purple-dark"></f-col>
  </f-row>
  <f-row class="grid-row">
    <f-col :span="12" class="grid-content bg-purple"></f-col>
    <f-col :span="12" class="grid-content bg-purple-light"></f-col>
  </f-row>
  <f-row class="grid-row">
    <f-col :span="6" class="grid-content bg-purple"></f-col>
    <f-col :span="6" class="grid-content bg-purple-light"></f-col>
    <f-col :span="6" class="grid-content bg-purple"></f-col>
    <f-col :span="6" class="grid-content bg-purple-light"></f-col>
  </f-row>
  <f-row class="grid-row">
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
    <f-col :span="3" class="grid-content bg-purple"></f-col>
    <f-col :span="3" class="grid-content bg-purple-light"></f-col>
  </f-row>
  <app-type>栅格间隔</app-type>
  <f-row class="grid-row" :gutter="[10]">
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </f-col>
  </f-row>
  <app-type>不同排列方式</app-type>
  <f-row class="row-bg" :gutter="[10]">
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
  </f-row>
  <f-row class="row-bg" :gutter="[10]" justify="center">
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
  </f-row>
  <f-row class="row-bg" :gutter="[10]" justify="space-between">
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
  </f-row>
  <f-row class="row-bg" :gutter="[10]" justify="space-around">
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </f-col>
    <f-col :span="6">
      <div class="grid-content bg-purple"></div>
    </f-col>
  </f-row>
</template>
😓
<script>
import Row from "../../Row/Row.tsx"
import Col from "../../Col/Col.tsx"
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'LayoutExample',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    AppType
  },
  setup() {
    return {
    }
  }
}
</script>
<style>
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.grid-row {
  margin-bottom: 13px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>