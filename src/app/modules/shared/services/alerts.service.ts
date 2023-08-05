import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private translateService: TranslateService,
    private _snackBar: MatSnackBar,private toastr: ToastrService
    ) { }

  openSweetAlert(sweetAlertMsg: any, sweetAlertIcon: any) :void{
    Swal.fire({
      // icon [error , info , success , warning , question]
      // position [top-end , bottom-end , bottom-start , top-start]
      title: '',
        text: sweetAlertMsg,
        icon: sweetAlertIcon,
        confirmButtonText: this.translateService.instant('ok'),
        // timer: 1500,
        // showCloseButton: true,
    });
  }

  openSnackBar(snackBarMsg:any) :void{
    this._snackBar.open(snackBarMsg, "X", {
      duration: 1000,
    });
  }

  openToastr(type:any,toastrMsg:any,timeOut:any,position:any) :void{
    // icon [success , error , info , warning]
    // positionClass: ['toast-bottom-right','toast-bottom-left','toast-top-right' , 'toast-top-left'],
    switch(type){
      case 'success':
        this.toastr.success( 'Success', toastrMsg,{
          timeOut: timeOut,
          positionClass:position
        });
        break;
        case 'error':
          this.toastr.error('Error', toastrMsg,{
            timeOut: timeOut,
            positionClass:position
          });
          break;
          case 'warning':
            this.toastr.warning('Warning', toastrMsg,{
              timeOut: timeOut,
              positionClass:position
            });
            break;
            case 'info':
              this.toastr.info('Information', toastrMsg,{
                timeOut: timeOut,
                positionClass:position
              });
              break;
    }
  }
}

