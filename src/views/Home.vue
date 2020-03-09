<template>
  <div class="home">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品列表</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item) in list" :key="item.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.img" class="image" />
          <div style="padding: 14px;">
            <h3>{{item.title}}</h3>
            <div class="price">
              ¥
              <b>{{item.price}}</b>
            </div>
            <el-button type="danger" size="mini" @click="addShop(item)">加入购物车</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          img: "http://localhost:8080/images/clothes01.jpg",
          title: "男式黑白格子衬衫",
          price: "169",
          count: 1
        },
        {
          id: 2,
          img: "http://localhost:8080/images/clothes02.jpg",
          title: "纯棉印花宽松长袖T恤",
          price: "69",
          count: 1
        },
        {
          id: 3,
          img: "http://localhost:8080/images/clothes03.jpg",
          title: "男士连帽夹克2019春季新款",
          price: "249",
          count:1
        },
        {
          id: 4,
         img: "http://localhost:8080/images/clothes04.jpg",
          title: "2019夏装新品时尚百搭",
          price: "49",
          count: 1
        }
      ]
    };
  },
  methods:{
    addShop(item){
      // console.log(item)

      this.$store.commit('addShop',item)
    }
  }
};
</script>
<style scoped>
.el-breadcrumb {
  margin: 10px 0;
}
.price b {
  font-size: 22px;
  padding-left: 10px;
}
.price {
  color: hotpink;
  font-size: 12px;
  margin-bottom: 5px;
}
h3 {
  margin: 10px 0;
  font-size: 14px;
}
.home {
  width: 900px;
  margin: 0 auto;
}
img {
  width: 100%;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

/* .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
} */
</style>
