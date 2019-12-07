<template>
  <div>
    <div class="add">
      <h2>商品入库登记</h2>
      <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="入库时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%"></el-date-picker>
         
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="进价">
          <el-input v-model="form.inPrice"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-select v-model="form.units" placeholder="请选择商品单位" size="medium" style="width:100%">
            <el-option label="个" value="个"></el-option>
            <el-option label="件" value="件"></el-option>
            <el-option label="盒" value="盒"></el-option>
            <el-option label="包" value="包"></el-option>
            <el-option label="瓶" value="瓶"></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="售价">
          <el-input v-model="form.outPrice"></el-input>
        </el-form-item>
          <el-form-item label="进货量">
          <el-input v-model="form.counts"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-select v-model="form.type" placeholder="请选择商品类型" size="medium" style="width:100%">
            <el-option label="糕点" value="糕点"></el-option>
            <el-option label="膨化食品" value="膨化食品"></el-option>
            <el-option label="水果" value="水果"></el-option>
            <el-option label="坚果" value="坚果"></el-option>
            <el-option label="饮料" value="饮料"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">确定</el-button>
          <el-button @click="cancle">取消</el-button>
        </el-form-item>
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
        type: "",
        date: "",
        units: '',
        inPrice: "",
        outPrice: "",
        counts:''
      }
    };
  },
  filters:{
    
  },
  methods: {
    toTime(n){
      // console.log(this.form.date,'nnnn')
    let date=new Date(n)
    let year= date.getFullYear()
    let month=date.getMonth()+1>=10?(date.getMonth()+1):'0'+ (date.getMonth()+1)
    let day=date.getDate()>=10?(date.getDate()):'0'+ date.getDate()
    return `${year}-${month}-${day}`
    },
     save() {
      let n= this.form.date.getTime()
      this.form.date=this.toTime(n)
        this.$http({
        url: "/api/goodsAdd",
        method: "post",
        data:this.form
      })
        .then(res => {
        
          this.$router.push('/goods')
         
        })
        .catch(err => {
          console.log(err, "err");
        });
      
    },
    cancle(){
      this.form={
       name: "",
        type: "",
        date1: "",
        units: '',
        inPrice: "",
        outPrice: "",
        counts:''
      }
    }
  }
};
</script>
<style lang="stylus">
.add {
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
  margin: 5px;
}
</style>