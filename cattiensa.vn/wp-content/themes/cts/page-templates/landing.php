<?php
/**
 * Template Name: Landing
 *
 * Template for displaying a blank page.
 *
 * @package understrap
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title"
		content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/landing/css/jquery.fullPage.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/landing/css/style.css">
</head>
<body id="landing-page">


		<div id="mobile-products-menu" class="active">
			<span><i class="fa fa-remove"></i></span>
			<div class="mobile-products-menu-wrapper">
				<a href="<?php echo get_site_url(); ?>/#cattiensa-productions"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cts-productions.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#cats-advertising"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-advertising.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#cats-digital-marketing"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-digital-marketing.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#viva-network"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-network.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#viva-tv"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-tv.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#saostar"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/saostar.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#vmelody"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vmelody.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#cats-game"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cats-game.svg"></a>
				<a href="<?php echo get_site_url(); ?>/#vvs"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vvs.svg"></a>
			</div>
		</div>

	<nav class="navbar navbar-expand-md navbar-light navbar-cattiensa">
		<div class="container" >

				<?php if ( ! has_custom_logo() ) { ?>

					<?php if ( is_front_page() && is_home() ) : ?>

						<h1 class="navbar-brand mb-0"><a rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" itemprop="url"><?php bloginfo( 'name' ); ?></a></h1>

					<?php else : ?>

						<a class="navbar-brand" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" itemprop="url"><?php bloginfo( 'name' ); ?></a>

					<?php endif; ?>


				<?php } else {
					the_custom_logo();
				} ?>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!-- The WordPress Menu goes here -->
			<?php wp_nav_menu(
				array(
					'theme_location'  => 'primary',
					'container_class' => 'collapse navbar-collapse',
					'container_id'    => 'navbarNavDropdown',
					'menu_class'      => 'navbar-nav',
					'fallback_cb'     => '',
					'menu_id'         => 'main-menu',
					'walker'          => new understrap_WP_Bootstrap_Navwalker(),
				)
			); ?>
		</div><!-- .container -->
	</nav><!-- .site-navigation -->

	<div id="products-menu">
		<a href="<?php echo get_site_url(); ?>/#cattiensa-productions"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cts-productions.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#cats-advertising"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-advertising.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#cats-digital-marketing"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-digital-marketing.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#viva-network"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-network.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#viva-tv"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-tv.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#saostar"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/saostar.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#vmelody"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vmelody.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#cats-game"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-game.svg"></a>
		<a href="<?php echo get_site_url(); ?>/#vvs"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vvs.svg"></a>
	</div>

	<div id="fullpage">
		<section data-anchor="home" class="section-home active">
			<div class="container">
				<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cattiensa-groups.svg" alt="">
				<p>Tập đoàn Truyền thông Hàng đầu Việt Nam</p>
			</div>
		</section>
		<section data-anchor="cattiensa-productions" class="section-cattiensa-productions">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cts-productions.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>CÁT TIÊN SA<br>PRODUCTIONS<br></h2>
						<span class="divider"></span>
						<p>Là nhà thiết kế và tổ chức sản xuất của các kênh truyền hình cũng như các nội dung truyền hình riêng biệt. Có khả năng nhận định phân tích sâu sắc thị trường. Hiểu biết và luôn nắm bắt được những nền tảng, xu thế công nghệ truyền thông chất lượng và hiện đại. Từ đó tìm ra được những giải pháp tối ưu nhằm định dạng những kênh truyền hình (truyền thống và digital), cùng với các phương án kinh doanh & marketing hiệu quả nhất.</p>
						<p class="landing-learnmore"><a href="cts-productions">Tìm hiểu thêm </a> <i class="fas fa-angle-right"></i></p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="cats-advertising" class="section-cats-advertising">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cats-advertising.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>CATS ADVERTISING<br></h2>
						<span class="divider"></span>
						<p>Là nhà cung cấp các dịch vụ quảng cáo hàng đầu. Có khả năng xây dựng, cung cấp ý tưởng độc đáo, lên kế hoạch và triển khai kế hoạch thực hiện cho các tập đoàn, công ty lớn về định vị thương hiệu, xây dựng cá tính thương hiệu v.v</p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="cats-digital-marketing" class="section-cats-digital-marketing">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cats-digital-marketing.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>CATS DIGITAL<br />MARKETING<br></h2>
						<span class="divider"></span>
						<p>Sở hữu và cung cấp công cụ Adnetwork giúp nhà quảng cáo có thể quản trị, phân phối các sản phẩm quảng cáo đã được tích hợp các giải pháp trí tuệ nhân tạo, để phân tích tối ưu nhất các chiến dịch quảng cáo.</p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="viva-network">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/viva-network.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>VIVA NETWORK<br></h2>
						<span class="divider"></span>
						<p>Là hệ thống đa kênh, đa nội dung trên các nền tảng video Youtube, Facebook và hệ thống các mạng xã hội khác. Sở hữu kênh Vivashow nút vàng trên Youtube với 1,3M người đăng ký. Sở hữu trên 20 website các chương trình và của các website vệ tinh khác, trong đó cao điểm có thể lên đến 5 triệu visit/ 1 tháng/ 1 website.</p>
						<p class="landing-learnmore"><a href="viva-network">Tìm hiểu thêm </a> <i class="fas fa-angle-right"></i></p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="viva-tv">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/viva-tv.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>VIVA TV<br></h2>
						<span class="divider"></span>
						<p>Là sản phẩm OTT hàng đầu, được tích hợp bởi 05 chức năng: Live Channel, Live streaming, Video On Demand, Music, News. Bước phát triển tiếp theo sẽ là tích hợp thương mại điện tử (E-commerce), Game online, kết nối với cổng thanh toán điện tử.</p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="saostar">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/saostar.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>SAOSTAR<br></h2>
						<span class="divider"></span>
						<p>Tạp chí điện tử với nội dung tổng hợp với thế mạnh về giải trí, kênh thông tin thu hút hàng triệu độc giả online mỗi ngày. Ngoài ra, Saostar còn xây dựng mạng lưới những chuyên mục vệ tinh khác như:  Saostar tin nóng muôn nơi, Saostar Tài chính, Saostar Sport, Saostar Phụ nữ, Saostar Du lịch, Saostar khám phá - ẩm thực, Saostar Love Win (cộng đồng LGBT)...</p>
						<p class="landing-learnmore"><a href="saostar">Tìm hiểu thêm </a> <i class="fas fa-angle-right"></i></p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="vmelody">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/vmelody.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>VMELODY<br></h2>
						<span class="divider"></span>
						<p>Với bề dày hoạt động 19 năm cùng với việc thực hiện rất nhiều những chương trình truyền hình thực tế nổi tiếng trên Thế giới. Từ đó đã phát hiện, đào tạo và tạo điều kiện phát triển nghề nghiệp cũng như nổi tiếng của rất nhiều nghệ sỹ trong nhiều lĩnh vực khác nhau.</p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="cats-game" class="section-cats-game">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cats-game.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>CATS GAME<br></h2>
						<span class="divider"></span>
						<p>CATS Game là nhà phát hành game trẻ tập trung vào game trên điện thoại và mở rộng thị trường ra Đài Loan và Đông Nam Á. Với phương châm “Làm game mới, học điều mới”, chúng tôi tạo ra những sản phẩm tốt nhất những khách hàng của chúng tôi.</p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
		<section data-anchor="vvs">
			<div class="container">
				<div class="row landing-content">
					<div class="col-md-1"></div>
					<div class="col-md-5 featured">
						<img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/vvs.svg" alt="">
					</div>
					<div class="col-md-5 info">
						<h2>VVS<br></h2>
						<span class="divider"></span>
						<p>Là công ty liên doanh với tập đoàn hàng đầu Đông Âu trong ngành dịch vụ kinh doanh giải trí có thưởng: casino, cá cược bóng đá, thể thao. Cung cấp dịch vụ tin nhắn SMS 2 chiều, cho phép các foanh nghiệp thực hiện các chương trình tương tác với khách hàng thông qua cổng kết nối với tổng đài tin nhắn của nhà mạng viễn thông di động. </p>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</section>
	</div>
	<div class="landing-menu">
		<ul id="landing-menu" class="container">
			<a href="#cattiensa-productions">
				<li data-menuanchor="cattiensa-productions" data-toggle="tooltip" data-placement="top" title="Cat Tien Sa Productions">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cts-productions.svg" alt=""></div>
					<p>CatTienSa<br />Productions</p>
				</li>
			</a>
			<a href="#cats-advertising" data-toggle="tooltip" data-placement="top" title="CATS Advertising">
				<li data-menuanchor="cats-advertising">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-advertising.svg" alt=""></div>
					<p>CATS
						<br />Advertising</p>
				</li>
			</a>
			<a href="#cats-digital-marketing" data-toggle="tooltip" data-placement="top" title="CATS Digital Networking">
				<li data-menuanchor="cats-digital-marketing">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-digital-marketing.svg" alt=""></div>
					<p>CATS
						<br />Digital Marketing</p>
				</li>
			</a>
			<a href="#viva-network" data-toggle="tooltip" data-placement="top" title="VIVA Network">
				<li data-menuanchor="viva-network">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-network.svg" alt=""></div>
					<p>VIVA
						<br>Network</p>
				</li>
			</a>
			<a href="#viva-tv" data-toggle="tooltip" data-placement="top" title="VIVA TV">
				<li data-menuanchor="viva-tv">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-tv.svg" alt=""></div>
					<p>VIVA TV</p>
				</li>
			</a>
			<a href="#saostar" data-toggle="tooltip" data-placement="top" title="SAOStar">
				<li data-menuanchor="saostar">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/saostar.svg" alt=""></div>
					<p>SAOStar</p>
				</li>
			</a>
			<a href="#vmelody" data-toggle="tooltip" data-placement="top" title="VMelody">
				<li data-menuanchor="vmelody">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vmelody.svg" alt=""></div>
					<p>V Melody</p>
				</li>
			</a>
			<a href="#cats-game" data-toggle="tooltip" data-placement="top" title="CATS Game">
				<li data-menuanchor="cats-game">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-game.svg" alt=""></div>
					<p>CATS
						<br />Game</p>
				</li>
			</a>
			<a href="#vvs" data-toggle="tooltip" data-placement="top" title="VVS">
				<li data-menuanchor="vvs">
					<div class="landing-menu-icon"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vvs.svg" alt=""></div>
					<p>VVS</p>
				</li>
			</a>
		</ul>
	</div>

	<div class="landing-footer">
		<div class="container">
			<p>Bản quyền © 2018 thuộc về công ty Cát Tiên Sa.</p><p>
		</div>
	</div>

	<?php wp_footer(); ?>

		<!-- JavaScript -->
		<script src="<?php echo get_template_directory_uri(); ?>/landing/js/jquery-3.3.1.js" charset="utf-8"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" charset="utf-8"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/landing/js/bootstrap.bundle.js" charset="utf-8"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/landing/js/jquery.fullPage.js" charset="utf-8"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/landing/js/function.js" charset="utf-8"></script>
		<script charset="utf-utf-8" type="text/javascript">
		$(".custom-logo-link").attr("href", "#home")
		</script>
</body>
</html>
