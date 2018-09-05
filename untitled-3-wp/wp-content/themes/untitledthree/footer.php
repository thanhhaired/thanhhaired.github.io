<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Untitled_Three
 */

?>

	</div><!-- #content -->
</div><!-- #page -->

<footer id="footer">
<div class="container">
	<div class="row footer-links">
		<div class="col-6 col-sm-2">
			<?php wp_nav_menu( array( 'theme_location' => 'footer-menu-1', 'menu_class' => 'footer-menu' ) ); ?>
		</div>
		<div class="col-6 col-sm-2">
			<?php wp_nav_menu( array( 'theme_location' => 'footer-menu-2', 'menu_class' => 'footer-menu' ) ); ?>
		</div>
		<div class="col-sm-1 col-md-3"></div>
		<div class="col-12 col-sm-7 col-md-5">
			<?php dynamic_sidebar( 'footer_widget' ); ?>
		</div>
		</div>
	<div class="footer-copyright">
		<p><a href="mailto:hello@untitled3.studio">hello [at] untitled3.studio</a><br><a href="tel:0913755169">+84 (0) 913 755 169</a></p>
		<p>copyright [c] <?php echo date("Y"); ?> untitled ⎯ 3</p>
	</div>
</div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
