<template>
	<view class="goods_list">
		 <goodsList :goods="goods"></goodsList>
		 <view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from '@/components/good-list/good-list'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				goods:[],
				flag:false
			}
		},
		methods: {
			// 获取商品列表的数据
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:'/api/getgoods'
				})
				this.goods = res.data.message
				// 如果callBack存在就调用不存在就不调用
				callBack && callBack()
				// 如果有第二页的数据,之前的数据+res.data.message
				// this.goods = [...this.goods,...res.data.message]
			},
		},
		onLoad(){
			this.getGoodsList()
		},
		onReachBottom(){
			console.log('触底了');
			// 获取第二页的数据，后台没写第二页就不获取了
			// this.pageindex++
			// 如果<6代表没有下一页的数据了，因此可以直接返回flage没有必要再去请求了
			// if(this.goods.length<6)return this.flag=true
			this.flag=true
		},
		// 下拉刷新
		onPullDownRefresh(){
			console.log("下拉刷新了");
			this.goods=[]
			this.flag=false
			setTimeout(()=>{
				this.getGoodsList(()=>{
						uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background-color: #eee;
	}
  .isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background-color: #fff;
		font-size: 28rpx
	}
</style>
