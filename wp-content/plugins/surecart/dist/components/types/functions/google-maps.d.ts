/**
 * Internal dependencies.
 */
import { Address, GoogleMapAddressComponents } from "../types";
/**
 * Build a street address from address components (street_number + route).
 */
export declare function getStreetAddress(addressComponents: Array<GoogleMapAddressComponents> | null): string;
/**
 * Transforms the place address components into an address object.
 */
export declare function transformPlaceDetails(addressComponents: Array<GoogleMapAddressComponents>, regions: Array<{
    value: string;
    label: string;
}>): Address;
/**
 * Transforms the place address components into an address object for display.
 */
export declare function getAddressLabels(addressComponents: Array<GoogleMapAddressComponents>, regions: Array<{
    value: string;
    label: string;
}>): {
    country: string | null;
    state: string | null;
    city: string | null;
};
/**
 * Get the user's country code based on Google Geolocation and GeoCode APIs.
 * Caches the result in sessionStorage to avoid repeat API calls.
 */
export declare function getCurrentUserCountryCode(): Promise<any>;
