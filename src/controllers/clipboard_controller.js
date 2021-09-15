import {Controller} from 'stimulus';

export default class extends Controller {
  static targets = ["source"];

  connect() {
    if (document.queryCommandSupported("copy")) {
      this.element.classList.add("clipboard-supported");
    }
  }

  copy() {
    event.preventDefault();
    this.sourceTarget.select();
    document.execCommand("copy");
  }
}
