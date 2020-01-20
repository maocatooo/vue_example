<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router>
      <Navbars :navMenus="menuData"></Navbars>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
    import Navbars from "./components/Navbars";

    export default {
        components: {
            Navbars: Navbars
        },
        data() {
            return {
                activeIndex2: '2',
                menuData: [{
                    "rowId": 1,
                    "parentId": -1,
                    "name": "ico",
                    "route": "home/index.ico",
                    "childItems": []
                }, {"rowId": 2, "parentId": -1, "name": "首页", "route": "home/index", "childItems": []}, {
                    "rowId": 3,
                    "parentId": -1,
                    "name": "处理中心",
                    "route": "home/handleCenter",
                    "childItems": []
                }, {
                    "rowId": 4,
                    "parentId": -1,
                    "name": "任务中心",
                    "route": "home/task",
                    "childItems": [{
                        "rowId": 5,
                        "parentId": 4,
                        "name": "优化",
                        "route": "home/task/Benefit",
                        "childItems": []
                    }, {
                        "rowId": 6,
                        "parentId": 4,
                        "name": "查询",
                        "route": "home/task/query",
                        "childItems": []
                    }, {
                        "rowId": 7,
                        "parentId": 4,
                        "name": "权重",
                        "route": "home/task/weight",
                        "childItems": []
                    }, {"rowId": 8, "parentId": 4, "name": "伪原创", "route": "home/originalFalse", "childItems": []}]
                }, {
                    "rowId": 9,
                    "parentId": -1,
                    "name": "查询",
                    "route": "home/querySeo",
                    "childItems": []
                }, {
                    "rowId": 10,
                    "parentId": -1,
                    "name": "权重查询",
                    "route": "home/queryWeight",
                    "childItems": []
                }, {
                    "rowId": 11,
                    "parentId": -1,
                    "name": "数据分析",
                    "route": "home/report",
                    "childItems": []
                }, {
                    "rowId": 12,
                    "parentId": -1,
                    "name": "在线工具",
                    "route": "home/tool",
                    "childItems": [{
                        "rowId": 13,
                        "parentId": 12,
                        "name": "MarkDown",
                        "route": "home/too/markdown",
                        "childItems": []
                    }]
                }, {"rowId": 14, "parentId": -1, "name": "站长资讯", "route": "home/news", "childItems": []}]
            };
        }
        ,
        methods: {
            handleSelect() {

            }
        }
    };
</script>

<style>
  .el-menu--horizontal > div > .el-submenu {
    float: left;
  }

  /* 一级菜单的样式 */
  .el-menu--horizontal > div > .el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
  }

  /* 解决下图1 下拉三角图标 */
  .el-menu--horizontal > div > .el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 8px;
    margin-top: -3px;
  }

  /* 解决下图2 无下拉菜单时 不对齐问题 */
  .el-menu--horizontal > div > .el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #909399;
  }
</style>
