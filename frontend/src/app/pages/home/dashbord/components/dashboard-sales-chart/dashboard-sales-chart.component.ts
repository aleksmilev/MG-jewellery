import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexStroke, ApexGrid } from "ng-apexcharts";
import { ApiService } from '../../../../../api/api.service';

export type ChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    xaxis: ApexXAxis | any;
    dataLabels: ApexDataLabels | any;
    grid: ApexGrid | any;
    stroke: ApexStroke | any;
    title: ApexTitleSubtitle | any;
};

@Component({
    selector: 'app-dashboard-sales-chart',
    templateUrl: './dashboard-sales-chart.component.html',
    styleUrls: ['./dashboard-sales-chart.component.css']
})
export class DashboardSalesChartComponent {

    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions> | undefined;

    constructor(
        private http: ApiService
    ) {
        this.http.Get('/basic/order').subscribe(data => {
            this.chartOptions = {
                series: [
                    {
                        name: "Orders",
                        data: this.extractChartData(data)
                    }
                ],
                chart: {
                    height: 350,
                    type: "area",
                    stacked: true,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "smooth",
                    colors: ["#002952"]
                },
                title: {
                    text: "Поръчки по месец",
                    align: "left"
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"],
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: this.extractChartCategories(data)
                }
            };
        })

    }

    extractChartData(data: any): number[] {
        const orders = data.map((order: any) => ({
            date: new Date(order.date)
        }));   

        const currentDate = new Date();
        const previousMonthsData = new Array(9).fill(0);
        const previousMonthsLabels = [];

        for (let i = 1; i <= 9; i++) {
            const month = currentDate.getMonth() - i;
            const year = currentDate.getFullYear();
            const monthLabel = this.getMonthName(month);
            previousMonthsLabels.unshift(monthLabel);

            const ordersCount = orders.filter((order: any) => order.date.getMonth() === month && order.date.getFullYear() === year).length;
            previousMonthsData.unshift(ordersCount);
        }

        return previousMonthsData;
    }

    getMonthName(month: number): string {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[month];
    }

    extractChartCategories(data: any): string[] {
        return this.extractChartData(data).map((_, index) => {
            const currentDate = new Date();
            currentDate.setMonth(currentDate.getMonth() - (8 - index));
            return this.getMonthName(currentDate.getMonth());
        });
    }
}
