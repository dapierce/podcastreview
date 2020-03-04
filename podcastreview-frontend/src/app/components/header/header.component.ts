import { Component, Input, OnInit } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() title: string

  constructor(private router: Router) {}

  searchAction(input: string): void {
    const sanitized = input.replace(/\W_/g, " ")
    this.router.navigate(["/search/" + sanitized])
  }

  loginAction(): void {
    this.router.navigate(["/login"])
  }

  ngOnInit() {}
}
