import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value,a,b,c,d){
    if(a!=''){
      return  value.filter((books)=>books.id == a)
    }
    else if(b!=''){
      return  value.filter((books)=>books.title.includes(b))
    }
    else if(c!=''){
      return  value.filter((books)=>books.author.includes(c))
    }
    else if(d!=''){
      return  value.filter((books)=>books.year==d)
    }else {
      return  value
    }
    }

}
