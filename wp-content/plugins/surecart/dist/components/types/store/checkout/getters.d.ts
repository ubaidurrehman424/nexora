import { Address, Checkout } from "../../types";
/**
 * Gets the current checkout for the page.
 */
export declare const currentCheckout: () => any;
/**
 * Is the checkout currently locked.
 * Pass an optional lock name to find if a
 * specific lock name is locking checkout.
 */
export declare const checkoutIsLocked: (lockName?: string) => boolean;
/**
 * Get a line item by product id.
 */
export declare const getLineItemByProductId: (productId: string) => import("src/types").LineItem;
/**
 * Is the shipping address required?
 */
export declare const fullShippingAddressRequired: () => boolean;
/**
 * Is the address required?
 */
export declare const shippingAddressRequired: () => boolean;
/**
 * Get a complete address by type, with Stripe-formatted field names (line1/line2).
 */
export declare const getCompleteAddress: (type?: 'shipping' | 'billing') => {
    name?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
    line1: string;
    line2: string;
};
/**
 * Get the resolved billing address for payment processors.
 * Falls back to shipping address when billing matches shipping.
 * Returns canonical Address format (line_1/line_2).
 */
export declare const getResolvedBillingAddress: (checkout?: Checkout) => Address | undefined;
/**
 * Convert a canonical Address to Stripe's expected format (line1/line2 instead of line_1/line_2).
 */
export declare const toStripeAddress: (address?: Address) => {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
};
