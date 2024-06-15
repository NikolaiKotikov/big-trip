/**
 * Represents a collection of destinations.
 * @typedef {Object} Destination
 * @property {string} id - The unique identifier for the destination.
 * @property {string} description - A brief description of the destination.
 * @property {string} name - The name of the destination.
 * @property {Picture[]} pictures - An array of pictures associated with the destination.
 */

/**
 * Represents a picture associated with an offer.
 * @typedef {Object} Picture
 * @property {string} src - The source URL of the picture.
 * @property {string} description - A brief description of the picture.
 */

/**
 * Represents a point.
 * @typedef {Object} Point
 * @property {string} id - The unique identifier for the point.
 * @property {number} base_price - The base price of the point.
 * @property {string} date_from - The start date of the point in ISO format.
 * @property {string} date_to - The end date of the point in ISO format.
 * @property {string} destination - The destination of the point.
 * @property {boolean} is_favorite - Indicates if the point is marked as favorite.
 * @property {string[]} offers - A list of offers associated with the point.
 * @property {TransportationType} type - The type of transportation or activity.
 */

/**
 * Represents an offer associated with a travel item.
 * @typedef {Object} Offer
 * @property {string} id - The unique identifier for the offer.
 * @property {string} title - The title of the offer.
 * @property {number} price - The price of the offer.
 */

/**
 * Represents a travel item with its type and associated offers.
 * @typedef {Object} TravelItem
 * @property {TransportationType} type - The type of the travel item.
 * @property {Offer[]} offers - A list of offers associated with the travel item.
 */

