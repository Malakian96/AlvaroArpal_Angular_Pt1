import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba-form',
  templateUrl: './prueba-form.component.html',
  styleUrls: ['./prueba-form.component.css']
})
export class PruebaFormComponent implements OnInit{
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
