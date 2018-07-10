<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package understrap
 */

$container = get_theme_mod( 'understrap_container_type' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo get_template_directory_uri(); ?>/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


	<div id="mobile-products-menu" class="active">
		<span><i class="fa fa-remove"></i></span>
		<div class="mobile-products-menu-wrapper">
			<a href="<?php echo get_site_url(); ?>/cts-productions"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cts-productions.svg"></a>
			<a href="<?php echo get_site_url(); ?>/cats-advertising"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-advertising.svg"></a>
			<a href="<?php echo get_site_url(); ?>/cats-digital-marketing"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/cats-digital-marketing.svg"></a>
			<a href="<?php echo get_site_url(); ?>/viva-network"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-network.svg"></a>
			<a href="<?php echo get_site_url(); ?>/viva-tv"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/viva-tv.svg"></a>
			<a href="<?php echo get_site_url(); ?>/saostar"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/saostar.svg"></a>
			<a href="<?php echo get_site_url(); ?>/v-melody"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vmelody.svg"></a>
			<a href="<?php echo get_site_url(); ?>/cats-game"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/logo/cats-game.svg"></a>
			<a href="<?php echo get_site_url(); ?>/vvs"><img src="<?php echo get_template_directory_uri(); ?>/landing/images/landing/logo-menu/vvs.svg"></a>
		</div>
	</div>

<div class="hfeed site" id="page">

	<!-- ******************* The Navbar Area ******************* -->
<div class="wrapper-fluid wrapper-navbar" id="wrapper-navbar" itemscope itemtype="http://schema.org/WebSite">

		<a class="skip-link screen-reader-text sr-only" href="#content"><?php esc_html_e( 'Skip to content', 'understrap' ); ?></a>

		<nav class="navbar navbar-expand-md navbar-light navbar-cattiensa">

		<?php if ( 'container' == $container ) : ?>
			<div class="container" >
		<?php endif; ?>

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
			<?php if ( 'container' == $container ) : ?>
			</div><!-- .container -->
			<?php endif; ?>

		</nav><!-- .site-navigation -->

	</div><!-- .wrapper-navbar end -->
	<div class="navbar-spacer"></div>


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
