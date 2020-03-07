<template>
  <div class='wrapper'>lodash</div>
</template>

<script>
// https://juejin.im/post/5d1c7b7f6fb9a07eeb13c3a8
import _ from 'lodash';

export default {
  name: 'Lodash',
  data() {
    return {
      //   array01: [2,1,2]
      // }
    };
  },
  mounted() {
    this.uniq();
    this.uniqBy01();
    this.uniqBy02();
    this.uniqWith();
    this.pick();
    this.pickBy();
    this.omit();
    this.omitBy();
    this.mapValues();
    this.mapKeys();
    this.merge();
  },
  methods: {
    // 数组方法；
    uniq() {
      const result = _.uniq([2, 1, 2]);
      console.log('uniq:', result);
    },
    uniqBy01() {
      const result = _.uniqBy([2.1, 1.2, 2.33], Math.floor);
      console.log('uniqBy01:', result);
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
      const result = _.uniqWith(array, (arraVal, otherVal) => arraVal.x === otherVal.x);
      console.log('uniqWith:', result);
    },
    // 对象方法；
    pick() {
      const obj = {
        a: 1, b: '2', c: 3, d: '99',
      };
      const res = _.pick(obj, ['a', 'c', 'd']);
      console.log('pick:', res);
    },
    pickBy() {
      const obj = { a: 1, b: '2', c: 'uu' };
      const res = _.pickBy(obj, value => _.isNumber(value));
      console.log('pickBy:', res);
    },
    omit() {
      const obj = { a: 1, b: '2', c: 3 };
      const res = _.omit(obj, ['a', 'c']);
      console.log('omit:', res);
    },
    omitBy() {
      const obj = { a: 1, b: '2', c: 3 };
      const res = _.omitBy(obj, value => _.isNumber(value));
      console.log('omitBy:', res);
    },
    mapValues() {
      const users = {
        fred: { user: 'fred', age: 40 },
        pebbles: { user: 'pebbles', age: 1 },
      };
      const res = _.mapValues(users, value => value.age);
      console.log('mapValues:', res);
    },
    mapKeys() {
      const obj = { a: 1, b: 2 };
      const res = _.mapKeys(obj, (value, key) => key + value);
      console.log('mapKeys:', res);
    },
    merge() {
      const users = {
        data: [{ user: 'barney' }, { user: 'fred' }, { lll: 'fred' }],
      };
      const ages = {
        data: [{ age: 36 }, { age: 40 }, { sss: 40 }],
      };
      const res = _.merge(users, ages);
      console.log('merge:', res);
    },
  },
};
</script>

<style scoped>
.wrapper {
}
</style>
