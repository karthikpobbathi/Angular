import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css']
})
export class Lab3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myForm = new FormGroup({
    pid: new FormControl('',[Validators.required]),
    pname: new FormControl('',[Validators.required]),
    pcost: new FormControl('',[Validators.required]),
    ponline: new FormControl('',[Validators.required]),
    pcat: new FormControl('',[Validators.required]),
    pstore:new FormControl('',[Validators.requiredTrue]),
    pstore1:new FormControl('',[Validators.requiredTrue]),
    pstore2:new FormControl('',[Validators.requiredTrue]),
    pstore3:new FormControl('',[Validators.requiredTrue])
  })
  pid;
  pname
  pcost
  ponline
  pcat 
  pstore

  onFormSubmit(){
    console.log(this.pid+this.pname+this.pcost+this.ponline+this.pcat+this.pstore)
  }
  error_messages={
    'pid':[{type:'required', message:'ID must not be empty'}],
    'pname':[{type:'required',message:'Name must  not be empty'
    }],
    'pcost':[{type:'required',message:'cost must  not be empty'
    }],
    'ponline':[{type:'required',message:' select any one'
    }],'pcat':[{type:'required',message:'choose one'
  }],
  'pstore':[{type:'required',message:'seloect any option'
  }],
  'pstore1':[{type:'required',message:'seloect any option'
}],
'pstore2':[{type:'required',message:'seloect any option'
}],
'pstore3':[{type:'required',message:'seloect any option'
}]
  }
}
