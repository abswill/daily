<template>
  <div class="home">
    <div id="nav">
      <router-link class="link" to="/daily01">【第1~6期】lodash的常用方法</router-link>
      <router-link class="link" to="/daily07">【第7期】这样清除浮动你知道么</router-link>
    </div>
    </div>
  </div>
</template>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.link {
  display: block;
  margin-top: 10px;
}
</style>
