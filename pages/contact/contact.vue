<template>
	<view class="contact">
		<image class="img" src="https://img1.baidu.com/it/u=3417930331,2765693697&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话: 440-123-6161（点击拨打）</view>
			<view>联系地址:云南省昆明市官渡区</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude":markers="covers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:104.196204,
				latitude:30.58544,
				scale:20,
				covers:[{
					longitude:104.196204,
					latitude:30.58544,
					iconPath:'../../static/icon/biaoji.png',
					width:30,
					height:30
				}]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber	:'13619667726'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}

	}

</style>
