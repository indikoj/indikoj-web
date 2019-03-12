import { Dash } from './../../shared/Dash';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  dash: Dash[] = [
    {id: 1, nome: 'Sentence 1', descricao: 'kkk'},
    {id: 2, nome: 'Sentence 2', descricao: 'kkk'},
    {id: 3, nome: 'Sentence 3', descricao: 'kkk'},
    {id: 4, nome: 'Sentenc4', descricao: 'kkk'},
    {id: 5, nome: 'Sentenc5', descricao: 'kkk'},
    {id: 6, nome: 'Sentenc6', descricao: 'kkk'},
    {id: 7, nome: 'Sentenc7', descricao: 'kkk'},
    {id: 8, nome: 'Sentenc8', descricao: 'kkk'},
    {id: 9, nome: 'Sentenc9', descricao: 'kkk'},
    {id: 10, nome: 'Sentenc10', descricao: 'kkk'},
    {id: 11, nome: 'Sentenc11', descricao: 'kkk'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
