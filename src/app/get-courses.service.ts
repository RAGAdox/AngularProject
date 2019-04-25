import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {
  courses=['AEIE','CSE','ME']
  constructor() { }
  getCoursesFromService(){
    return this.courses;
  }
}
