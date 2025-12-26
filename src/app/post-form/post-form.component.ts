import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ipost } from '../shared/model/post';
import { UuidService } from '../uuid.service';
import { log } from 'console';
import { PostService } from '../post.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  useridsArr:Array<number>=[1,2,3,4,5,6,7,8,9,10]
  @ViewChild('postForm') postForm ! : NgForm
  isInEditMode:boolean=false
  editObj!:Ipost
  constructor(
    private _matDialogRef:MatDialogRef<PostFormComponent>,
    private _uuidService:UuidService,
    private _postService : PostService,
    private _snackBar:SnackbarService,
    @Inject(MAT_DIALOG_DATA) data : Ipost
  ) { 
    console.log(data);
    if(data){
      this.isInEditMode=true,
      this.editObj=data;
      setTimeout(()=>{
        this.postForm.form.patchValue(data)
      })
    }
  }

  ngOnInit(): void {
  }

  onClose(){
    this._matDialogRef.close()
  }

  onPost(){
    if(this.postForm.valid){
      let PostObj:Ipost={
       ...this.postForm.value,
      id:this._uuidService.uuid()
      }
      console.log(PostObj);
      this._postService.createPost(PostObj)
       .subscribe({
        next:res=>{
          console.log(res);
          this._snackBar.openSnackBar(res.msg.msg)
          this.postForm.reset()
          this._matDialogRef.close()
        },
        error:err=>{
          console.log(err);
          this._snackBar.openSnackBar(err)
        }
       })
    }
  }

  onUpdate(){
    if(this.postForm.valid){
      let UpdatObj={
        ...this.postForm.value,
        id:this.editObj.id
      }
      console.log(UpdatObj);
       this._postService.updatePost(UpdatObj)
        .subscribe({
          next:res=>{
            console.log(res);
            this.postForm.reset()
            this._snackBar.openSnackBar(res.msg.msg)
            this._matDialogRef.close()
          },
          error:err=>{
            console.log(err);
            this._snackBar.openSnackBar(err)
          }
        })
    }
  }


}
