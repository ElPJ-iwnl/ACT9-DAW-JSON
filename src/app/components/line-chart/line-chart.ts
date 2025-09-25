import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import 'chart.js/auto';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  templateUrl: './line-chart.html',
  styleUrls: ['./line-chart.css']
})
export class LineChart implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  private labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'];
  private data1  = [120, 150, 180, 160, 190, 220, 210, 240];
  private data2  = [ 80, 100, 130, 140, 160, 170, 190, 200];

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          { label: 'Ventas',   data: this.data1, tension: 0.35, fill: false },
          { label: 'Ingresos', data: this.data2, tension: 0.35, fill: false }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: { intersect: false, mode: 'index' }
        },
        interaction: { intersect: false, mode: 'nearest' },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: false, ticks: { precision: 0 } }
        }
      }
    });
  }
}
