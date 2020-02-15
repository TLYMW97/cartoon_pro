<template>
  <li class="operate-item">
    <a href="#">
      <div class="icon">
        <svg
          t="1579681006388"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4763"
          width="200"
          height="200"
        >
          <path
            d="M512 1024c-69.1 0-136.1-13.5-199.3-40.3C251.7 957.9 197 921 150 874c-47-47-83.9-101.7-109.7-162.7C13.5 648.1 0 581.1 0 512s13.5-136.1 40.3-199.3C66.1 251.7 103 197 150 150c47-47 101.7-83.9 162.7-109.7C375.9 13.5 442.9 0 512 0s136.1 13.5 199.3 40.3C772.3 66.1 827 103 874 150c47 47 83.9 101.7 109.7 162.7 26.7 63.2 40.3 130.2 40.3 199.3s-13.5 136.1-40.3 199.3C957.9 772.3 921 827 874 874c-47 47-101.7 83.9-162.7 109.7-63.2 26.8-130.2 40.3-199.3 40.3z m0-888.6c-100.6 0-195.2 39.2-266.3 110.3S135.4 411.4 135.4 512s39.2 195.2 110.3 266.3c71.1 71.1 165.7 110.3 266.3 110.3 100.6 0 195.2-39.2 266.3-110.3S888.6 612.6 888.6 512c0-100.6-39.2-195.2-110.3-266.3-71.1-71.1-165.7-110.3-266.3-110.3z"
            p-id="4764"
          />
          <path
            d="M512.3 576.3c-35.3 0-64-28.7-64-64V259.5c0-35.3 28.7-64 64-64s64 28.7 64 64v252.8c0 35.4-28.7 64-64 64z"
            p-id="4765"
          />
          <path
            d="M765.4 512.4c0 35.3-28.7 64-64 64H512.1c-35.3 0-64-28.7-64-64s28.7-64 64-64h189.4c35.3 0 63.9 28.7 63.9 64z"
            p-id="4766"
          />
        </svg>
      </div>
      <p>{{name}}</p>
    </a>
  </li>
</template>

<script>
export default {
  name: 'li-icon',
  props: {
    name: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.operate-item {
  margin-left: 30px !important;
  a {
    color: #999;
  }
}
p {
  margin-top: 5px;
  margin-bottom: 0;
}
.operate-item a {
  margin: 0 auto;
}
.operate-item p {
  font-size: $small-font;
  text-align: center;
}
.icon {
  width: $large-font;
  height: $large-font;
  margin: 0 auto;
  background-repeat: no-repeat;
}
</style>