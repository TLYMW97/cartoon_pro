<template>
  <div id="app">
    <Header v-if="!this.$route.meta.hideHeader"></Header>
    <keep-alive include="index">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/header/header';
export default {
  name: 'App',
  created() {},
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import 'assets/sass/index';
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}
small {
  font-size: 12px;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
a {
  text-decoration: none !important;
}
.bar-input,
.cartoon-info {
  .ant-btn-primary {
    background-color: #f4815b !important;
    border-color: #f4815b;
  }
}
</style>
