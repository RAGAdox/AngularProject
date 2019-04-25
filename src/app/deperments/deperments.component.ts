import { Component, OnInit } from "@angular/core";
import { GetDepertmentsService } from "../get-depertments.service";

@Component({
  selector: "app-deperments",
  templateUrl: "./deperments.component.html",
  styleUrls: ["./deperments.component.css"]
})
export class DepermentsComponent implements OnInit {
  someString = "rishi mukherjee";
  depertments;
  constructor(depertmentsService: GetDepertmentsService) {
    this.depertments = depertmentsService.getDeperments();
  }
  ngOnInit() {
    console.log("onInit of Depertment Called");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy of Depertment Called");
  }
}
