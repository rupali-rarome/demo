import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SignupValidate {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    // Asyncronous validator function eg.
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'rupali') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

}