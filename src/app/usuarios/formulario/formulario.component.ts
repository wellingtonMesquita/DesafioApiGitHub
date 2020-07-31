import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Usuario } from '../shared/usuario';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario:String;
  @Output() callParent = new EventEmitter();

  formUsuario: FormGroup;
  
 
  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.createForm(new Usuario());
  }
 
  createForm(usuario: Usuario) {
    this.formUsuario = this.formBuilder.group({
      name: [usuario.name],
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formUsuario.value);
    this.callParent.emit(this.formUsuario.value);
    
  }
}