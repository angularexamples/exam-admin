import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../../services/chapter.service';
import { ChapterModel } from '../../../models/chapter.model';

@Component({
  selector: 'app-update-chapter',
  templateUrl: './update-chapter.component.html',
  styleUrls: ['./update-chapter.component.css']
})
export class UpdateChapterComponent implements OnInit {
  public chapter: ChapterModel;
  private id: number;
  public loading : boolean;
  constructor(private _courseApi: ChapterService,
    private route: ActivatedRoute,
    private utils : UtilsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.loading = true;
    this._courseApi.getChapterById$(this.id)
      .subscribe(res => {
        if (res.success) {
          this.loading = false;
          this.chapter = res.chapter;
          console.log(this.chapter)
        }
      }, err => {
        this.loading = false;
        // this.error = true;
      });
  }

}
