import { Injectable, isDevMode } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Tarea } from '../structures/tarea.structure';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  public tareasSubject : Subject<any> = new Subject<any>();
  public tareas$ : Observable<Tarea[]>;

  private endPoint = 'www.ejemplo.com/tareas' // en un futuro para consumir de API

  constructor(private http : HttpClient) { 
    this.tareas$ = this.tareasSubject.asObservable();
  }

  getTareas(){

    let url : string = this.endPoint;

    if(isDevMode){
      url = 'assets/tareas.json'
    }

    this.http.get(url).subscribe(this.tareasSubject);
    
  }
}
