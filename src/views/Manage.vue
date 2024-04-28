<template>
	<div class="home-container">
		<div class="wrap" ref="editor">
			<div class="top"></div>
			<section class="mainbox">
				<div class="item left">
					<!-- 					<dynamicListArticle /> -->

				</div>
				<div class="item center">
					<div class="resume">
						<div class="resume-hd">
							<ul>
								<li>
									<countTo :startVal='startVal' :endVal='840000' :duration='6000' separator="">
									</countTo>
								</li>
								<li>
									<countTo :startVal='startVal' :endVal='198' :duration='6000' separator="">
									</countTo>
								</li>
								<li>
									<countTo :startVal='startVal' :endVal='7' :duration='6000' separator="">
									</countTo>
								</li>
							</ul>
						</div>
						<div class="resume-bd">
							<ul>
								<li>已发布稿件（单位：件数）</li>
								<li>新发布稿件（单位：件数）</li>
								<li>流转中稿件（单位：件数）</li>
							</ul>
						</div>
					</div>

					<seamlessArticle />
				</div>
				<div class="item right">
					<!-- 					<historyArticle /> -->
				</div>

				<!--     <dynamicList / -->>

			</section>
			<!-- 			<div class="divider"></div> -->

		</div>

	</div>
</template>

<script>
	import {
		screenSize
	} from '@/assets/js/utils'
	import '@/assets/js/flexible'
	import '@/assets/js/china'
	import countTo from 'vue-count-to'
	export default {
		name: 'Manage',
		components: {
			countTo
		},
		data() {
			return {

			}
		},
		computed: {

		},
		created() {},
		mounted() {
			screenSize(this.$refs.editor);
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.home-container {
		position: absolute;
		// left: 0;
		// top: 0;
		width: 100%;
		height: 100%;

		.wrap {


			// background: url(../assets/img/brand/bg.jpg) no-repeat #000;
			// background-size: cover;
			// line-height: 1.15;


			transform-origin: 0px 0px 0px;
			// background: url(../assets/img/bj.jpg) no-repeat;
			// background-size: contain;
			// background-position: 50% 0;
			// background-color: rgb(0, 0, 0);
			min-width: auto;
			width: 1920px;
			min-height: auto;
			height: 1080px;
			overflow: auto;

			.top {
				position: relative;
				// left: 0;
				// top: 0;
				// width: 100%;
				height: 80px;
				// height:1rem;
				background-color: transparent;
				background: url(../assets/img/top_nav.png) no-repeat;
				background-position: 65% 0;
				border: none;
				overflow: hidden;
			}

			.divider {
				position: absolute;
				left: 50px;
				top: 3253px;
				width: 90%;
				height: 50px;
				width: 300px;
				border: none;
				background: transparent;
			}

		}

		.wrap {
			background: url(../assets/img/brand/bg.jpg) no-repeat #000;
			background-size: cover;
			line-height: 1.15;

		}



	}

	.mainbox {
		min-width: 1024px;
		max-width: 1920px;
		padding: 0.125rem 0.125rem 0;
		display: flex;
		height: 1000px;
		;

		.item {
			flex: 0.1;

			// position: relative;
			&.center {
				flex: 3;
				margin: 0 0.125rem 0.1rem;
				overflow: hidden;

				.resume {
					background: rgba(101, 132, 226, 0.1);
					// padding: 0.1875rem;
					// margin: 0 0.125rem 0.1rem;
					overflow: hidden;
					height: 17%;

					.resume-hd {
						position: relative;
						border: 1px solid rgba(25, 186, 139, 0.17);
						display: flex;
						justify-content: center;
						align-items: center;
						height: 70%;
						letter-spacing: 0.3em;

						ul {
							display: flex;
							flex: 1;

							%li-line {
								content: "";
								position: absolute;
								height: 50%;
								width: 1px;
								background: rgba(255, 255, 255, 0.2);
								top: 25%;
							}

							li {
								position: relative;
								flex: 1;
								text-align: center;
								height: 1.2rem;
								line-height: 1.2rem;
								font-size: 1.8rem;
								color: #ffeb7b;
								padding: 0.05rem 0;
								font-family: 'DIGITALDREAMFAT';
								font-weight: bold;

								&:nth-child(2) {
									&:after {
										@extend %li-line;
										right: 0;
									}

									&:before {
										@extend %li-line;
										left: 0;
									}
								}
							}
						}

						&:before {
							content: "";
							position: absolute;
							width: 30px;
							height: 10px;
							border-top: 2px solid #02a6b5;
							border-left: 2px solid #02a6b5;
							top: 0;
							left: 0;
						}

						&:after {
							content: "";
							position: absolute;
							width: 30px;
							height: 10px;
							border-bottom: 2px solid #02a6b5;
							border-right: 2px solid #02a6b5;
							right: 0;
							bottom: 0;
						}
					}

					.resume-bd {
						ul {
							display: flex;
							letter-spacing: 0.1em;

							li {
								flex: 1;
								height: 0.5rem;
								line-height: 0.5rem;
								text-align: center;
								font-size: 1.0rem;
								color: rgba(255, 255, 255, 0.7);
								padding-top: 0.125rem;
							}
						}
					}
				}


			}


		}

	}
</style>