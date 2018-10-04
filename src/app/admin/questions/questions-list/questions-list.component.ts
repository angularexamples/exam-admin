import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng6-toastr';
import { QuestionService } from '../../../services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  public data: any = [];
  private id: any;
  public length : any;
  
  public rowsOnPage: number = 10;
  constructor(private _qnsApi: QuestionService,
    private toastr: ToastsManager,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._qnsApi.getQuestions$(this.id).subscribe(data => {
      if (data.success) {
        this.data = data.questions;
        this.length = this.data.length;
      } else { }
    });
  }
  deleteQuestion(id: number, index) {
    var delmsg = confirm("Are u Sure Want to delete?");
    if (delmsg) {
      let apiEvent = this._qnsApi.deleteQuestionById$(id)
        .subscribe(data => {
          if (data.success) {
            this.data.splice(index, 1);
            this.toastr.success(data.message, 'Success');
          } else {
            this.toastr.error(data.message, 'Invalid');
          }
        }, err => {
          this.toastr.error(err.message, 'Error');
        });
    }
  }


}
