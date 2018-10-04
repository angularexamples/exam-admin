import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  public course: CourseModel;
  private id: number;
  public loading : boolean;
  constructor(private _courseApi: CourseService,
    private route: ActivatedRoute,
    private utils : UtilsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.loading = true;
    this._courseApi.getCourseById$(this.id)
      .subscribe(res => {
        if (res.success) {
          this.loading = false;
          this.course = res.course;
          console.log(this.course)
        }
      }, err => {
        this.loading = false;
        // this.error = true;
      });
  }

}
