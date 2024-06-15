import {createElement} from '../render';
import {
  getDay,
  getDuration,
  getHours,
  getMachineDate,
  getMachineDateWithTime,
  getMinutes,
  getMonthName,
  getMonthNumber,
  getShortYear
} from '../lib/date-time';
import {TransportationType} from '../enums';
import {capitalizeFirstLetter} from '../lib/string';

/**
 * @typedef {Object} CreatePointTepmlateProps
 * @property {boolean} isFavourite
 * @property {number} basePrice
 * @property {Offer[]} offers
 * @property {string} dateFrom
 * @property {string} dateTo
 * @property {TransportationType} type
 * @property {Destination[]} allDestinations
 * @property {Destination} destination
 */

/**
 * @typedef {Object}  CreatePointTepmlateListeners
 * @property {function} onExpand
 */

export default class PointView {
  /**
   * Create a PointView.
   * @param {Object} options - The options object.
   * @param {('default'|'edit')} options.mode - The mode of the point view, either 'default' or 'edit'.
   * @param {CreatePointTepmlateProps} options.templateProps
   */
  constructor({mode, templateProps}) {
    this.mode = mode;
    this.templateProps = templateProps;
  }

  getPointTemplate() {
    return createPointTemplate(this.templateProps);
  }

  getPointEditTemplate() {
    return createPointEditTemplate(this.templateProps);
  }

  getElement() {
    if (!this.element) {
      if (this.mode === 'edit') {
        this.element = createElement(this.getPointEditTemplate());
      } else {
        this.element = createElement(this.getPointTemplate());
      }
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

/**
 *
 * @param {Offer[]} offers
 * @return {string}
 */
function createOffersTemplate(offers) {
  return offers.map((offer) => `<li class="event__offer">
                    <span class="event__offer-title">${offer.title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${offer.price}</span>
                  </li>`).join('');
}


/**
 *
 * @param {CreatePointTepmlateProps} props
 * @returns {string}
 */
function createPointTemplate(props) {
  const {isFavourite, basePrice, destination, offers, dateTo, dateFrom, type} = props;
  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date"  datetime="${getMachineDate(dateFrom)}">${getMonthName(dateFrom)} ${getDay(dateFrom)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${getMachineDateWithTime(dateFrom)}">${getHours(dateFrom)}:${getMinutes(dateFrom)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${getMachineDateWithTime(dateTo)}">${getHours(dateTo)}:${getMinutes(dateTo)}</time>
                  </p>
                  <p class="event__duration">${getDuration(dateFrom, dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${createOffersTemplate(offers)}
                </ul>
                <button class="event__favorite-btn ${isFavourite ? 'event__favorite-btn--active' : ''}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}


/**
 * Generates HTML markup for event type items based on the given checked type.
 *
 * @param {TransportationType} checkedType - The type that should be checked.
 * @return {string} The generated HTML markup.
 */
function createEventTypeItems(checkedType) {
  return Object.values(TransportationType).map((type) => {
    const isChecked = type === checkedType ? 'checked' : '';
    return `
    <div class="event__type-item">
                          <input ${isChecked} id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
                          <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeFirstLetter(type)}</label>
                        </div>
    `;
  }).join('');
}

/**
 *
 * @param {Destination[]} destinations
 */
function createDestinationsList(destinations) {
  return destinations.map((dest) => `<option value="${dest.name}"></option>`).join('');
}

/**
 *
 * @param {Offer[]} offers
 */
function createEventOffersTemplate(offers) {
  if (!offers.length) {
    return '';
  }
  return `
  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

 <div class="event__available-offers">
                    ${offers.map((offer) => `
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" checked>
                        <label class="event__offer-label" for="event-offer-${offer.id}">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>
`).join('')}
</div>
                  </section>
  `;
}

/**
 *
 * @param {Destination} [destination]
 */
function createEventDestinationTemplate(destination) {
  if (!destination) {
    return '';
  }

  /**
   *
   * @param {Picture[]} photos
   */
  function createPhotos(photos) {
    if (!photos.length) {
      return '';
    }

    return `
                        <div class="event__photos-container">
                      <div class="event__photos-tape">
                      ${photos.map((photo) => `
                        <img class="event__photo" src="${photo.src}" alt="${photo.description}">
                        `)}
                      </div>
                    </div>
    `;
  }

  return `
  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination.description}</p>

                    ${createPhotos(destination.pictures)}
                  </section>
  `;
}

/**
 *
 * @param {CreatePointTepmlateProps} props
 * @returns {string}
 */
function createPointEditTemplate(props) {
  const {type, allDestinations, dateFrom, destination, dateTo, basePrice, offers} = props;
  const formatDate = (date) => `${getDay(date)}/${getMonthNumber(date)}/${getShortYear(date)} ${getHours(date)}:${getMinutes(date)}`;
  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${createEventTypeItems(type)}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${capitalizeFirstLetter(type)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${createDestinationsList(allDestinations)}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatDate(dateFrom)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatDate(dateTo)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">

                ${createEventOffersTemplate(offers)}
                ${createEventDestinationTemplate(destination)}
                </section>
              </form>
            </li>`;
}
