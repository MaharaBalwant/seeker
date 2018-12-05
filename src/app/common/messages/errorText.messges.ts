import { Injectable } from '@angular/core';
@Injectable()
export class ErrorTextMessages{
    mandatory:string='Please Fill Mandatory field';
    email:string= 'Email address format is incorrect';
    taxIdFormat:string= 'SSN should be 9 digits without hyphen';
    zipFormat:string= 'Only 5 digits numbers allowed and Alphanumeric not allowed';
    cityFormat:string= 'City should not have any numbers';
    countyFormat:string= 'County should not have any numbers';
    googleValidate:string= 'Address Validation has not been completed';
    phoneValidate:string= 'Enter 10 digits number without spaces or special characters';
    rateFormat:string= 'Number allowed upto 2 decimal places';
}