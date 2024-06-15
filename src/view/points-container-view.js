import {createElement} from '../render';

function createViewTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class PointsContainerView {
  getTemplate() {
    return createViewTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
