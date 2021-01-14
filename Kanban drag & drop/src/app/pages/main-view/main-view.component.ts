import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board',[
    new Column('Mai teendők',[
      "Kutyaséta",
      "Főzés",
      "Tanulás"
    ]),
    new Column('Holnapi feladatok',[
      "Fejlesztés",
      "Edzés",
      "Sorozat nézés"
    ]),
    new Column('Heti feladatok',[
    'Fürdés',
    'Fogmosás',
    'Alvás',
    'Evés'
    ]),
    new Column("Kész",[
      'Felkelés',
      'Reggelizés',
      'Mosás',
      'Takarítás',
      'Bevásárlás'
    ])
  ]);

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
