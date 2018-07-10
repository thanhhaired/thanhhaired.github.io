<?php
/**
 * Template Name: Landing EN
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
				<p>The Largest Media Groups In Vietnam</p>
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
						<p>Being a TV content creator and production house with special television contents. With ability to analyze market deeply, understand and always grasp the foundations, the trend of quality and modern of technology communication. Therefore, we can find the optimal solution to set up the channels (traditional and digital), along with the most effective business and marketing solutions.</p>
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
						<p>Being a leading service advertising supplier who can build up, brainstorm, plan and execute the plan for big groups relating to branding affirmation and characters.</p>
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
						<p>Owning a lot of leading platforms in South East Asia as well as other areas, such as CATS N1, CATS N2, CATS N3 etc. Owning and supplying Ad network to advertisers to manage, distribute advertising products with AI solutions to analyze ad campaigns in the best way.</p>
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
						<p>A multi-channel system, multi-content on the YouTube video platform, Facebook and other social networking systems. Owning the Viva Shows channel on YouTube with 1.3 million subscribers and wins the Gold Button. Owning more than 20 websites of big shows and other linking websites, which have number of visits approximately 5M/per month/ per website at high time. </p>
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
						<p>A leading and professional OTT platform which integrates 5 features: Live Channel, Live streaming, Video On Demand, Music, News. This is also a strong and effective tool for building up entertainment shows, marketing, advertising and collecting Big data. </p>
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
						<p>Be proud as an e-zine with a compelling content about entertainment, an informative channel that attracts millions of online readers every day. Leading the way in launching impressive press products such as Focus News, Saostar Special, Quá Giang.</p>
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
						<p>With the 19-year working experience and producing a lot of international reality shows, we discover, do training and supporting to develop careers as well as the reputation of celebrities in different fields.</p>
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
						<p>Catsgame is a young, new effective game publishing company in PC game, webgame and mobile game business. Now, we focus on mobile game and H5 game and expand our market to Taiwan and Southeast Asia (Indonesia, Malaysia, Thailand, Myanmar…).</p>
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
						<p>LA joint venture company with a big group in Eastern Europe especially in prize-giving business such as: casino, football or sport betting. Owning a lot of platforms serving for business fields mentioned above.</p>
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
			<p>Copyright © 2018 Cát Tiên Sa.</p><p>
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
