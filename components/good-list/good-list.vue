<template>
	<view>
		 <view class="goods_list">
		 		<view class="goods_item" v-for="item in goods">
		 			<image :src="item.img_url" mode=""></image>
		 			<view class="price">
		 				<text>￥{{item.sell_price}}</text>
		 				<text>￥{{item.market_price}}</text>
		 			</view>
		 			<view class="name">
		 				<text>{{item.title}}</text>
		 			</view>
		 		</view>
		 	</view>
		 	
		 </view>
	</view>
</template>

<script>
	export default {
		name:"goods-list",
		props:['goods'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
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
</style>
