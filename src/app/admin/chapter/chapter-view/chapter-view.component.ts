import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../../services/chapter.service';

@Component({
  selector: 'app-chapter-view',
  templateUrl: './chapter-view.component.html',
  styleUrls: ['./chapter-view.component.css']
})
export class ChapterViewComponent implements OnInit {
  public chapter: any;
  private id: number;
  constructor(private route: ActivatedRoute,
    private _chapterApi: ChapterService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this._chapterApi.getChapterById$(this.id).subscribe(res => {
      if (res.success) {
        this.chapter = res.chapter;
      }
    });
  }


}
