import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
// import {Inject} from '@angular/core';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

// export class DialogOverviewExample {
//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       data: {name: this.name, animal: this.animal},
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }
// }
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
    task: Task = {
      name: 'Indeterminate',
      completed: false,
      color: 'primary',
      subtasks: [
        {name: 'Primary', completed: false, color: 'primary'},
        {name: 'Accent', completed: false, color: 'accent'},
        {name: 'Warn', completed: false, color: 'warn'},
      ],
    };
  
    allComplete: boolean = false;
  
    updateAllComplete() {
      this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
  
    someComplete(): boolean {
      if (this.task.subtasks == null) {
        return false;
      }
      return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
  
    setAll(completed: boolean) {
      this.allComplete = completed;
      if (this.task.subtasks == null) {
        return;
      }
      this.task.subtasks.forEach(t => (t.completed = completed));
    }

    // animal: string;
    // name: string;
  
    // constructor(public dialog: MatDialog) {}
  
    // openDialog(): void {
    //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //     data: {name: this.name, animal: this.animal},
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     this.animal = result;
    //   });
    // }

    // constructor(
    //   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // ) {}
  
    // onNoClick(): void {
    //   this.dialogRef.close();
    // }
  }

 