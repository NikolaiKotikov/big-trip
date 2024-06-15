import {render} from './render';
import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import PointsPresenter from './presenter/points-presenter';
import PointsModel from './model/points-model';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new FiltersView(), siteFiltersElement);
render(new SortView(), tripEventsElement);

const pointsModel = new PointsModel();

const pointsPresenter = new PointsPresenter(tripEventsElement, pointsModel);

pointsPresenter.init();
