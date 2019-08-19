import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database'
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.page.html',
  styleUrls: ['./listar-usuario.page.scss'],
})
export class ListarUsuarioPage implements OnInit {
listarUsuario: Observable<Usuario[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listarUsuario = this.fire.list<Usuario>('usuario').snapshotChanges().pipe(
  map( lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val() }) ) )
  );
}
  ngOnInit() {
  }

}
