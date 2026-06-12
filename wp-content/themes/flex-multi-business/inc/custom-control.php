<?php
$flex_multi_business_control_css = '';

/* Footer background image */

$flex_multi_business_footer_bg_image = get_theme_mod('flex_multi_business_footer_bg_image');
if($flex_multi_business_footer_bg_image != false){
    $flex_multi_business_control_css .='.footer, .foot-top, .ekit-template-content-footer, .ekit-template-content-footer>div .main-container:first-child, .ekit-template-content-footer .footer-section, .ekit-template-content-footer .flex-charity-footer {';
        $flex_multi_business_control_css .='background-image: url('.esc_attr($flex_multi_business_footer_bg_image).') !important;';
        $flex_multi_business_control_css .= 'background-size: cover !important;';  
    $flex_multi_business_control_css .='}';
}