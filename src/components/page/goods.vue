<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%" v-show="!flag">
      <!-- <el-table-column prop="name" label="商品名" width="180"></el-table-column> -->
      <el-table-column
        prop="date"
        label="进货时间"
        sortable
        width="180"
        column-key="date"
        :filters="time"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="name" label="商品名" width="180"></el-table-column>
      <el-table-column prop="inPrice" label="进价/元" width="100"></el-table-column>
      <el-table-column prop="units" label="单位" width="80"></el-table-column>
      <el-table-column prop="outPrice" label="售价/元" width="100"></el-table-column>
      <el-table-column prop="counts" label="库存" width="120"></el-table-column>
      <el-table-column
        prop="type"
        label="商品类型"
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
        { text: "糕点", value: "糕点" },
        { text: "膨化食品", value: "膨化食品" },
        { text: "水果", value: "水果" },
        { text: "坚果", value: "坚果" },
        { text: "饮料", value: "饮料" },
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
        url: "/api/goodsDel",
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
    formatter(row, column) {
      return row.inPrice;
    },
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
        url: "/api/goodsUp",
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
        url: "/api/goods",
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