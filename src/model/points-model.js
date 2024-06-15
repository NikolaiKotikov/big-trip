import {mockPoints} from '../mocks/mockPoints';
import {mockOffers} from '../mocks/mockOffers';
import {mockDestinations} from '../mocks/mockDestinations';

export default class PointsModel {
  offers = mockOffers;
  destinations = mockDestinations;
  points = mockPoints;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

}
