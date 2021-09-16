import {Controller} from 'stimulus';

export default class extends Controller {
  static targets = ["slide"];
  static values = {index: Number};

  previous() {
    this.indexValue--;
    this.showCurrentSlide();
  }

  next() {
    this.indexValue++;
    this.showCurrentSlide();
  }

  // Called upon initialization and everytime the index value changes
  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, idx) => {
      el.hidden = idx != this.indexValue;
    })
  }
}
