import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value,x){
  //   let fa=[];
  //   for (var i=0; i<value.length;i++){
  //     if(value[i]==x){
  //       fa.push(value[i]);
  //     }
    
    
  //   }
  //   return fa;}
  let fa=[]
  for( var i= 0 ;i< value.length;i++){
    
    if(value[i].includes(x)){
      fa.push(value[i])
    }
  }return fa;}

}
