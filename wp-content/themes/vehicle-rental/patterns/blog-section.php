<?php
 /**
  * Title: Blog Section
  * Slug: vehicle-rental/blog-section
  */
?>
<!-- wp:group {"align":"full","className":"blog-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70","left":"0","right":"0"},"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"background","layout":{"type":"constrained","contentSize":"80%"}} -->
<div class="wp-block-group alignfull blog-section has-background-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--70);padding-right:0;padding-bottom:var(--wp--preset--spacing--70);padding-left:0"><!-- wp:group {"className":"plan-head","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|60"}}},"layout":{"type":"constrained","contentSize":"35%","justifyContent":"left"}} -->
<div class="wp-block-group plan-head" style="margin-bottom:var(--wp--preset--spacing--60)"><!-- wp:heading {"textAlign":"left","level":3,"style":{"elements":{"link":{"color":{"text":"var:preset|color|body-text"}}},"typography":{"fontSize":"30px","fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"textColor":"body-text","fontFamily":"inter"} -->
<h3 class="wp-block-heading has-text-align-left has-body-text-color has-text-color has-link-color has-inter-font-family" style="margin-top:0;margin-bottom:0;font-size:30px;font-style:normal;font-weight:600"><?php esc_html_e('Blog Insights','vehicle-rental'); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","style":{"elements":{"link":{"color":{"text":"var:preset|color|body-text"}}},"typography":{"fontSize":"18px"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"textColor":"body-text","fontFamily":"inter"} -->
<p class="has-text-align-left has-body-text-color has-text-color has-link-color has-inter-font-family" style="margin-top:0;margin-bottom:0;font-size:18px"><?php esc_html_e('Comprehensive vehicle rental services designed to provide comfort, convenience, and reliable transportation for every journey.','vehicle-rental'); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:query {"queryId":8,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":false},"metadata":{"categories":["posts"],"patternName":"core/query-grid-posts","name":"Grid"}} -->
<div class="wp-block-query"><!-- wp:post-template {"className":"owl-carousel","layout":{"type":"grid","columnCount":1,"minimumColumnWidth":null}} -->
<!-- wp:group {"className":"blog-box","style":{"spacing":{"padding":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"border":{"width":"0px","style":"none","radius":{"topLeft":"20px","topRight":"20px","bottomLeft":"20px","bottomRight":"20px"}}},"layout":{"inherit":false}} -->
<div class="wp-block-group blog-box" style="border-style:none;border-width:0px;border-top-left-radius:20px;border-top-right-radius:20px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:group {"className":"blog-img","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"0","bottom":"0"}},"border":{"radius":{"topLeft":"20px","topRight":"20px","bottomLeft":"20px","bottomRight":"20px"}},"dimensions":{"minHeight":"350px"},"color":{"gradient":"linear-gradient(180deg,rgba(24,59,86,0) 0%,rgb(21,37,50) 100%)"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group blog-img has-background" style="border-top-left-radius:20px;border-top-right-radius:20px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;background:linear-gradient(180deg,rgba(24,59,86,0) 0%,rgb(21,37,50) 100%);min-height:350px;margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:post-featured-image {"height":"350px"} /--></div>
<!-- /wp:group -->

<!-- wp:group {"className":"blog-content","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"},"margin":{"top":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group blog-content" style="margin-top:0;padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:post-title {"level":4,"isLink":true,"style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"0","bottom":"0"}},"elements":{"link":{"color":{"text":"var:preset|color|background"}}}},"textColor":"background","fontFamily":"inter"} /-->

<!-- wp:post-excerpt {"showMoreOnNewLine":false,"excerptLength":15,"style":{"elements":{"link":{"color":{"text":"var:preset|color|body-text"}}},"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400"},"spacing":{"margin":{"top":"var:preset|spacing|20","bottom":"0"}}},"textColor":"body-text","fontFamily":"inter"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:post-template --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->