import {
  Component,
  OnInit
} from '@angular/core';



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'child-component',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  
  // Our list of styles in our component. We may add more to compose many styles together
//   styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
 public ngOnInit() {
    console.log('hello `Child` component');
  }
}
