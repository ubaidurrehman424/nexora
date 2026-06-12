<?php
/**
 * Vehicle Rental functions and definitions
 *
 * @package vehicle-rental
 * @since 1.0
 */

if ( ! function_exists( 'vehicle_rental_support' ) ) :
	function vehicle_rental_support() {

		load_theme_textdomain( 'vehicle-rental', get_template_directory() . '/languages' );

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		add_theme_support('woocommerce');

		// Enqueue editor styles.
		add_editor_style(get_stylesheet_directory_uri() . '/assets/css/editor-style.css');

		/* Theme Credit link */
		define('VEHICLE_RENTAL_BUY_NOW',__('https://www.cretathemes.com/products/car-rental-wordpress-theme','vehicle-rental'));
		define('VEHICLE_RENTAL_PRO_DEMO',__('https://pattern.cretathemes.com/vehicle-rental-pro/','vehicle-rental'));
		define('vehicle_rental_THEME_DOC',__('https://pattern.cretathemes.com/free-guide/vehicle-rental/','vehicle-rental'));
		define('VEHICLE_RENTAL_PRO_THEME_DOC',__('https://pattern.cretathemes.com/pro-guide/vehicle-rental-pro/','vehicle-rental'));
		define('VEHICLE_RENTAL_SUPPORT',__('https://wordpress.org/support/theme/vehicle-rental/','vehicle-rental'));
		define('VEHICLE_RENTAL_REVIEW',__('https://wordpress.org/support/theme/vehicle-rental/reviews/#new-post','vehicle-rental'));
		define('VEHICLE_RENTAL_PRO_THEME_BUNDLE',__('https://www.cretathemes.com/products/wordpress-theme-bundle','vehicle-rental'));
		define('VEHICLE_RENTAL_PRO_ALL_THEMES',__('https://www.cretathemes.com/collections/wordpress-block-themes','vehicle-rental'));
	}

endif;

add_action( 'after_setup_theme', 'vehicle_rental_support' );

if ( ! function_exists( 'vehicle_rental_styles' ) ) :
	function vehicle_rental_styles() {
		// Register theme stylesheet.
		$vehicle_rental_theme_version = wp_get_theme()->get( 'Version' );

		$vehicle_rental_version_string = is_string( $vehicle_rental_theme_version ) ? $vehicle_rental_theme_version : false;
		wp_enqueue_style(
			'vehicle-rental-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$vehicle_rental_version_string
		);

		wp_enqueue_style( 'dashicons' );

		wp_enqueue_style( 'animate-css', esc_url(get_template_directory_uri()).'/assets/css/animate.css' );

		wp_enqueue_script( 'jquery-wow', esc_url(get_template_directory_uri()) . '/assets/js/wow.js', array('jquery') );

		wp_style_add_data( 'vehicle-rental-style', 'rtl', 'replace' );

		//font-awesome
		wp_enqueue_style( 'fontawesome', get_template_directory_uri() . '/inc/fontawesome/css/all.css'
			, array(), '7.0.0' );

		wp_enqueue_style( 
			'owl.carousel-style', 
			get_template_directory_uri().'/assets/css/owl.carousel.css' 
		);

		wp_enqueue_script( 
			'owl.carousel-js', 
			get_template_directory_uri(). '/assets/js/owl.carousel.js', 
			array('jquery') ,
			true
		);

		// Enqueue Custom Script
		wp_enqueue_script(
		    'vehicle-rental-custom-script',
		    get_template_directory_uri() . '/assets/js/custom-script.js',
		    array('jquery'),
		    $vehicle_rental_version_string,
		    true
		);
	}
endif;

add_action( 'wp_enqueue_scripts', 'vehicle_rental_styles', 100 );

function wpdocs_dequeue_script() {
	    wp_dequeue_script( 'cretats-admin-owl-carousel' );

	    wp_dequeue_script( 'cretats-public-owl-carousel' );
	    wp_dequeue_script( 'owl-carousel' );
}
add_action( 'wp_print_scripts', 'wpdocs_dequeue_script', 100 );

/* Enqueue admin-notice-script js */
add_action('admin_enqueue_scripts', function ($hook) {
    if ($hook !== 'appearance_page_vehicle-rental') return;

    wp_enqueue_script('admin-notice-script', get_template_directory_uri() . '/get-started/js/admin-notice-script.js', ['jquery'], null, true);
    wp_localize_script('admin-notice-script', 'pluginInstallerData', [
        'ajaxurl'     => admin_url('admin-ajax.php'),
        'nonce'       => wp_create_nonce('install_cretatestimonial_nonce'), // Match this with PHP nonce check
        'redirectUrl' => admin_url('themes.php?page=vehicle-rental-guide-page'),
    ]);
});

add_action('wp_ajax_check_creta_testimonial_activation', function () {
    include_once ABSPATH . 'wp-admin/includes/plugin.php';
    $vehicle_rental_plugin_file = 'creta-testimonial-showcase/creta-testimonial-showcase.php';

    if (is_plugin_active($vehicle_rental_plugin_file)) {
        wp_send_json_success(['active' => true]);
    } else {
        wp_send_json_success(['active' => false]);
    }
});


// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

// Add block styles
require get_template_directory() . '/inc/block-styles.php';

// Block Filters
require get_template_directory() . '/inc/block-filters.php';

// Svg icons
require get_template_directory() . '/inc/icon-function.php';

// TGM
require_once get_template_directory() . '/inc/tgm/tgm.php';

// Customizer
require get_template_directory() . '/inc/customizer.php';

// Get Started.
require get_template_directory() . '/inc/get-started/get-started.php';

// Add Getstart admin notice
function vehicle_rental_admin_notice() { 
    global $pagenow;
    $theme_args      = wp_get_theme();
    $meta            = get_option( 'vehicle_rental_admin_notice' );
    $name            = $theme_args->__get( 'Name' );
    $current_screen  = get_current_screen();

    if( !$meta ){
	    if( is_network_admin() ){
	        return;
	    }

	    if( ! current_user_can( 'manage_options' ) ){
	        return;
	    } if($current_screen->base != 'appearance_page_vehicle-rental-guide-page' && $current_screen->base != 'toplevel_page_cretats-theme-showcase' ) { ?>

	    <div class="notice notice-success dash-notice">
	        <h1><?php esc_html_e('Hey, Thank you for installing Vehicle Rental Theme!', 'vehicle-rental'); ?></h1>
	        <p> <a href="javascript:void(0);" id="install-activate-button" class="button admin-button info-button get-start-btn">
				   <?php echo __('Navigate Getstart', 'vehicle-rental'); ?>
				</a>

				<script type="text/javascript">
				document.getElementById('install-activate-button').addEventListener('click', function () {
				    const vehicle_rental_button = this;
				    const vehicle_rental_redirectUrl = '<?php echo esc_url(admin_url("themes.php?page=vehicle-rental-guide-page")); ?>';
				    // First, check if plugin is already active
				    jQuery.post(ajaxurl, { action: 'check_creta_testimonial_activation' }, function (response) {
				        if (response.success && response.data.active) {
				            // Plugin already active — just redirect
				            window.location.href = vehicle_rental_redirectUrl;
				        } else {
				            // Show Installing & Activating only if not already active
				            vehicle_rental_button.textContent = 'Navigate Getstart';

				            jQuery.post(ajaxurl, {
				                action: 'install_and_activate_creta_testimonial_plugin',
				                nonce: '<?php echo wp_create_nonce("install_activate_nonce"); ?>'
				            }, function (response) {
				                if (response.success) {
				                    window.location.href = vehicle_rental_redirectUrl;
				                } else {
				                    alert('Failed to activate the plugin.');
				                    vehicle_rental_button.textContent = 'Try Again';
				                }
				            });
				        }
				    });
				});
				</script>


	        	<a class="button button-primary site-edit" href="<?php echo esc_url( admin_url( 'site-editor.php' ) ); ?>"><?php esc_html_e('Site Editor', 'vehicle-rental'); ?></a> 
				<a class="button button-primary buy-now-btn" href="<?php echo esc_url( VEHICLE_RENTAL_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Buy Pro', 'vehicle-rental'); ?></a>
				<a class="button button-primary bundle-btn" href="<?php echo esc_url( VEHICLE_RENTAL_PRO_THEME_BUNDLE ); ?>" target="_blank"><?php esc_html_e('Get Bundle', 'vehicle-rental'); ?></a>
	        </p>
	        <p class="dismiss-link"><strong><a href="?vehicle_rental_admin_notice=1"><?php esc_html_e( 'Dismiss', 'vehicle-rental' ); ?></a></strong></p>
	    </div>
	    <?php

	}?>
	    <?php

	}
}

add_action( 'admin_notices', 'vehicle_rental_admin_notice' );


add_action('admin_bar_menu', 'your_plugin_adminbar_link', 100);
function your_plugin_adminbar_link($wp_admin_bar) {
    $wp_admin_bar->add_node([
        'id'    => 'yourplugin_upgrade',
        'title' => ' Upgrade to Pro',
        'href'  => 'https://www.cretathemes.com/products/car-rental-wordpress-theme',
        'meta'  => array(
            'target' => '_blank',
        )
    ]);
}

if( ! function_exists( 'vehicle_rental_update_admin_notice' ) ) :
/**
 * Updating admin notice on dismiss
*/
function vehicle_rental_update_admin_notice(){
    if ( isset( $_GET['vehicle_rental_admin_notice'] ) && $_GET['vehicle_rental_admin_notice'] = '1' ) {
        update_option( 'vehicle_rental_admin_notice', true );
    }
}
endif;
add_action( 'admin_init', 'vehicle_rental_update_admin_notice' );

//After Switch theme function
add_action('after_switch_theme', 'vehicle_rental_getstart_setup_options');
function vehicle_rental_getstart_setup_options () {
    update_option('vehicle_rental_admin_notice', FALSE );
}