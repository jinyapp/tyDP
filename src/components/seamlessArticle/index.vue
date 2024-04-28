<!--
 描述: 稿件无缝滚动
-->

<template>
  <div class="wrap-container sn-container self-container"> 
    <div class="sn-content"> 
      <div class="sn-title">稿件审核播报</div> 
      <div class="sn-body"> 
        <div class="wrap-container">

          <div class="table">
            <table border="0" cellpadding="0" cellspacing="0" class="table-header">
              <tbody>
                <tr>
                  <td width="41%">
                    <span>标 题</span>
                  </td>
				  <td width="13%">
				    <span>审核进度</span>
				  </td>
                  <td width="13%">
                    <span>审核人</span>
                  </td>
                  <td width="13%">
                    <span>状态</span>
                  </td>
				  <td width="20%">
				    <span>创建/发布时间</span>
				  </td>
                </tr>
              </tbody>
            </table>

            <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting">
              <table border="0" cellpadding="0" cellspacing="0" class="item">
                <tbody>
                  <tr v-for="(item, index) in listData" :key="index">
                    <td width="55%" class="title">
                      <span>{{ item.title }}</span>
                    </td>
					<td width="13%" class="title">
					  <span>{{ item.shstate }}</span>
					</td>
					<td width="15%" class="title">
					  <span>{{ item.shman }}</span>
					</td>
					<td width="17%" class="title">
					  <span :class="{colorRed : item. state =='流转中', colorOrange : item.state == '初稿'}">{{ item.state }}</span>
					</td>
                    <td width="20%">
                      <span>{{ item.date }}</span>
                    </td>
     
                  </tr>
                </tbody>
            </table>
            </vue-seamless-scroll>
          </div>

        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: "seamlessArticle",
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
     listData: [
		 {
        title: '学习进行时丨总书记关心的中欧班列交出亮眼成绩单',
		shstate:'三审',
		shman:'赵建云',
		state:'已发布',
        date: '2024-04-27'
     },
	 {
	    title: '抓当前、谋未来，在推进中国式现代化进程中展现更大作为——习近平总书记在重庆考察时的重要讲话鼓舞人心、凝聚前行力量',
		shstate:'三审',
		shman:'赵建云',
		state:'已发布',
        date: '2024-04-27'
	 },
	 {
	    title: '凡人微光｜逆雨而行',
		shstate:'三审',
		shman:'赵建云',
		state:'已发布',
        date: '2024-04-27'
	 },
	 {
	    title: '全球500强航空工业巨头“牵手”山西',
	 		shstate:'一审',
	 		shman:'张金龙',
	 		state:'流转中',
	    date: '2024-04-19'
	 },
	 {
	    title: '首季中国经济热点问答丨建设全国统一大市场如何更好发力？',
		shstate:'三审',
		shman:'赵建云',
		state:'已发布',
        date: '2024-04-27'
	 },
	 {
	    title: '@太原中考特长生 5月6日报名别错过',
	 		shstate:'二审',
	 		shman:'刘明',
	 		state:'流转中',
	    date: '2024-04-27'
	 },
	 {
	    title: '山西“微短剧游百城”创作计划启动，这波流量你抓住了吗？',
	 		shstate:'二审',
	 		shman:'刘明',
	 		state:'流转中',
	    date: '2024-04-27'
	 },
	 {
	    title: 'CUBAL西北赛区战罢 山西5支球队晋级全国赛',
	 		shstate:'未审核',
	 		shman:'李晟恺',
	 		state:'初稿',
	    date: '2024-04-27'
	 }, {
        title: '一见·从城市更新行动，看总书记关心的民生要事',
	 		shstate:'未审核',
	 		shman:'齐江华',
	 		state:'初稿',
	    date: '2024-04-27'
     },
	 {
	    title: '太原市公开征集选拔第五届山西省职业技能大赛暨第三届全国技能大赛参赛队员、后备裁判的通知',
	 		shstate:'未审核',
	 		shman:'崔雅萱',
	 		state:'初稿',
	    date: '2024-04-27'
	 },
	 {
	    title: '五一假期去哪儿？剧院给你安排好啦！',
	 		shstate:'未审核',
	 		shman:'刘佳',
	 		state:'初稿',
	    date: '2024-04-27'
	 },
	 {
	    title: '2024-04-25  太原一卡通使用问题',
		shstate:'三审',
		shman:'赵建云',
		state:'已发布',
        date: '2024-04-27'
	 },
	 {
	    title: '任贤齐演唱会门票别弄丢！持票可免费游览太原8家景区',
	 		shstate:'二审',
	 		shman:'刘明',
	 		state:'流转中',
	    date: '2024-04-27'
	 },
	 {
	    title: '在锦绣太原“City walk”② 晋阳名城 联通古今',
	 		shstate:'二审',
	 		shman:'刘明',
	 		state:'流转中',
	    date: '2024-04-27'
	 },
	 {
	    title: '太原这几家“高颜值”书店！来了就不想走',
	 		shstate:'未审核',
	 		shman:'陈艺冰',
	 		state:'初稿',
	    date: '2024-04-27'
	 },
	 {
	    title: '“五一”假日 太原方特推出40余项游玩项目',
		shstate:'三审',
		shman:'赵建云',
		state:'已发布',
        date: '2024-04-27'
	 },
	 ]
    }
  },
  computed: {
　　optionSetting () {
      return {
        step: 0.3, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },  
  mounted() {
    
  },
  methods: {
    
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
	.sn-title {

	      font-size: 1.8em !important;
	      // color: #00c2ff;
	      // line-height: 26px;
	      // padding: 0 0 0 20px;
	      // left: 10px;
	      // right: 10px;
		  font-family: 'Montserrat', sans-serif;
	      top: 20px !important; 
		  letter-spacing: 0.1em;
			}
			.sn-body{
				top:2.5rem !important;
			}
.sn-container {
	position: relative;
	width: 100%;
	height: 100%;
	
	// width: 900px;
	// height: 800px;

  // left: 1000px;
  // top: 110px;

  %table-style {
    width: 100%;
    height: 80px;
    table-layout: fixed;
    tr {
      td {
        padding: 10px 4px;
        text-align: center;
        background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        color: #E2E5FF;
        font-size: 1.4rem;
		 letter-spacing: 0.14em;
      }
    }
  }
  .table {
    .table-header {
      @extend %table-style;
    }
    .seamless-warp {
      height: 800px;
      overflow: hidden;
      visibility: visible;
      .colorRed {
        color: #FF4669;
      }
      .colorOrange {
        color: #FFC956;
      }
      .item {
        height: auto;
        @extend %table-style;
        tr {
          td {
            &.title {
              text-overflow: ellipsis;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
