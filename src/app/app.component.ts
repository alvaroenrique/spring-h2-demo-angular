import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from './exchange-rate.service';

export interface PeriodicElement {
  id: string;
  dolarPrice: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bcp-demo-front';

  displayedColumns: string[] = ['currency', 'price'];
  dataSource = ELEMENT_DATA;

  originalCurr = '';
  originalAmount = 0;
  targetCurr = '';

  finalAmount = '';
  exchangeRate = '';

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit() {
    this.exchangeRateService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource = res;
      },
    });
  }

  change() {
    console.log(this.originalCurr, this.originalAmount, this.targetCurr);
    this.exchangeRateService
      .changeCurrency(this.originalAmount, this.originalCurr, this.targetCurr)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.finalAmount = res?.monto_con_cambio;
          this.exchangeRate = res?.tipo_de_cambio;
        },
      });
  }
}
