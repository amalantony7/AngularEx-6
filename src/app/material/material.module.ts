import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatIconModule,
         MatButtonToggleModule,
         MatBadgeModule,
         MatProgressSpinnerModule,
         MatProgressBarModule,
         MatToolbarModule,
         MatSidenavModule,
         MatMenuModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
]

@NgModule({
  imports: [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }
