<template>
  <div id="app">
    <div class="main_wrap">
      <img src="./assets/images/banner.png" />
      <div class="menu">
        <el-button type="success" class="btn" style="margin-left:15px" @click="$router.push('/')">商品列表</el-button>

        <el-button type="success" @click="$router.push('/list')">购物车 ({{sss}})</el-button>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return{
      all: this.$store.state.list,
      allcount:0
    }
  },
  created(){
    console.log(this.$store.state.list)
  },
  methods:{

  },
  computed:{
    sss(){
      let allCounts=0
      // console.log(this.$store.state.list)
      if(this.$store.state.list.length>0){
        // return allCounts
        this.$store.state.list.forEach(element => {
          allCounts+=element.count
        });

      }
      return allCounts
    }
  }
}
</script>

<style>
.main_wrap {
  width: 900px;
  margin: 0px auto;
}
img {
  width: 100%;
}
.menu {
  width: 900px;
  height: 60px;
  margin: 10px auto;
  background-color: #d9eeec;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.btn {
  margin-left: 15px;
}
</style>
