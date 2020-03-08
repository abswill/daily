<template>
  <div class='wrapper'>lodash</div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Lodash',
  mounted() {
    // this.uniq();
    // this.uniqBy01();
    // this.uniqBy02();
  },
  methods: {
    // 数组方法: uniq, uniqBy, uniqWith;
    uniq() {
      const result = _.uniq([2, 1, 2]);
      console.log('uniq', result);
    },
    uniqBy01() {
      const result = _.uniqBy([2.1, 1.2, 2.33], Math.floor);
      console.log('uniqBy:', result);
    },
    uniqBy02() {
      const result = _.uniqBy(
        [{ x: 1 }, { x: 2 }, { x: 1 }, { x: 3 }, { x: 3 }],
        value => value.x,
      );
      console.log('uniqBy02:', result);
    },
    uniqWith() {
      const array = [
        { x: 0, y: 6 },
        { x: 5, y: 2 },
        { x: 3, y: 4 },
        { x: 5, y: 6 },
      ];
      const result = _.uniqWith(
        array,
        (arrVal, otherVal) => arrVal.X === otherVal.x,
      );
      console.log('uniqWith:', result);
    },
  },
};
</script>
