import { Component, OnInit, Input } from '@angular/core';
import { QuestionModel, QuestionFormModel, OptionsFormModel, OptionsModel } from '../../../models/question.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng6-toastr';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  @Input() event: QuestionModel;
  @Input() event1: OptionsModel;
  questionForm: FormGroup;
  submitBtnText: string;
  isEdit: boolean;
  formEvent: QuestionFormModel;
  formEvent1: OptionsFormModel;
  submitting: boolean;
  submitEventObj: QuestionModel;
  submitEventSub: Subscription;
  error: boolean;
  chapterName: any;
  chapterId: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _questionApi: QuestionService,
    private toastr: ToastsManager) {
  }

  ngOnInit() {
    console.log(this.event)
    this.route.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.chapterName = params['chapterName'];
        this.chapterId = params['chapterId'];
      });
    this.isEdit = !!this.event;
    this.submitBtnText = this.isEdit ? 'Update' : 'Create';
    this.formEvent = this._setFormEvent();
    this.formEvent1 = this._setFormEvent1();
    this._buildForm();
  }

  private _buildForm() {
    this.questionForm = this.fb.group({
      question: [this.formEvent.question, Validators.required],
      options: this.fb.group({
        option1: [this.formEvent1.option1, Validators.required],
        option2: [this.formEvent1.option2, Validators.required],
        option3: [this.formEvent1.option3, Validators.required],
        option4: [this.formEvent1.option4, Validators.required],
        is_correct: [this.formEvent1.is_correct, Validators.required]
      })
    });
  }

  private _setFormEvent1() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // FormEventModel with default null data
      return new OptionsFormModel(null, null, null, null,null);
    } else {
      // If editing existing event, create new
      // FormEventModel from existing data
      return new OptionsFormModel(
        this.event1.option1,
        this.event1.option2,
        this.event1.option3,
        this.event1.option4,
        this.event1.is_correct
      )
    }
  }

  private _setFormEvent() {
    if (!this.isEdit) {
      // If creating a new event, create new
      // FormEventModel with default null data
      return new QuestionFormModel(null, null,null);
    } else {
      // If editing existing event, create new
      // FormEventModel from existing data
      return new QuestionFormModel(
        this.event.question,
        this._setFormEvent1()
      );
    }
  }
  private _getSubmitObj() {
    return new QuestionModel(
      this.questionForm.get('question').value,
      this.questionForm.get('options').value,
      this.chapterId,
      this.event ? this.event.id : null
    );
  }
  saveQuestions() {
    this.submitting = true;
    this.submitEventObj = this._getSubmitObj();
    console.log(this.submitEventObj)
    if (!this.isEdit) {
      this._questionApi.postEvent$(this.submitEventObj)
        .subscribe(
          data => this._handleSubmitSuccess(data),
          err => this._handleSubmitError(err)
        );

    } else {
      this._questionApi.editEvent$(this.event.id, this.submitEventObj)
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
      this.router.navigate(['/admin/chapter/view',this.chapterId]);
    }
    else {
      this.toastr.error(res.message, 'Invalid');
    }

  }

  private _handleSubmitError(err) {
    this.toastr.error(err.message, 'Error');
    this.submitting = false;
    this.error = true;
  }

}
