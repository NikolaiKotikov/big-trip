import PointsView from '../view/points-container-view';
import {render} from '../render';
import PointView from '../view/point-view';


export default class PointsPresenter {
  pointsComponent = new PointsView();
  activePointIndex = 0;

  /**
   * @param {HTMLElement} pointsContainer - The container element where the points will be rendered.
   * @param {PointsModel} pointsModel - The model holding the points data.
   */
  constructor(pointsContainer, pointsModel) {
    this.pointsContainer = pointsContainer;
    this.points = [...pointsModel.getPoints()];
    this.destinations = pointsModel.getDestinations();
    this.offers = pointsModel.getOffers();
  }

  init() {
    render(this.pointsComponent, this.pointsContainer);
    this.points.forEach((point, index) => {
      const pointOffers = this.offers.find((offer) => offer.type === point.type) || [];
      const {destination, offers} = point;
      /**
       *
       * @type {CreatePointTepmlateProps}
       */
      const templateProps = {
        isFavourite: point.is_favorite,
        basePrice: point.base_price,
        dateFrom: point.date_from,
        dateTo: point.date_to,
        type: point.type,
        destination: this.destinations.find((dest) => dest.id === destination),
        offers: pointOffers.offers.filter((offer) => offers.includes(offer.id)),
        allDestinations: this.destinations,
      };

      if (index === this.activePointIndex) {
        render(new PointView({
          mode: 'edit',
          templateProps,
        }), this.pointsComponent.getElement());

      } else {
        render(new PointView({
          mode: 'default',
          templateProps,
        }), this.pointsComponent.getElement());
      }
    });
  }
}
