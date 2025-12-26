import { Injectable } from '@angular/core';
import { Ipost } from './shared/model/post';
import { Observable, of } from 'rxjs';
import { Iresponse } from './shared/model/reponse';

@Injectable({
  providedIn: 'root'
})
export class PostService {
postsArr:Array<Ipost> = [
  {
    id: '101',
    userId: 1,
    title: 'Angular Basics',
    body: 'Angular framework basic information'
  },
  {
    id: '102',
    userId: 2,
    title: 'TypeScript',
    body: 'TypeScript is superset of js'
  },
  {
    id: '103',
    userId: 3,
    title: 'Angular',
    body: 'Angular is a js framework'
  },
  {
    id: '104',
    userId: 1,
    title: 'Routing',
    body: 'Angular routing step by step'
  },
  {
    id: '105',
    userId: 2,
    title: 'Forms',
    body: 'Template driven and reactive forms'
  }
];


  constructor() { }


  fetchPost():Observable<Iresponse<Ipost[]>>{
     return of({
      success:true,
      msg:{
        msg:`All Post fetched successfully !!!`,
        data:this.postsArr
      }
     })
  }

  createPost(post:Ipost):Observable<Iresponse<Ipost>>{
      this.postsArr.unshift(post)
      return of({
        success:true,
        msg:{
          msg:'All Posts with id ${post.id} is created successfully !!!',
          data:post
        }
      })
  }

  updatePost(updatePost:Ipost):Observable<Iresponse<Ipost>>{
   let i = this.postsArr.findIndex(p=>p.id === updatePost.id)
   this.postsArr[i]=updatePost
   return of({
    success:true,
    msg:{
      msg:`The post with id ${updatePost.id} is updated successfully !!!`,
      data:updatePost
    }
   })
  }

  removePost(id:string):Observable<Iresponse<Ipost>>{
    let i = this.postsArr.findIndex(p=>p.id === id)
    this.postsArr.splice(i,1)
    return of({
      success:true,
      msg:{
        msg:`The post with id ${id} is remove successfully !!!`,
        data:this.postsArr[0]
      }
    })
  }
}
