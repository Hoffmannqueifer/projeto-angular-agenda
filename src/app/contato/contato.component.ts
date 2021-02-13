
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {MatDialog} from '@angular/material/dialog';
import { ContatoDetalheComponent} from '../contato-detalhe/contato-detalhe.component'
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as $ from 'jquery';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  contatos: Contato[]= [];
  colunas =['foto','id', 'nome', 'email', 'telefone', 'favorito']

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions : number[] = [10]

  constructor(private service: ContatoService, private fb: FormBuilder, private dialog: MatDialog, private snackBar: MatSnackBar ){

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      telefone: ['',Validators.required ]
    })
    this.PaginarContatos(this.pagina, this.tamanho);
  }

  submit() {
    const formValues = this.formulario.value;
    const contato: Contato = new Contato(formValues.nome, formValues.email, formValues.telefone);
    this.service.save(contato).subscribe(response => {
      this.PaginarContatos();
      this.snackBar.open('Contato cadastrado com Sucesso!!', 'Fechar', {duration: 3000});
      this.formulario.reset();
    }) 
  }

  PaginarContatos(pagina =0, tamanho=10){
    this.service.paginarContatosService(pagina, tamanho).subscribe(response =>{
      this.contatos =response.content;
      this.totalElementos = response.totalElements;
      this.pagina = response.number;
    })
  }

  favoritarContato(contato : Contato){
    this.service.favorite(contato).subscribe(response =>{
      contato.favorito = !contato.favorito;
    })
    
  }

  uploadFoto(event, contato){
    const files = event.target.files;
    if(files){
      const foto = files[0];
      const formData : FormData = new FormData();
      formData.append("foto", foto);
      this.service.upload(contato, formData).subscribe(response =>{
        this.PaginarContatos()
      })
    }
  }

  visualizarContato(contato: Contato ){
    this.dialog.open(ContatoDetalheComponent, {
      width: '400px',
      height: '450px',
      data: contato
    })
  }

  paginar(event: PageEvent){
    this.pagina = event.pageIndex;
    this.PaginarContatos(this.pagina,this.tamanho);
  }
}