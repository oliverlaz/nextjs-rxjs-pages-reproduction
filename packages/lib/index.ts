import { Observable } from 'rxjs';

export const observableValue = new Observable((observer) => {
  observer.next('Hello World');
});

