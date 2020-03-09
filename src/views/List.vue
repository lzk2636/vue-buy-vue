<template>
  <div class="list">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/list">购物车</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="list" style="width: 100%">
      <el-table-column label="名称" width="180" prop="title"></el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.img" />
        </template>
      </el-table-column>
      <el-table-column label="数量" width="180">
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.count"
            size="small"
            @change="handleChange(scope.row)"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="单价" prop="price"></el-table-column>
      <el-table-column label="总价">
        <template slot-scope="scope">
          <span>{{scope.row.price*scope.row.count}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="total_price">
      总价：￥
      <span>{{allPrice}}</span>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      list: [],
      allPrice: 0
    };
  },
  created() {
    this.getState();
  },
  methods: {
    getState() {
      this.list = this.$store.state.list;
    },
    handleChange(value) {
      // console.log(value);
      this.$store.commit("addCount", value);
    },
    handleDelete({ id }) {
      this.$store.commit("delete", id);
      this.list = this.$store.state.list;
    }
  },
  watch: {
    list: {
      handler(news) {
        if (news) {
          // console.log("sss");
          this.allPrice = 0;
          this.list.forEach(item => {
            this.allPrice += item.price * item.count;
          });
        }
      },
      deep:true
    }
  }
};
</script>
<style scoped>
.total_price span {
  font-size: 25px;
  color: #f80;
  padding: 0 20px 0 5px;
}
.total_price {
  width: 900px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #dfe6ec;
  border-top: 0px;
  margin: 0px auto 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
}
.el-breadcrumb {
  margin: 10px 0;
}
.list {
  width: 900px;
  margin: 0 auto;
}
img {
  width: 100px;
  height: 120px;
}
</style>