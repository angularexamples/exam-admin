import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../../services/chapter.service';
import { ToastsManager } from 'ng6-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  public data: any = [];
  private id: any;
  public length : any;
  
  public rowsOnPage: number = 10;
  constructor(private _chapterApi: ChapterService,
    private toastr: ToastsManager,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._chapterApi.getChapters$(this.id).subscribe(data => {
      if (data.success) {
        this.data = data.chapters;
        this.length = this.data.length;
      } else { }
    });
  }
  deleteChapter(id: number, index) {
    var delmsg = confirm("Are u Sure Want to delete?");
    if (delmsg) {
      let apiEvent = this._chapterApi.deleteChapterById$(id)
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
