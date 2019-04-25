import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDepertmentsService {
  depertments=['Mathametics','Physics','Science'];
  constructor() { }
  getDeperments(){
    return this.depertments;
  }
}
