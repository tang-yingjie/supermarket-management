<template>
  <div id="data">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("data"));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "本周商品营业额",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}元 ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["膨化食品", "坚果", "糕点", "水果", "日化"]
      },
      series: [
        {
          name: "商品分类",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 1035, name: "膨化食品" },
            { value: 810, name: "坚果" },
            { value: 534, name: "糕点" },
            { value: 435, name: "水果" },
            { value: 548, name: "日化" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>
<style lang="stylus">
#data {
  width: 600px
  height: 500px
  margin 40px auto
}
</style>