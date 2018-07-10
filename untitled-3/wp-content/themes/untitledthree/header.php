<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Untitled_Three
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:400,700&amp;subset=latin-ext,vietnamese">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

	<header id="masthead" class="site-header">

		<!-- NAVIGATION -->

		<div class="nav-wrapper">
			<div class="container nav">
				<div class="logo"><h1>untitled³.studio</h1></div>
				<div class="menu-toggle"><img src="./images/menu.svg" alt=""></div>
			</div>
		</div>

		<!-- <div class="site-branding">
			< ?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="< ?php echo esc_url( home_url( '/' ) ); ?>" rel="home">< ?php bloginfo( 'name' ); ?></a></h1>
				< ?php
			else :
				?>
				<p class="site-title"><a href="< ?php echo esc_url( home_url( '/' ) ); ?>" rel="home">< ?php bloginfo( 'name' ); ?></a></p>
				< ?php
			endif;
			$untitledthree_description = get_bloginfo( 'description', 'display' );
			if ( $untitledthree_description || is_customize_preview() ) :
				?>
				<p class="site-description">< ?php echo $untitledthree_description; /* WPCS: xss ok. */ ?></p>
			< ?php endif; ?>
		</div><!-- .site-branding -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
