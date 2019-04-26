import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-name",
  templateUrl: "./name.component.html",
  styleUrls: ["./name.component.css"]
})
export class NameComponent implements OnInit {
  isDisabled = false;
  name = "RAGAdox";
  username = "";
  data: string = "";
  constructor() {}
  
  ngOnInit() {
    console.log("on Init of name Component");
  }
  onKey(event: any) {
    // without type info
    this.name = event.target.value;
  }
  onKeyOther(str: string) {
    this.username = str;
  }
}
