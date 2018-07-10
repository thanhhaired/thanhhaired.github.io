<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

$the_theme = wp_get_theme();
$container = get_theme_mod( 'understrap_container_type' );
?>

<?php get_sidebar( 'footerfull' ); ?>

<div class="wrapper" id="wrapper-footer">

	<div class="<?php echo esc_attr( $container ); ?>">

		<div class="row">

			<div class="col-md-12">

				<footer class="site-footer" id="colophon">

					<div class="site-info">
							Bản quyền © 2018 thuộc về công ty Cát Tiên Sa.
					</div><!-- .site-info -->

				</footer><!-- #colophon -->

			</div><!--col end -->

		</div><!-- row end -->

	</div><!-- container end -->

</div><!-- wrapper end -->

</div><!-- #page we need this extra closing tag here -->

<script src="<?php echo get_template_directory_uri(); ?>/landing/js/jquery-3.3.1.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" charset="utf-8"></script>
<script src="<?php echo get_template_directory_uri(); ?>/landing/js/bootstrap.bundle.js" charset="utf-8"></script>
<?php wp_footer(); ?>
<script src="<?php echo get_template_directory_uri(); ?>/landing/js/function.js" charset="utf-8"></script>

</body>

</html>
