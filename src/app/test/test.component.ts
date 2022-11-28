import { Component } from '@angular/core';

@Component({
  // selector: '.app-test',
  selector: 'app-test',
  // selector: '[app-test]',
  // templateUrl: './test.component.html',
  // template: '<div>Hello world</div>',
  template: `<div>
                Hello world
                <p>Heyyyyyyyyyyyyyyyyyyyy</p>
                <button type="button" (click)="onClickMe()" class="btn btn-dark">click</button>
                <br/>
                {{clickMessage}}
                <br/>
                <input type="text" #box (keyup)="onKey(box.value)"  placeholder="Name ?"/>
                <br/>
                {{values}}
                </div>`,
  // styleUrls: ['./test.component.css']
  styles: [`
        div{
          color:red;
        }
        p{
          color:blue
        }
  `]
})
export class TestComponent {
  titleName = 'Lekhu'
  clickMessage = '';
  values = ''

  onClickMe() {
    this.clickMessage = 'Clicked!';
  }

  onKey(value: String) {
    this.values += value + ' | ';
  }

}
