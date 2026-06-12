<?php
/**
 * Block Patterns
 *
 * @package vehicle-rental
 * @since 1.0
 */

function vehicle_rental_register_block_patterns() {
	$vehicle_rental_block_pattern_categories = array(
		'vehicle-rental' => array( 'label' => esc_html__( 'Vehicle Rental', 'vehicle-rental' ) ),
		'pages' => array( 'label' => esc_html__( 'Pages', 'vehicle-rental' ) ),
	);

	$vehicle_rental_block_pattern_categories = apply_filters( 'vehicle_rental_vehicle_rental_block_pattern_categories', $vehicle_rental_block_pattern_categories );

	foreach ( $vehicle_rental_block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}
}
add_action( 'init', 'vehicle_rental_register_block_patterns', 9 );