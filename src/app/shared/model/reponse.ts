
export interface Iresponse<T>{
    success:boolean,
      msg:{
        msg:string,
        data:T
      }
   }
