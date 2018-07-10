<?php
/**
 * The template for displaying all single posts.
 *
 * @package understrap
 */

get_header();
$container   = get_theme_mod( 'understrap_container_type' );
?>

<div class="wrapper" id="single-wrapper">

	<div class="<?php echo esc_attr( $container ); ?>" id="content" tabindex="-1">

		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8 content-container">
				<div class="post-featured-image" style="background-image: url(<?php echo get_the_post_thumbnail_url( $post->ID, 'full' ); ?>)">
				</div>
			<main class="site-main" id="main">

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'loop-templates/content', 'single' ); ?>

						<?php understrap_post_nav(); ?>

					<?php
					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
					?>

				<?php endwhile; // end of the loop. ?>

			</main><!-- #main -->
			</div>
			<div class="col-md-2"></div>

		</div><!-- #primary -->

		<!-- Do the right sidebar check -->
		<!-- <?php get_template_part( 'global-templates/right-sidebar-check' ); ?> -->

	</div><!-- .row -->

</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
