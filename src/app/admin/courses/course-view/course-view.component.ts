import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  public course: any;
  private id: number;
  constructor(private route: ActivatedRoute,
    private _courseApi: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._courseApi.getCourseById$(this.id).subscribe(res => {
      if (res.success) {
        this.course = res.course;
      }
    });
  }

}
