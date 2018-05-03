import { Component, OnInit, ViewChild} from '@angular/core';
import { Agenda } from './agenda.model';
import { AgendaService } from './agenda.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @ViewChild(NgForm) myForm: NgForm;

  itensAgenda: Agenda[];
  novoContato: any;
  value: any;
  onChange: any;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
      this.agendaService.contatosAgenda().subscribe(itens => this.itensAgenda = itens);
  }

  checkNovoContato(novoContato: Agenda){
    this.agendaService.checkNovoContato(novoContato)
      .subscribe((novoContato: string) =>{
        this.clearForm();
      })
  }

  clearForm(){
    this.myForm.resetForm();
  }

}
