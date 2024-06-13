import PointsView from '../view/points-container-view';
import {render} from '../render';
import PointView from '../view/point-view';

export default class PointsPresenter {
  pointsComponent = new PointsView();

  constructor(pointsContainer) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(this.pointsComponent, this.pointsContainer);
    render(new PointView({mode: 'edit'}), this.pointsComponent.getElement());
    render(new PointView(), this.pointsComponent.getElement());
    render(new PointView(), this.pointsComponent.getElement());
    render(new PointView(), this.pointsComponent.getElement());
  }
}
