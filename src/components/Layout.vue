<template>
  <div>
    <Button
      @click="goback"
      class="back"
    >
      返回
    </Button>
    <slot></slot>
  </div>
</template>

<script>
import Button from '@/components/CButton.vue';

export default {
  name: 'layout',

  components: {
    Button,
  },

  methods: {
    goback() {
      this.$router.push({ path: '/home' });
    },
  },
};
</script>
<style lang='scss' scoped>
.back {
  margin-bottom: 30px;
}
</style>
