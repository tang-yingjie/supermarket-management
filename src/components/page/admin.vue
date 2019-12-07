<template>
  <div>
    <el-table :data="tableData" style="width: 100%" v-show="!flag">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="编号" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row._id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>性别: {{ scope.row.sex }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.sex }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="权限" width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>性别: {{ scope.row.type }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.type }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="密码" width="200">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>密码: {{ scope.row.pass }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.pass }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row) " :plain="true" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-form label-position="left" label-width="80px" :model="form" v-show="flag">
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
        <el-button type="danger" round @click='cancle'>取消</el-button>
      </el-row>
    </el-form>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      flag:false,
      tableData: [
      ],
      multipleSelection: [],
      form: {
       
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      this.flag=!this.flag
      // this.form.name=row.name
      // this.form.sex=row.sex
      // this.form.pass=row.pass
      // this.form.index=index
      this.form=row
      // console.log(this.form,'formedit')
      console.log(index, row);
    },
    handleDelete(index, row) {
      // this.tableData = this.tableData.filter(item => item.id !== this.tableData[index].id)
      // this.$message({
      //     message: '恭喜你，这是一条成功消息',
      //     type: 'success'
      //   });
      // console.log(index, row);
       this.$http({
        url: "/api/managersDel",
        method: "post",
        data:this.tableData[index]
      })
        .then(res => {
          // this.$router.push('/admin')
         
          this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.$router.go(0)
          console.log(res,'res')
         
        })
        .catch(err => {
          console.log(err, "err");
        });
      console.log(index, row);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    save(){
      this.flag=!this.flag
      console.log(this.form,'form')
       this.$http({
        url: "/api/managersUp",
        method: "post",
        data:this.form
      })
        .then(res => {
          // this.$router.push('/admin')
         
          this.$message({
          message: '更新成功',
          type: 'success'
        });
        // this.$router.go(0)
          console.log(res,'res')
         
        })
        .catch(err => {
          console.log(err, "err");
        });
      // console.log(index, row);

    },
    cancle(){
      this.flag=!this.flag
    }
  },
  mounted() {
     this.$http({
        url: "/api/managers",
        method: "get",
      })
        .then(res => {
          this.tableData=res.data
          console.log(res,'res')
        })
        .catch(err => {
          console.log(err, "err");
        });
  },
};
</script>
<style lang="stylus"></style>