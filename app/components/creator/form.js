import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CreatorFormComponent extends Component {
  @tracked isClicked=true;

  @action toggleClicked(){
    this.isClicked = !this.isClicked;
  }
}
