<template>
  <div class="side-bar">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          active-text-color="#409eff"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-s-home" />
            <span slot="title">帝可得</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <div class="order">
                <i class="el-icon-tickets" />
                <span>工单管理</span>
              </div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">运营工单</el-menu-item>
              <el-menu-item index="2-2">运维工单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <div class="order">
                <i class="el-icon-location-information" />
                <span>点位管理</span></div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">区域管理</el-menu-item>
              <el-menu-item index="3-2">点位管理</el-menu-item>
              <el-menu-item index="3-3">合作商管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <div class="order">
                <i class="el-icon-setting" />
                <span>设备管理</span></div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">设备管理</el-menu-item>
              <el-menu-item index="4-2">设备状态</el-menu-item>
              <el-menu-item index="4-3">设备类型管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <div class="order">
                <i class="el-icon-user" />
                <span>人员管理</span></div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">人员列表</el-menu-item>
              <el-menu-item index="5-2">人效统计</el-menu-item>
              <el-menu-item index="5-3">工作量列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <div class="order">
                <i class="el-icon-receiving" />
                <span>商品管理</span></div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">商品类型</el-menu-item>
              <el-menu-item index="6-2">商品管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="7">
            <i class="el-icon-magic-stick" />
            <span slot="title">策略管理</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-document" />
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="9">
            <i class="el-icon-money" />
            <span slot="title">对账统计</span>
          </el-menu-item>
        </el-menu>
      </el-col>

    </el-row>

    <!-- <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message" />导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu" />导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting" />导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside> -->

    <!-- <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140" />
          <el-table-column prop="name" label="姓名" width="120" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </el-main>
    </el-container> -->
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style lang="scss" scoped>
.side-bar {
    width: 195px;
    height: 100%;
    background-color: #fff;
    height: calc(100vh - 60px);
    overflow: auto;
    &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    }
}
 .order {
     padding: 0 0 !important;
 }
 .el-menu{
    border-right: none;
    width: 182px;
    min-height: 100%;

 }
.el-menu-item {
    min-width: 170px;
}
</style>
<style lang="scss" scoped>
   ::v-deep .el-menu-item-group__title{
      padding: 0;
  }
  .el-menu-item-group{
    .el-menu-item{
    padding-left: 50px !important;
    color: #999;
  }
  }
  ::v-deep .el-submenu__icon-arrow {
   display: block !important;
}
.is-active{
  .el-submenu__title{
    span{
      color:#409eff ;
    }
  }
}
</style>

