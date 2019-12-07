<template>
  <div>
    <div class="mask">
      <el-container>
        <el-header>
          <!-- <h2>超市管理系统</h2>  -->
          超市管理系统
          <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <i @click="exit">欢迎你，admin</i>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
              <ll></ll>
          </el-aside>
          <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </div>
    
  </div>
</template>
<script>
import ll from './common/left'

export default {
    components:{
        ll,
    },
    methods: {
      exit(){
        console.log(123)
      }
    },
};
</script>
<style lang="stylus" scoped>
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #E0E2DB;
}

.el-header, .el-footer {
  background-color: #1D3344;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-header div{
  float right;
  height 50px;
  padding-top 10px; 
} 
.el-header div i{
  display inline-block;
  font-size 20px;
line-height 50px;
cursor pointer
} 
.el-main {
  background-color: #E0E2DB;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color:  #1D3344;
  color: #333;
  text-align: center;
  min-height: 800px;
}
</style>