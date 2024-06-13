import {render} from './render';
import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import PointsPresenter from './presenter/points-presenter';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

render(new FiltersView(), siteFiltersElement);
render(new SortView(), tripEventsElement);

const pointsPresenter = new PointsPresenter(tripEventsElement);

pointsPresenter.init();
