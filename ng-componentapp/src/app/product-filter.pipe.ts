import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value,x) {
    let fa=[]
  for( var i= 0 ;i< value.length;i++){
    
    if(value[i].name.includes(x)){
      fa.push(value[i])
    }
  }return fa;
  }

}
