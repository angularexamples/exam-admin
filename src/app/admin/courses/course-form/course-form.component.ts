import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseModel, CourseFormModel } from '../../../models/course.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { ToastsManager } from 'ng6-toastr';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Input() event: CourseModel;
  courseForm: FormGroup;
  submitBtnText: string;
  isEdit: boolean;
  formEvent: CourseFormModel;
  submitting: boolean;
  submitEventObj: CourseModel;
  submitEventSub: Subscription;
  error: boolean;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _courseApi: CourseService,
    private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.isEdit = !!this.event;
    this.submitBtnText = this.isEdit ? 'Update' : 'Create';
    this.formEvent = this._setFormEvent();
    this._buildForm();
  }

  private _buildForm() {
    this.courseForm = this.fb.group({
      name: [this.formEvent.name, Validators.required],
      description: [this.formEvent.description, Validators.required],
      status: [this.formEvent.status, Validators.required]
    });
  }
  
  private _setFormEvent() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // FormEventModel with default null data
      return new CourseFormModel(null, null, null);
    } else {
      // If editing existing event, create new
      // FormEventModel from existing data
      return new CourseFormModel(
        this.event.name,
        this.event.description,
        this.event.status
      );
    }
  }
  private _getSubmitObj() {
    return new CourseModel(
      this.courseForm.get('name').value,
      this.courseForm.get('description').value,
      this.courseForm.get('status').value,
      this.event ? this.event.id : null
    );
  }
  saveCourses() {
    this.submitting = true;
    this.submitEventObj = this._getSubmitObj();

    if (!this.isEdit) {
      this._courseApi.postEvent$(this.submitEventObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );

    } else {
      this._courseApi.editEvent$(this.event.id, this.submitEventObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );
    }
  }
  private _handleSubmitSuccess(res) {
    this.error = false;
    this.submitting = false;
    // Redirect to event detail
    if (res.success) {
      this.toastr.success(res.message, 'Success');
      this.router.navigate(['/admin/course']);
    }
    else {
      this.toastr.error(res.message, 'Invalid');
    }

  }

  private _handleSubmitError(err) {
    this.toastr.error(err.message,'Error');
    this.submitting = false;
    this.error = true;
  }
}
