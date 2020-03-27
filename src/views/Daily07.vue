<template>
  <layout>
    <div class="box clear">
      <img src="../assets/small_01.jpg">
    </div>
    <div>footer</div>
  </layout>
</template>
<script>
import layout from '@/components/Layout.vue';
// [3/1-1] https://www.cssworld.cn/

export default {
  name: 'Daily07',

  components: {
    layout,
  },
};
</script>
<style scoped lang='scss'>
.box {
    padding: 10px;
    background-color: #cd0000;
}
.box > img {
    float: left;
}

.clear:after {
    content: "";
    display: block; // table list-item
    clear: both;
}
</style>
