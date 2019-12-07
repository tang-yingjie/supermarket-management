<template>
  <div>
    <div class="mask">
      <el-container>
        <el-header>后台管理系统</el-header>
        <el-main>
          <div class="box">
            <h3>欢迎登录</h3>
            <form>
              <select v-model="info.type">
                <option disabled>--请选择--</option>
                <option value="0">主管</option>
                <option value="1">物品管理员</option>
                <option value="2">财务</option>
              </select>
              <input type="text" v-model="info.name" placeholder="请输入用户名" />
              <input type="text" v-model="info.pass" placeholder="请输入密码" />
              <button @click="go">登录</button>
            </form>
          </div>
        </el-main>
      </el-container>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      info: {
        name: "",
        pass: "",
        type: "0"
      }
    };
  },
  methods: {
    go() {
      this.$http({
        url: "/api/login",
        method: "post",
        data: this.info
      })
        .then(res => {
          console.log(res.data, "res");
          let type=res.data.type
          if (res.data.code == "1") {
            this.$store.commit('changeType',type)
            this.$store.commit('changeUser',this.info.name)
            // console.log(this.$store.state,'store')
            this.$router.push("/index");
          } else {
            this.$message({
              message: "登录失败",
              type: "warning"
            });
          }
        })
        .catch(err => {
          console.log(err, "err");
        });
    }
  }
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

.el-main {
  background-color: #E0E2DB;
  color: #333;
  text-align: center;
  // line-height: 160px;
}

.box {
  width: 300px;
  height: 200px;
  background: #63989B;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  padding: 5px;
}

input, select {
  display: block;
  width: 80%;
  height: 25px;
  margin: 0 auto 5px;
}

button {
  width: 100px;
  height: 30px;
  border-radius: 25%;
  border: none;
  background: #6CA6CD;
}
</style>