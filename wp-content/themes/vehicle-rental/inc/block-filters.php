<?php
/**
 * Block Filters
 *
 * @package vehicle-rental
 * @since 1.0
 */

function vehicle_rental_block_wrapper( $vehicle_rental_block_content, $vehicle_rental_block ) {

	if ( 'core/button' === $vehicle_rental_block['blockName'] ) {
		
		if( isset( $vehicle_rental_block['attrs']['className'] ) && strpos( $vehicle_rental_block['attrs']['className'], 'has-arrow' ) ) {
			$vehicle_rental_block_content = str_replace( '</a>', vehicle_rental_get_svg( array( 'icon' => esc_attr( 'caret-circle-right' ) ) ) . '</a>', $vehicle_rental_block_content );
			return $vehicle_rental_block_content;
		}
	}

	if( ! is_single() ) {
	
		if ( 'core/post-terms'  === $vehicle_rental_block['blockName'] ) {
			if( 'post_tag' === $vehicle_rental_block['attrs']['term'] ) {
				$vehicle_rental_block_content = str_replace( '<div class="taxonomy-post_tag wp-block-post-terms">', '<div class="taxonomy-post_tag wp-block-post-terms flex">' . vehicle_rental_get_svg( array( 'icon' => esc_attr( 'tags' ) ) ), $vehicle_rental_block_content );
			}

			if( 'category' ===  $vehicle_rental_block['attrs']['term'] ) {
				$vehicle_rental_block_content = str_replace( '<div class="taxonomy-category wp-block-post-terms">', '<div class="taxonomy-category wp-block-post-terms flex">' . vehicle_rental_get_svg( array( 'icon' => esc_attr( 'category' ) ) ), $vehicle_rental_block_content );
			}
			return $vehicle_rental_block_content;
		}
		if ( 'core/post-date' === $vehicle_rental_block['blockName'] ) {
			$vehicle_rental_block_content = str_replace( '<div class="wp-block-post-date">', '<div class="wp-block-post-date flex">' . vehicle_rental_get_svg( array( 'icon' => esc_attr( 'calendar' ) ) ), $vehicle_rental_block_content );
			return $vehicle_rental_block_content;
		}
		if ( 'core/post-author' === $vehicle_rental_block['blockName'] ) {
			$vehicle_rental_block_content = str_replace( '<div class="wp-block-post-author">', '<div class="wp-block-post-author flex">' . vehicle_rental_get_svg( array( 'icon' => esc_attr( 'user' ) ) ), $vehicle_rental_block_content );
			return $vehicle_rental_block_content;
		}
	}
	if( is_single() ){

		// Add chevron icon to the navigations
		if ( 'core/post-navigation-link' === $vehicle_rental_block['blockName'] ) {
			if( isset( $vehicle_rental_block['attrs']['type'] ) && 'previous' === $vehicle_rental_block['attrs']['type'] ) {
				$vehicle_rental_block_content = str_replace( '<span class="post-navigation-link__label">', '<span class="post-navigation-link__label">' . vehicle_rental_get_svg( array( 'icon' => esc_attr( 'prev' ) ) ), $vehicle_rental_block_content );
			}
			else {
				$vehicle_rental_block_content = str_replace( '<span class="post-navigation-link__label">Next Post', '<span class="post-navigation-link__label">Next Post' . vehicle_rental_get_svg( array( 'icon' => esc_attr( 'next' ) ) ), $vehicle_rental_block_content );
			}
			return $vehicle_rental_block_content;
		}
		if ( 'core/post-date' === $vehicle_rental_block['blockName'] ) {
            $vehicle_rental_block_content = str_replace( '<div class="wp-block-post-date">', '<div class="wp-block-post-date flex">' . vehicle_rental_get_svg( array( 'icon' => 'calendar' ) ), $vehicle_rental_block_content );
            return $vehicle_rental_block_content;
        }
		if ( 'core/post-author' === $vehicle_rental_block['blockName'] ) {
            $vehicle_rental_block_content = str_replace( '<div class="wp-block-post-author">', '<div class="wp-block-post-author flex">' . vehicle_rental_get_svg( array( 'icon' => 'user' ) ), $vehicle_rental_block_content );
            return $vehicle_rental_block_content;
        }

	}
    return $vehicle_rental_block_content;
}
	
add_filter( 'render_block', 'vehicle_rental_block_wrapper', 10, 2 );
