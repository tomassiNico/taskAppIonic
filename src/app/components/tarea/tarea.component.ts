import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/structures/tarea.structure';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent implements OnInit {

  @Input() tarea : Tarea;

  constructor() { }

  ngOnInit() {}

}
