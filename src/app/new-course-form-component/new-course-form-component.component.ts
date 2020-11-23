import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent {
  // // Below are different approaches. For example purpose
  // // Below Mentioned can be rewrite using formBuilder class.
  // //Approach 1
  // forms = new FormGroup({
  //   name: new FormControl(),
  //   contact: new FormGroup({
  //     phone: new FormControl('', Validators.required),
  //     email: new FormControl(),
  //   }),
  //   topics: new FormArray([]),
  // });
  // //End of Approach 1
  // // rewritten using form builder class
  // //Approach 2
  // forms;
  // constructor(fb: FormBuilder) {
  //   this.forms = fb.group({
  //     name: [],
  //     contact: fb.group({
  //       phone: [],
  //       email: []
  //     }),
  //     topics: fb.array
  //   })
  // }
  // //End of Approach

  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopics(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
