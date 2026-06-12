import { Address, AddressSuggestion } from "../../../../types";
/**
 * Highlights the matching parts of a text based on a query.
 */
export declare function highlightMatch(text: string, query: string): string;
/**
 * Fetches address suggestions from the Google Maps API.
 */
export declare function fetchAddressSuggestions(input: string, country: string | null, regions: Array<{
    value: string;
    label: string;
}>, signal?: AbortSignal): Promise<Array<AddressSuggestion>>;
/**
 * Returns a full replacement address — preserves recipient name only, does not merge with the
 * previous address. Merging would leak stale line_2/city/postal_code when the new place omits them.
 */
export declare function buildReplacementAddressFromPlace(place: AddressSuggestion, regions: Array<{
    value: string;
    label: string;
}>, previousName: string | null | undefined): Partial<Address>;
/**
 * Fetches place details from the Google Maps API.
 */
export declare function fetchPlaceDetails(placeId: string, addressSuggestions: Array<AddressSuggestion>, address: Partial<Address>, regions: Array<{
    value: string;
    label: string;
}>): Promise<{
    updatedAddress: Partial<Address>;
    updatedRegions: Array<{
        value: string;
        label: string;
    }>;
}>;
