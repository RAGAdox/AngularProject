import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepermentsComponent } from "./deperments/deperments.component";
import { CourseComponent } from "./course/course.component";

const routes: Routes = [
  { path: "depertments", component: DepermentsComponent },
  { path: "courses", component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
