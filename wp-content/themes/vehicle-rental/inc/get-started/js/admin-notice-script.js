
// Creta Testimonial Showcase plugin activation
document.addEventListener('DOMContentLoaded', function () {
    const vehicle_rental_button = document.getElementById('install-activate-button');

    if (!vehicle_rental_button) return;

    vehicle_rental_button.addEventListener('click', function (e) {
        e.preventDefault();

        const vehicle_rental_redirectUrl = vehicle_rental_button.getAttribute('data-redirect');

        // Step 1: Check if plugin is already active
        const vehicle_rental_checkData = new FormData();
        vehicle_rental_checkData.append('action', 'check_creta_testimonial_activation');

        fetch(installcretatestimonialData.ajaxurl, {
            method: 'POST',
            body: vehicle_rental_checkData,
        })
        .then(res => res.json())
        .then(res => {
            if (res.success && res.data.active) {
                // Plugin is already active → just redirect
                window.location.href = vehicle_rental_redirectUrl;
            } else {
                // Not active → proceed with install + activate
                vehicle_rental_button.textContent = 'Navigate Getstart';

                const vehicle_rental_installData = new FormData();
                vehicle_rental_installData.append('action', 'install_and_activate_creta_testimonial_plugin');
                vehicle_rental_installData.append('_ajax_nonce', installcretatestimonialData.nonce);

                fetch(installcretatestimonialData.ajaxurl, {
                    method: 'POST',
                    body: vehicle_rental_installData,
                })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        window.location.href = vehicle_rental_redirectUrl;
                    } else {
                        alert('Activation error: ' + (res.data?.message || 'Unknown error'));
                        vehicle_rental_button.textContent = 'Try Again';
                    }
                })
                .catch(error => {
                    alert('Request failed: ' + error.message);
                    vehicle_rental_button.textContent = 'Try Again';
                });
            }
        })
        .catch(error => {
            alert('Check request failed: ' + error.message);
        });
    });
});
