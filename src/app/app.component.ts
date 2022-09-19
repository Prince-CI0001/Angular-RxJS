import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.error(`error occcured ${err}`),
      complete: () => console.log('complete'),
    });

    of('apple1', 'apple2', 'apple3').subscribe({
      next: (apple) => console.log(`Apple number is ${apple}`),
      error: (err) => console.log(`error occured ${err}`),
      complete: () => console.log('completed..No more apples to display'),
    });

    of(2, 4, 6)
      .pipe(
        map((item) => item * 2),
        map((item) => item - 0)
      )
      .subscribe((x) => console.log(x));
  }
}
