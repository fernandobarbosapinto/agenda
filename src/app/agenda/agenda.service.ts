import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Agenda } from './agenda.model';
import { MEAT_API} from '../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()

export class AgendaService{
    
    emitirNovoContato = new EventEmitter<string>();
    static criouNovoContato = new EventEmitter<string>();
    
    constructor(private http:Http){}

    contatosAgenda(): Observable<Agenda[]>{
        return this.http.get(`${MEAT_API}/contatos`)
            .map(response => response.json())
                .catch(ErrorHandler.handlerError);
    }

    checkNovoContato(criouNovoContato: Agenda): Observable<string>{
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(`${MEAT_API}/contatos`, 
                                JSON.stringify(criouNovoContato),
                                new RequestOptions({headers: headers}))
                        .map(response => response.json())
                        .catch(ErrorHandler.handlerError);
    }

}