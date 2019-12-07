<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#1D3344"
          text-color="#fff"
          active-text-color="#F18805"
        >
          <el-submenu index="1" v-if="type==0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>人员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/admin">人员列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/adminAdd">新增人员</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2" v-if="type==1||type==0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/goods">商品列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/goodsAdd">新增商品</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3" v-if="type==2||type==0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>资金管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link to="/money">资金流动</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link to="/moneyAdd">新增资金</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <router-link to="/data">营业总额</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data() {
    return {
      type:''
    };
  },
  mounted() {
    this.type=this.$store.state.type
    console.log(this.$store.state,'lll')
  },
};
</script>
<style lang="stylus">
.el-col {
  width: 100%;
  border: none;
}

el-submenu__title a {
  color: white;
}
</style>