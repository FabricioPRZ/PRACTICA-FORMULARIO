import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;

  @Output() nuevoEstudiante = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: [''],
      asignaturas: ['']
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid) {
      const nuevoAlumno = {
        name: this.formulario.value.nombre,
        asignatures: this.formulario.value.asignaturas.split(',').map((item: string) => item.trim())
      };
      this.nuevoEstudiante.emit(nuevoAlumno);
      this.formulario.reset();
    }
  }
}
