import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from '@angular/router';
@Component({
  selector: 'app-salvar-usuario',
  templateUrl: './salvar-usuario.page.html',
  styleUrls: ['./salvar-usuario.page.scss'],
})
export class SalvarUsuarioPage implements OnInit {
  Usuario: Usuario = new Usuario();
  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {}
  salvar(){
  this.banco.list('usuario').push(this.Usuario);
  this.Usuario = new Usuario()
  this.rota.navigate(['listar-usuario']);
  alert("salvo com sucesso");
}
}
