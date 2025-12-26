import { Component, Inject, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-get-confirm',
  templateUrl: './post-get-confirm.component.html',
  styleUrls: ['./post-get-confirm.component.scss']
})
export class PostGetConfirmComponent implements OnInit {
msg!:string
  constructor(
    private _postService:PostService,
    private _matDialogRef:MatDialogRef<PostGetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA)data:string
  ) {this.msg=data}

  ngOnInit(): void {
  }

   onClose(flag: boolean) {
    this._matDialogRef.close(flag);
  }

 

}
