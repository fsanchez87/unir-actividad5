import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  
  noticias: any[] = [];
  titulo: string = '';
  imagen: string = '';
  texto: string = '';
  fecha: string = '';
  mostarFormulario: boolean = true;
  
  constructor() {
    this.noticias = new Array(
      {
        titulo: 'Sunt aut facere repellat provident',
        imagen: '../../../assets/images/img1.jpg',
        texto:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
        fecha: '09/07/2022',
      },
      {
        titulo: 'Qui est esse',
        imagen: '../../../assets/images/img2.jpg',
        texto:
          'Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
        fecha: '05/07/2022',
      }
    );
  }

  ngOnInit(): void {
    console.log(this.noticias);
  }

  crearPost(): void {
    if (
      this.titulo !== '' &&
      this.imagen !== '' &&
      this.texto !== '' &&
      this.fecha !== ''
    ) {
      let newPost: {} = {
        titulo: this.titulo,
        imagen: this.imagen,
        texto: this.texto,
        fecha: this.fecha,
      };
      this.noticias = [newPost, ...this.noticias];
      this.resetForm();
    } else {
      alert('Debes de rellenar todos los campos');
    }
  }

  resetForm(): void {
    this.titulo = '';
    this.imagen = '';
    this.texto = '';
    this.fecha = '';
  }

  abrirFormulario(): void {
    this.mostarFormulario = !this.mostarFormulario
  }
}
