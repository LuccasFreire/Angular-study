import { Component, Injectable } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrl: './cursos.component.css',
})
@Injectable()
export class CursosComponent {
    nomePortal: string;
    cursos: string[];

    constructor(private cursosService: CursosService) {
        this.nomePortal = 'google.com';
        //var servico = new CursosService();
        this.cursos = this.cursosService.getCursos();
    }
}
