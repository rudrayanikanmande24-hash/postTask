import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { log } from 'console';
import { Ipost } from '../shared/model/post';
import { SnackbarService } from '../snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postsArr:Array<Ipost>=[]
  constructor(
    private _postService : PostService,
    private _snackBar:SnackbarService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this._postService.fetchPost()
     .subscribe({
      next:res=>{
         console.log(res);
         this.postsArr = res.msg.data
         this._snackBar.openSnackBar(res.msg.msg)
        },
        error:err=>{
          console.log(err);
          
        }
     })
  }

  onMatOpen(){
   let matDialogRef = this._matDialog.open(PostFormComponent,{
    width:'450px',
    disableClose:true,
    autoFocus:true
   })
   matDialogRef.afterClosed()
    .subscribe(res=>{
      console.log(res);
      
    })
  }
}
