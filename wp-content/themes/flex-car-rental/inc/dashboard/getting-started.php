<?php
/**
 * Getting Started
 *
 */

if( ! function_exists( 'flex_car_rental_getting_started_menu' ) ) :
/**
 * Adding Getting Started Page in admin menu
 */
function flex_car_rental_getting_started_menu(){

	add_theme_page(
		__( 'Get Started', 'flex-car-rental' ),
		__( 'Getting Started', 'flex-car-rental' ),
		'manage_options',
		'flex-car-rental-getting-started',
		'flex_car_rental_getting_started_page'
	);
}
endif;
add_action( 'admin_menu', 'flex_car_rental_getting_started_menu' );

if( ! function_exists( 'flex_car_rental_getting_started_admin_scripts' ) ) :
/**
 * Load Getting Started styles in the admin
 */
function flex_car_rental_getting_started_admin_scripts(){
    wp_enqueue_style( 'flex-car-rental-getting-started', get_stylesheet_directory_uri() . '/inc/dashboard/css/getting-started.css', false);
    wp_enqueue_script( 'updates' );
}
endif;
add_action( 'admin_enqueue_scripts', 'flex_car_rental_getting_started_admin_scripts' );

if( ! function_exists( 'flex_car_rental_getting_started_page' ) ) :
/**
 * Callback function for admin page.
*/
function flex_car_rental_getting_started_page(){ ?>
	<div class="wrap getting-started">
		<h2 class="notices"></h2>
		<div class="flex-dashboard-container">
			<div class="inner-tab-box">
				<?php require get_theme_file_path() . '/inc/dashboard/tabs/start-dashboard.php'; ?>
			</div>
		</div><!-- flex-container -->
	</div><!-- .getting-started -->
	<?php
}
endif;

/**
 * Banner Notice
 */
function flex_car_rental_admin_notice() {
    // Check if the notice is dismissed
    $dismissed = get_user_meta(get_current_user_id(), 'flex_car_rental_dismissed_notice', true);

    // Display the notice only if not dismissed
    if (!$dismissed) {
        ?>
         <div class="notice is-dismissible notice-getstarted-flex-lite" data-notice="get-start" >
			<div class="inner-notice-lite">
				    <div class="inner-content-lite">
					    <h2><?php esc_html_e('🎉 Thank you for activating the Flex Free WordPress Theme!', 'flex-car-rental'); ?></h2>
                    </div>
					<div class="notice-button-lite">
                        <span><a href="javascript:void(0);" id="install-activate-getstarted" class="button admin-button info-button">
							<?php echo esc_html('Import Demo', 'flex-car-rental'); ?>
						</a></span>
						<script type="text/javascript">
						document.getElementById('install-activate-getstarted').addEventListener('click', function () {
							const flex_car_rental_button_banner = this;
							const flex_car_rental_redirectUrl = '<?php echo esc_url(admin_url("admin.php?page=fleximp-template-importer")); ?>';
							// First, check if plugin is already active
							jQuery.post(ajaxurl, { action: 'check_flex_import_activation' }, function (response) {
								if (response.success && response.data.active) {
									// Plugin already active — just redirect
									window.location.href = flex_car_rental_redirectUrl;
								} else {
									// Show Installing & Activating only if not already active
									flex_car_rental_button_banner.textContent = 'Installing & Activating...';

									jQuery.post(ajaxurl, {
										action: 'install_and_activate_flex_import_plugin_lite',
										nonce: '<?php echo wp_create_nonce("install_activate_nonce"); ?>'
									}, function (response) {
										if (response.success) {
											window.location.href = flex_car_rental_redirectUrl;
										} else {
											alert('Failed to activate the plugin.');
											flex_car_rental_button_banner.textContent = 'Try Again';
										}
									});
								}
							});
						});
						</script>

						<span><a href="<?php echo esc_url( FLEX_CAR_RENTAL_BUY_NOW ); ?>" target="_blank" id="go-pro-button" class="button admin-button buy-now-button"><?php echo esc_html('Upgrade Pro', 'flex-car-rental'); ?></a></span>

						<span><a href="<?php echo esc_url( FLEX_CAR_RENTAL_LIVE_DEMO ); ?>" target="_blank" id="bundle-button" class="button admin-button bundle-button"><?php echo esc_html('Live Demo', 'flex-car-rental'); ?></a></span>

						<span><a href="<?php echo esc_url( FLEX_CAR_RENTAL_DOCUMENTATION ); ?>" target="_blank" id="doc-button" class="button admin-button bundle-button"><?php echo esc_html('Documentation', 'flex-car-rental'); ?></a></span>
					</div>
			</div>
        </div>
        <?php
    }
}

/* Theme Setup */
if ( ! function_exists( 'flex_car_rental_admin_notice_setup' ) ) :

function flex_car_rental_admin_notice_setup() {

	global $pagenow;

	if (is_admin() && ('themes.php' == $pagenow) && isset( $_GET['activated'] )) {
		add_action('admin_notices', 'flex_car_rental_admin_notice');
	}
}
endif;
add_action( 'after_setup_theme', 'flex_car_rental_admin_notice_setup' );

add_action('wp_ajax_install_and_activate_flex_import_plugin_lite', 'install_and_activate_flex_import_plugin_lite');

function install_and_activate_flex_import_plugin_lite() {
    // Verify nonce for security
    if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'install_activate_nonce')) {
        wp_send_json_error(['message' => 'Nonce verification failed.']);
    }

    // Define plugin slugs and file paths
    $flex_car_rental_elementor_slug = 'elementor';
    $flex_car_rental_elementor_file = 'elementor/elementor.php';
    $flex_car_rental_elementor_url  = 'https://downloads.wordpress.org/plugin/elementor.latest-stable.zip';

    $flex_car_rental_flex_importer_slug = 'flex-import';
    $flex_car_rental_flex_importer_file = 'flex-import/flex-import.php';
    $flex_car_rental_flex_importer_url  = 'https://downloads.wordpress.org/plugin/flex-import.latest-stable.zip';

    // Include necessary WordPress files
    include_once ABSPATH . 'wp-admin/includes/plugin.php';
    include_once ABSPATH . 'wp-admin/includes/file.php';
    include_once ABSPATH . 'wp-admin/includes/misc.php';
    include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
    include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

    $flex_car_rental_upgrader = new Plugin_Upgrader(new Automatic_Upgrader_Skin());

    // Step 1: Install and activate WooCommerce if not active
    if (!is_plugin_active($flex_car_rental_elementor_file)) {
        $flex_car_rental_installed_plugins = get_plugins();

        if (!isset($flex_car_rental_installed_plugins[$flex_car_rental_elementor_file])) {
            // Install WooCommerce
            $flex_car_rental_install_wc = $flex_car_rental_upgrader->install($flex_car_rental_elementor_url);
            if (is_wp_error($flex_car_rental_install_wc)) {
                wp_send_json_error(['message' => 'WooCommerce installation failed.']);
            }
        }

        // Activate WooCommerce
        $flex_car_rental_activate_wc = activate_plugin($flex_car_rental_elementor_file);
        if (is_wp_error($flex_car_rental_activate_wc)) {
            wp_send_json_error(['message' => 'WooCommerce activation failed.', 'error' => $flex_car_rental_activate_wc->get_error_message()]);
        }
    }

    // Step 2: Install and activate Flex Importer plugin
    if (!is_plugin_active($flex_car_rental_flex_importer_file)) {
        $flex_car_rental_installed_plugins = get_plugins();

        if (!isset($flex_car_rental_installed_plugins[$flex_car_rental_flex_importer_file])) {
            // Install Flex Importer plugin
            $flex_car_rental_install_wc_plugin = $flex_car_rental_upgrader->install($flex_car_rental_flex_importer_url);
            if (is_wp_error($flex_car_rental_install_wc_plugin)) {
                wp_send_json_error(['message' => 'Flex Importer plugin installation failed.']);
            }
        }

        // Activate Flex Importer plugin
        $flex_car_rental_activate_wc_plugin = activate_plugin($flex_car_rental_flex_importer_file);
        if (is_wp_error($flex_car_rental_activate_wc_plugin)) {
            wp_send_json_error(['message' => 'Flex Importer plugin activation failed.', 'error' => $flex_car_rental_activate_wc_plugin->get_error_message()]);
        }
    }

    // Success response
    wp_send_json_success(['message' => 'WooCommerce and Flex Importer plugins are activated successfully.']);
}