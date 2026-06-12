<?php
add_action( 'admin_menu', 'vehicle_rental_getting_started' );
function vehicle_rental_getting_started() {
	add_theme_page( esc_html__('Get Started', 'vehicle-rental'), esc_html__('Get Started', 'vehicle-rental'), 'edit_theme_options', 'vehicle-rental-guide-page', 'vehicle_rental_test_guide');
}

// Add a Custom CSS file to WP Admin Area
function vehicle_rental_admin_theme_style() {
   wp_enqueue_style('custom-admin-style', esc_url(get_template_directory_uri()) . '/inc/get-started/get-started.css');
}
add_action('admin_enqueue_scripts', 'vehicle_rental_admin_theme_style');

//guidline for about theme
function vehicle_rental_test_guide() { 
	//custom function about theme customizer
	$return = add_query_arg( array()) ;
	$theme = wp_get_theme( 'vehicle-rental' );
?>
	<div class="wrapper-outer">
		<div class="left-main-box">
			<div class="intro"><h3><?php echo esc_html( $theme->Name ); ?></h3></div>
			<div class="left-inner">
				<div class="about-wrapper">
					<div class="col-left">
						<p><?php echo esc_html( $theme->get( 'Description' ) ); ?></p>
					</div>
					<div class="col-right">
						<img role="img" src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/get-started/images/screenshot.png" alt="" />
					</div>
				</div>
				<div class="link-wrapper">
					<h4><?php esc_html_e('Important Links', 'vehicle-rental'); ?></h4>
					<div class="link-buttons">
						<a class="visit-btn" href="<?php echo esc_url( home_url() ); ?>" target="_blank"><?php esc_html_e('Visit Site', 'vehicle-rental'); ?></a>
						<a href="<?php echo esc_url( vehicle_rental_THEME_DOC ); ?>" target="_blank"><?php esc_html_e('Free Setup Guide', 'vehicle-rental'); ?></a>
						<a href="<?php echo esc_url( VEHICLE_RENTAL_SUPPORT ); ?>" target="_blank"><?php esc_html_e('Support Forum', 'vehicle-rental'); ?></a>
						<a href="<?php echo esc_url( VEHICLE_RENTAL_PRO_DEMO ); ?>" target="_blank"><?php esc_html_e('Live Demo', 'vehicle-rental'); ?></a>
						<a href="<?php echo esc_url( VEHICLE_RENTAL_PRO_THEME_DOC ); ?>" target="_blank"><?php esc_html_e('Pro Setup Guide', 'vehicle-rental'); ?></a>
					</div>
				</div>
				<div class="support-wrapper">
					<div class="editor-box">
						<i class="dashicons dashicons-admin-appearance"></i>
						<h4><?php esc_html_e('Theme Customization', 'vehicle-rental'); ?></h4>
						<p><?php esc_html_e('Effortlessly modify & maintain your site using editor.', 'vehicle-rental'); ?></p>
						<div class="support-button">
							<a class="button button-primary" href="<?php echo esc_url( admin_url( 'site-editor.php' ) ); ?>" target="_blank"><?php esc_html_e('Site Editor', 'vehicle-rental'); ?></a>
						</div>
					</div>
					<div class="support-box">
						<i class="dashicons dashicons-microphone"></i>
						<h4><?php esc_html_e('Need Support?', 'vehicle-rental'); ?></h4>
						<p><?php esc_html_e('Go to our support forum to help you in case of queries.', 'vehicle-rental'); ?></p>
						<div class="support-button">
							<a class="button button-primary" href="<?php echo esc_url( VEHICLE_RENTAL_SUPPORT ); ?>" target="_blank"><?php esc_html_e('Get Support', 'vehicle-rental'); ?></a>
						</div>
					</div>
					<div class="review-box">
						<i class="dashicons dashicons-star-filled"></i>
						<h4><?php esc_html_e('Leave Us A Review', 'vehicle-rental'); ?></h4>
						<p><?php esc_html_e('Are you enjoying Our Theme? We would Love to hear your Feedback.', 'vehicle-rental'); ?></p>
						<div class="support-button">
							<a class="button button-primary" href="<?php echo esc_url( VEHICLE_RENTAL_REVIEW ); ?>" target="_blank"><?php esc_html_e('Rate Us', 'vehicle-rental'); ?></a>
						</div>
					</div>
				</div>
			</div>
			<div class="go-premium-box">
				<h4><?php esc_html_e('Why Go For Premium?', 'vehicle-rental'); ?></h4>
				<ul class="pro-list">
					<li><?php esc_html_e('Advanced Customization Options', 'vehicle-rental');?></li>
					<li><?php esc_html_e('One-Click Demo Import', 'vehicle-rental');?></li>
					<li><?php esc_html_e('WooCommerce Integration & Enhanced Features', 'vehicle-rental');?></li>
					<li><?php esc_html_e('Performance Optimization & SEO-Ready', 'vehicle-rental');?></li>
					<li><?php esc_html_e('Premium Support & Regular Updates', 'vehicle-rental');?></li>
				</ul>
			</div>
		</div>
		<div class="right-main-box">
			<div class="right-inner">
				<div class="pro-boxes">
					<h4><?php esc_html_e('Get Theme Bundle', 'vehicle-rental'); ?></h4>
					<p><?php esc_html_e('80+ Premium WordPress Themes', 'vehicle-rental'); ?></p>
					<p class="main-bundle-price" ><strong class="cancel-bundle-price"><?php esc_html_e('$2340', 'vehicle-rental'); ?></strong><span class="bundle-price"><?php esc_html_e('$86', 'vehicle-rental'); ?></span></p>
					<img role="img" src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/get-started/images/bundle.png" alt="bundle image" />
					<p><?php esc_html_e('SUMMER SALE: ', 'vehicle-rental'); ?><strong><?php esc_html_e('Extra 20%', 'vehicle-rental'); ?></strong><?php esc_html_e(' OFF on WordPress Theme Bundle Use Code: ', 'vehicle-rental'); ?><strong><?php esc_html_e('“HEAT20”', 'vehicle-rental'); ?></strong></p>
					<a href="<?php echo esc_url( VEHICLE_RENTAL_PRO_THEME_BUNDLE ); ?>" target="_blank"><?php esc_html_e('Get Theme Bundle For ', 'vehicle-rental'); ?><span><?php esc_html_e('$86', 'vehicle-rental'); ?></a>
				</div>
				<div class="pro-boxes pro-theme-container">
					<h4><?php esc_html_e('Vehicle Rental Pro', 'vehicle-rental'); ?></h4>
					<p class="pro-theme-price" ><?php esc_html_e('$39', 'vehicle-rental'); ?></p>
					<img role="img" src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/get-started/images/premium.png" alt="premium image" />
					<p><?php esc_html_e('SUMMER SALE: ', 'vehicle-rental'); ?><strong><?php esc_html_e('Extra 25%', 'vehicle-rental'); ?></strong><?php esc_html_e(' OFF on WordPress Block Themes! Use Code: ', 'vehicle-rental'); ?><strong><?php esc_html_e('“SUMMER25”', 'vehicle-rental'); ?></strong></p>
					<a href="<?php echo esc_url( VEHICLE_RENTAL_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Upgrade To Pro At Just at $29.25', 'vehicle-rental'); ?></a>
				</div>
				<div class="pro-boxes last-pro-box">
					<h4><?php esc_html_e('View All Our Themes', 'vehicle-rental'); ?></h4>
					<img role="img" src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/get-started/images/all-themes.png" alt="all themes image" />
					<a href="<?php echo esc_url( VEHICLE_RENTAL_PRO_ALL_THEMES ); ?>" target="_blank"><?php esc_html_e('View All Our Premium Themes', 'vehicle-rental'); ?></a>
				</div>
			</div>
		</div>
	</div>
<?php } ?>