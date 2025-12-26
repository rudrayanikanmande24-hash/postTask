import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../shared/model/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostGetConfirmComponent } from '../post-get-confirm/post-get-confirm.component';
import { PostService } from '../post.service';
import { SnackbarService } from '../snackbar.service';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() postObj ! : Ipost

  constructor(
    private _matDialogRef : MatDialog,
    private _postService : PostService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {

  }
  
 onRemove() {

  const matConfig = new MatDialogConfig();

  matConfig.data = `Are you sure, you want to remove the post with id ${this.postObj.id}?`;
  matConfig.width='450px'
  matConfig.disableClose=true;

 let matDialogRef= this._matDialogRef.open(PostGetConfirmComponent, matConfig);
   matDialogRef.afterClosed()
   .subscribe(flag=>{
    console.log(flag);
    if(flag){
      this._postService.removePost(this.postObj.id)
       .subscribe({
        next:data=>{
          console.log(data);
          this._snackBar.openSnackBar(data.msg.msg)
        },
        error:err=>{
          console.log(err);
          this._snackBar.openSnackBar(err)
        }
       })

    }
   })
}

onEdit() {
  console.log(this.postObj);

  const matConfig = new MatDialogConfig();
  matConfig.width = '500px';
  matConfig.disableClose = true;
  matConfig.data = this.postObj;  

  this._matDialogRef.open(PostFormComponent, matConfig);
}


}
