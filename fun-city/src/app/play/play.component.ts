import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  amount;
GameList;
//={id: '', gameId: '', gameName:'', gamePrice: ''}
  constructor(private route:ActivatedRoute,private gs:GamesService) {
    route.params.subscribe((parameters)=>this.amount=parameters['amount'])
    gs.getAll().subscribe((res)=>this.GameList=res)
    this.amount=this.amount-100
   }

  ngOnInit() {
  }

}
