<?php
/**
 * Recommended plugins
 *
 * @package flex-car-rental
 */

if ( ! function_exists( 'flex_car_rental_recommended_plugins' ) ) :

    /**
     * Recommend plugins.
     *
     * @since 1.0.0
     */
    function flex_car_rental_recommended_plugins() {

        $plugins = array(  

            array(
                'name'     => esc_html__( 'Flex Import', 'flex-car-rental' ),
                'slug'     => 'flex-import',
                'required' => false,
            ),
            array(
                'name'     => esc_html__( 'Elementor Website Builder – More Than Just a Page Builder', 'flex-car-rental' ),
                'slug'     => 'elementor',
                'required' => false,
            ),
            array(
                'name'     => esc_html__( 'ElementsKit Elementor Addons and Templates', 'flex-car-rental' ),
                'slug'     => 'elementskit-lite',
                'required' => false,
            ),  
            array(
                'name'     => esc_html__( 'Contact Form 7', 'flex-car-rental' ),
                'slug'     => 'contact-form-7',
                'required' => false,
            ),

            array(
                'name'     => esc_html__( 'Royal Elementor Addons', 'flex-car-rental' ),
                'slug'     => 'royal-elementor-addons',
                'required' => false,
            ),
        );

        tgmpa( $plugins );

    }

endif;

add_action( 'tgmpa_register', 'flex_car_rental_recommended_plugins' );
