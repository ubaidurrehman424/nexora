<?php
/**
 * Start Elementor.
 *
 */

$flex_multi_business_theme = wp_get_theme( get_template() );

?>
<!-- Start Elementor -->
<div id="flex-multi-business-importer" class="tabcontent open">
    <div class="tab-outer-box-container tab-outer-box">
        <div class="flex-main-container">
            <div class="flex-inner-contain">
                <h3><?php esc_html_e('🎉 Thank you for activating the ', 'flex-multi-business'); ?><span><?php echo esc_html( wp_get_theme()->get( 'Name' ) ); ?></span></h3>
                <p class="start-text"><?php esc_html_e('Get started quickly by importing the demo content or explore more powerful options below.', 'flex-multi-business'); ?></p>
                <div class="info-link">
                    <?php $flex_template_is_imported = get_option('flex_template_is_imported'); ?>
                    <div class="notice-button">
                        <?php if ( !$flex_template_is_imported ) { ?>
                            <a href="javascript:void(0);" 
                            id="install-activate-button" 
                            class="button admin-button info-button">
                                <?php esc_html_e('Import Demo', 'flex-multi-business'); ?>
                            </a>
                        <?php } else { ?>
                            <a href="<?php echo esc_url(home_url()); ?>" 
                            target="_blank"
                            id="install-activate-button" 
                            class="button admin-button info-button">
                                <?php esc_html_e('View Site', 'flex-multi-business'); ?>
                            </a>
                        <?php } ?>
                    </div>
                    <a href="<?php echo esc_url( FLEX_MULTI_BUSINESS_BUY_NOW ); ?>" class="button info-button" target="_blank">
                        <?php esc_html_e('Upgrade Pro', 'flex-multi-business'); ?>
                    </a>
                    <a href="<?php echo esc_url( FLEX_MULTI_BUSINESS_LIVE_DEMO ); ?>" class="button info-button" target="_blank">
                        <?php esc_html_e('Live Demo', 'flex-multi-business'); ?>
                    </a>
                    <a href="<?php echo esc_url( FLEX_MULTI_BUSINESS_DOCUMENTATION ); ?>" class="button info-button" target="_blank">
                        <?php esc_html_e('Documentation', 'flex-multi-business'); ?>
                    </a>
                    <script type="text/javascript">
                    document.getElementById('install-activate-button').addEventListener('click', function () {
                        const flex_multi_business_button = this;
                        const flex_multi_business_redirectUrl = '<?php echo esc_url(admin_url("admin.php?page=fleximp-template-importer")); ?>';
                        // First, check if plugin is already active
                        jQuery.post(ajaxurl, { action: 'check_flex_import_activation' }, function (response) {
                            if (response.success && response.data.active) {
                                // Plugin already active — just redirect
                                window.location.href = flex_multi_business_redirectUrl;
                            } else {
                                // Show Installing & Activating only if not already active
                                flex_multi_business_button.textContent = 'Installing & Activating...';

                                jQuery.post(ajaxurl, {
                                    action: 'install_and_activate_flex_import_plugin',
                                    nonce: '<?php echo wp_create_nonce("install_activate_nonce"); ?>'
                                }, function (response) {
                                    if (response.success) {
                                        window.location.href = flex_multi_business_redirectUrl;
                                    } else {
                                        alert('Failed to activate the plugin.');
                                        flex_multi_business_button.textContent = 'Try Again';
                                    }
                                });
                            }
                        });
                    });
                    </script>
                </div>
               <div class="flex-inner-info">
                    <div class="flex-inner-box">
                        <img src="<?php echo esc_url(get_theme_file_uri()); ?>/screenshot.png" />
                    </div>
                    <div class="flex-inner-content">
                        <div class="about-text">
                            <?php
                                $description_raw = $flex_multi_business_theme->display( 'Description' );
                                $main_description = explode( 'Official', $description_raw );
                                ?>
                            <?php echo wp_kses_post( $main_description[0] ); ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-bundle-contain">
                <div class="bundle-dashboard-box">
                    <img src="http://localhost/flex-update/wp-content/plugins/flex-import/assets/images/bundle-banner.png" alt="Plugin Logo" style="width:100%; height:100%">
                    <h3 class="bundle-heading"><?php esc_html_e('WordPress Theme Bundle', 'flex-multi-business'); ?></h3>
                    <h3 class="bundle-subheading"><?php esc_html_e('Multiple Templates at Just $69', 'flex-multi-business'); ?></h3>
                    <p class="bundle-para"><?php esc_html_e('Upgrade to the Pro version to unlock exclusive
                        templates, premium features, and advanced customization options.', 'flex-multi-business'); ?></p>
                    <div>
                    <div class="banner-bundle-btn">
                        <a href="https://www.flextheme.net/products/wordpress-theme-bundle" class="btn bundle-btn" target="_blank" rel="noopener">
                            <?php esc_html_e('Get Bundle', 'flex-multi-business'); ?>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
