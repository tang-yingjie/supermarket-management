<template>
  <div>
    <div class="add">
      <h2>资金登记</h2>
      <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%"></el-date-picker>
      </el-form-item>
      <el-form-item label="原因">
        <el-input v-model="form.reason"></el-input>
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="form.people"></el-input>
      </el-form-item>
      <el-form-item label="金额">
        <el-input v-model="form.counts"></el-input>
      </el-form-item>
      <el-form-item label="流动类型">
        <el-select v-model="form.type" placeholder="资金流动类型" size="medium" style="width:100%">
          <el-option label="支出" value="支出"></el-option>
          <el-option label="收入" value="收入"></el-option>
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
        date:'',
        people:'',
        reason:'',
        counts:'',
        type:''
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
      // console.log(this.toTime(n),'nnnnnnnnn')
      this.form.date=this.toTime(n)
        this.$http({
        url: "/api/moneysAdd",
        method: "post",
        data:this.form
      })
        .then(res => {
        
          this.$router.push('/money')
         
        })
        .catch(err => {
          console.log(err, "err");
        });
      
    },
    cancle(){
      this.form={
        date:'',
        people:'',
        reason:'',
        counts:'',
        type:''
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