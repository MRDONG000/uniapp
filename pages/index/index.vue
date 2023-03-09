<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers">
				<img :src="item.url" alt="">
			</swiper-item>
		</swiper>
	<!-- 导航区域 -->
	<view class="nav">
		<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
			<view :class="item.icon"></view>
			<text>{{item.title}}</text>
		</view>
	</view>
	<!-- 推荐商品区域 -->
<!-- 	<view class="hot_goods">
		<view class="tit">推荐商品</view>
		<view class="goods_list">
			<view class="goods_item">
				<image src="../../../SheJi/static/img/img1.jpg" mode=""></image>
				<view class="price">
					<text>￥2199</text>
					<text>￥2499</text>
				</view>
				<view class="name">
					<text>美味（鲜花饼） 今天只卖999 大卖特卖</text>
				</view>
			</view>
		</view>
		
	</view> -->
	<view class="hot_goods">
		<view class="tit">推荐商品</view>
		<goodsList :goods="hotgoods"></goodsList>
	</view>
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
				title: 'Hello',
				swipers:[],
				number:1,
				hotgoods:[],
				navs:[
					{
						icon:'iconfont icon-chaoshi',
						title:'七彩超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-lianxiwomen',
						title:'咨询我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'七彩视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
		  this.getSwiper()
			this.getHotGoods()
		},
		methods: {
		 // 获取轮播图的数据
			async getSwiper(){
			 // 第一种方法
			 // uni.request({
			 // 	url:'http://localhost/api/getlunbo',
				// success:(res)=>{
				// 	if(res.data.status !== 0){
				// 		return uni.showToast({
				// 			title:'获取数据失败'
				// 		})
				// 	}
				// 	let {data:res1} = res
				// 	console.log(res1);
				// 	this.swipers = res1.message
				// }
			 // })
			 
			 // ------------------------
			 // 第二种方法 函数前加async
			 // const res = await uni.request({
			 // 	url:'http://localhost/api/getlunbo',
			 // }) 
			 // console.log(res);
			 // ====-------------------------------
			 //现在要封装该方法，看util文件夹 ,封装是为了后期好维护
			 const res = await this.$myRequest({
				 url:'/api/getlunbo'
			 })
			 // console.log(res);
			 this.swipers = res.data.message
		 },
		 // 获取热门商品列表数据
		 async getHotGoods(){
			 const res = await this.$myRequest({
				 url:`/api/getgoods`
			 })
			 // console.log(res);
			 this.hotgoods = res.data.message
		 },
		 // 导航处理函数
		 navItemClick(url){
			 // console.log(url);
			 uni.navigateTo({
				 url
			 })
		 }
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav{
		display: flex;
		.nav_item{
			view{
				width: 110rpx;
				height: 110rpx;
				background-color: #b50e03;
				border-radius: 60rpx;
				margin: 10rpx auto;
				line-height: 120rpx;
				color: white;
				font-size: 50rpx;
			}
			.icon-shipin{
				font-size: 40rpx;
			}
			.icon-chaoshi{
				font-size: 60rpx;
			}
			width: 25%;
			text-align: center;
			font-size: 30rpx;
		}
	}
	.hot_goods{
		background-color: #eee;
		overflow: hidden;
		margin-top: 10px;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 7rpx 0;
		}
		.goods_list{
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods_item{
				background-color: #fff;
				padding: 15rpx;
				box-sizing: border-box;
				width: 355rpx;
				margin: 10rpx 0;
				image{
					width: 80%;
					height: 150px;
					display: block;
					margin: 0 auto;
				}
				.price{
					color: $shop-color;
					font-size: 36rpx;
					margin: 20rpx 0 10rpx 0;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 7rpx;
						text-decoration: line-through;
					}
				}
				.name{
					font-size: 28rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
			}
		}
	}
</style>
