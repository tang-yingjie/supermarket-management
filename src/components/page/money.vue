<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%" v-show="!flag">
      <!-- <el-table-column prop="name" label="商品名" width="180"></el-table-column> -->
      <el-table-column
        prop="date"
        label="时间"
        sortable
        width="180"
        column-key="date"
        :filters="time"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="reason" label="原因" width="180"></el-table-column>
      <el-table-column prop="people" label="负责人" width="100"></el-table-column>
      <el-table-column prop="counts" label="金额/元" width="100"></el-table-column>
      <el-table-column
        prop="type"
        label="资金流动类型"
        width="150"
        :filters="kind"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag>{{scope.row.type}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-form ref="form" :model="form" label-width="80px" v-show="flag">
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
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      tableData: [
       
      ],
      form: {
        // index: "",
        // name: "",
        // type: "",
        // date1: "",
        // units: "",
        // inPrice: "",
        // outPrice: "",
        // counts: ""
      },
      kind: [
        { text: "支出", value: "支出" },
        { text: "收入", value: "收入" },
      ],
      time: [
       
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      this.flag = !this.flag;
       this.form=row
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$http({
        url: "/api/moneysDel",
        method: "post",
        data:this.tableData[index]
      })
        .then(res => {
          this.tableData.splice(index,1)
          this.$message({
          message: '删除成功',
          type: 'success'
        });
          console.log(res,'res')
         
        })
        .catch(err => {
          console.log(err, "err");
        });
      console.log(index, row);
     
    },
    // formatter(row, column) {
    //   return row.inPrice;
    // },
    filterTag(value, row) {
      return row.type === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    save() {
      this.flag = !this.flag;
      console.log(this.form,'ffff')
       this.$http({
        url: "/api/moneysUp",
        method: "post",
        data:this.form
      })
        .then(res => {
          this.$message({
          message: '更新成功',
          type: 'success'
        });
          console.log(res,'res')
         
        })
        .catch(err => {
          console.log(err, "err");
        });
    },
    cancle() {
      this.flag = !this.flag;
    }
  },
  mounted() {
     this.$http({
        url: "/api/money",
        method: "get",
      })
        .then(res => {
          this.tableData=res.data
          this.tableData.map((item,i)=>{
            this.time.push({ text:item.date, value:item.date })
          })
          console.log(this.time,'timeee')
          // console.log(res.data,'res')
          console.log(this.tableData,'data')
        })
        .catch(err => {
          console.log(err, "err");
        });
  },
};
</script>
<style lang="stylus"></style>