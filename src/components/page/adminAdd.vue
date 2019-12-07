<template>
  <div>
    <div class="main">
      <h2>新增管理员</h2>
      <el-form label-position="left" label-width="80px" :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" size="medium" style="width:100%">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限">
          <el-select v-model="form.type" size="medium" style="width:100%">
            <el-option label="物品管理员" value="1"></el-option>
            <el-option label="财务" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-button type="success" round @click="save">保存</el-button>
          <el-button type="danger" round @click="cancle">取消</el-button>
        </el-row>
      </el-form>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        pass: "",
        type:''
      }
    };
  },
  methods: {
    save() {
        this.$http({
        url: "/api/managersAdd",
        method: "post",
        data:this.form
      })
        .then(res => {
          this.$router.push('/admin')
          // console.log(res,'res')
         
        })
        .catch(err => {
          console.log(err, "err");
        });
      
    },
    cancle(){
      this.form={
        name: "",
        sex: "",
        pass: "",
        type:''
      }
    }
  }
};
</script>
<style lang="stylus">
.main {
  width: 80%;
  padding: 10px;
  background: #ADC1A4;
  color: black;
  margin: 0 auto;
}

h2 {
  line-height: 40px;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 3px;
}

.el-button.is-round {
    border-radius: 20px;
    padding: 15px 50px;
    margin  5px
}
</style>