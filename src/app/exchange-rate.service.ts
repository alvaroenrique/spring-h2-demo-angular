import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}exchange-rate`);
  }
  changeCurrency(amount: number, originalCurr: string, targetCurr: string) {
    return this.http.get(
      `${this.baseUrl}exchange-rate/change?monto=${amount}&moneda_origen=${originalCurr}&moneda_destino=${targetCurr}`
    );
  }
}
