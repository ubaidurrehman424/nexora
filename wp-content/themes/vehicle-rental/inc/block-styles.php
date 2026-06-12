<?php
/**
 * Block Styles
 *
 * @package vehicle-rental
 * @since 1.0
 */

if ( function_exists( 'register_block_style' ) ) {
	function vehicle_rental_register_block_styles() {

		//Wp Block Padding Zero
		register_block_style(
			'core/group',
			array(
				'name'  => 'vehicle-rental-padding-0',
				'label' => esc_html__( 'No Padding', 'vehicle-rental' ),
			)
		);

		//Wp Block Post Author Style
		register_block_style(
			'core/post-author',
			array(
				'name'  => 'vehicle-rental-post-author-card',
				'label' => esc_html__( 'Theme Style', 'vehicle-rental' ),
			)
		);

		//Wp Block Button Style
		register_block_style(
			'core/button',
			array(
				'name'         => 'vehicle-rental-button',
				'label'        => esc_html__( 'Plain', 'vehicle-rental' ),
			)
		);

		//Post Comments Style
		register_block_style(
			'core/post-comments',
			array(
				'name'         => 'vehicle-rental-post-comments',
				'label'        => esc_html__( 'Theme Style', 'vehicle-rental' ),
			)
		);

		//Latest Comments Style
		register_block_style(
			'core/latest-comments',
			array(
				'name'         => 'vehicle-rental-latest-comments',
				'label'        => esc_html__( 'Theme Style', 'vehicle-rental' ),
			)
		);


		//Wp Block Table Style
		register_block_style(
			'core/table',
			array(
				'name'         => 'vehicle-rental-wp-table',
				'label'        => esc_html__( 'Theme Style', 'vehicle-rental' ),
			)
		);


		//Wp Block Pre Style
		register_block_style(
			'core/preformatted',
			array(
				'name'         => 'vehicle-rental-wp-preformatted',
				'label'        => esc_html__( 'Theme Style', 'vehicle-rental' ),
			)
		);

		//Wp Block Verse Style
		register_block_style(
			'core/verse',
			array(
				'name'         => 'vehicle-rental-wp-verse',
				'label'        => esc_html__( 'Theme Style', 'vehicle-rental' ),
			)
		);
	}
	add_action( 'init', 'vehicle_rental_register_block_styles' );
}
