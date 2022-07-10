> By default binding a checkbox to our form return true/false.

We can use `FormBuilder` to build an array with the that matches the same index of values, and bind the checkbox input
control name to the index. Then We can subscribe to the `form.control.[controlName].valueChanges` swap the true values
of the `boolean[]` with `values[i]`. Finally, we filter out all the false from the array and set the parent control to
the filter out array.

`input-checkbox-value`

```ts
import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector:
    // require all inputs
        'input-checkboxes-list-value[parentFormGroup][parentFormControlName][values]',
    templateUrl: './input-checkbox-list-value.component.html',
    styleUrls: ['./input-checkbox-list-value.component.css'],
    // allows the use of ::part() for styling in the parent
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class InputCheckboxListValueComponent implements OnInit {
    @Input() parentFormGroup: FormGroup;
    @Input() parentFormControlName: string;
    @Input() values: [];

    form: FormGroup;
    checkboxesSubscription: Subscription;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.setForm();
        this.checkboxesSubscription = this.handleCheckboxes();
    }

    private handleCheckboxes() {
        return this.form.controls.checkboxes.valueChanges.subscribe(
            (checkboxes: boolean[]) => {
                // replace the true value with the values[i]
                this.form.controls.checkboxes.setValue(
                    checkboxes.map((value, i) => (value ? this.values[i] : false)),
                    {
                        emitEvent: false,
                    }
                );

                // save the value[] to the parent form control
                this.parentFormGroup.controls[this.parentFormControlName].setValue(
                    this.form.controls.checkboxes.value.filter(
                        (checkbox) => checkbox != false
                    ),
                    {
                        emitEvent: false,
                    }
                );
            }
        );
    }

    private setForm() {
        return new FormGroup({
            // set a formarray with the false[] of the length of value
            // the the checkbox is selected it will toggle true/false on the index
            checkboxes: this.formBuilder.array(this.values.map((_value) => false)),
        });
    }

    ngOnDestroy() {
        this.checkboxesSubscription.unsubscribe();
    }
}
```

```html
<!-- part exposes the element to the parent::part() -->
<ng-container [formGroup]="form">
    <!-- bind the checkboxes control, and its children as the checkboxes array -->
    <label
            part="label"
            *ngFor="let value of values; let i = index"
            formArrayName="checkboxes"
    >
        <span part="label-text">{{ value.name }}</span>
        <!-- bind the values index and checkboxes index-->
        <input part="input" type="checkbox" [formControlName]="i" [value]="value"/>
        <ng-content></ng-content>
    </label>
</ng-container>
```

`parent component`

```html

<form [formGroup]="form" (ngSubmit)="onSubmit()">
    <div class="radio">
        <!--        acts like an input that takes a list of values and set the form control to the selected values -->
        <!--        style in the parent component -->
        <input-checkboxes-list-value
                class="checkboxes"
                [parentFormGroup]="form"
                parentFormControlName="values"
                [values]="values"
        >
        </input-checkboxes-list-value>
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
</form>
```

```ts
//parent component that on submit console logs its form
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface IdNameInterface {
    id: number;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    form: FormGroup;
    values: IdNameInterface[] = [
        {id: 1, name: 'hello'},
        {id: 2, name: 'world'},
        {id: 3, name: 'Royer'},
    ];

    constructor() {
    }

    ngOnInit() {
        this.form = this.setForm();

        console.log(this.form.value);
    }

    private setForm() {
        return new FormGroup({
            values: new FormControl([]),
        });
    }

    onSubmit() {
        console.log(this.form.value);
        console.log(this.form.controls.values.value);
    }

}

```

```css

/* change the component input-checkbox-value by selecting it and using ::part(<element part property value>) */

.checkboxes {
    background-color: black;
    font-size: 12px;
    padding: 10px;
    display: grid;
}

input-checkboxes-list-value::part(label) {
    color: red;
}

.checkboxes::part(label):hover {
    background-color: white;
}

```