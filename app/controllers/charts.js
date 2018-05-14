import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    showIncomeChart(){
      // Make teal colors
      var teal = (function() {
        var colors = [],
          base = Highcharts.getOptions().colors[9],
          i;

        for (i = 0; i < 10; i += 1) {
          // Start out with a darkened base color (negative brighten), and end
          // up with a much brighter color
          colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
      }());

      //PI CHARTS
      var myIncome = Highcharts.chart('pi-income-container', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Your Income'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: teal,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50
            }
          }
        },
        series: [{
          name: '$',
          colorByPoint: true,
        }]
      });

      this.get('inc').toArray().forEach(function(item) {
          myIncome.series[0].addPoint({
              name: item.get('income_description'),
              y: item.get('income')
            });
      });

      myIncome.redraw();

    },

    showExpenseChart(){

      // Make red colors
      var red = (function() {
        var colors = [],
          base = Highcharts.getOptions().colors[8],
          i;

        for (i = 0; i < 10; i += 1) {
          // Start out with a darkened base color (negative brighten), and end
          // up with a much brighter color
          colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
      }());

      var myExpense = Highcharts.chart('pi-expense-container', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Your Spending'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: red,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50
            }
          }
        },
        series: [{
          name: '$',
          colorByPoint: true,
        }]
      });

      this.get('exp').toArray().forEach(function(item) {
        //alert(item.get('expense_description'));
          myExpense.series[0].addPoint({
              name: item.get('expense_description'),
              y: item.get('expense')
            });
      });

      myExpense.redraw();

  },

  showBalanceLine(){
    //Line Chart
    var myBalance = Highcharts.chart('balance-container', {
      title: {
        text: 'Your Balance History'
      },
      yAxis: {
        title: {
          text: '$ Amount'
        }
      },
      xAxis: {
        tickInterval: 1,
        title: {
          text: '# of Transactions/Deposits'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 0
        }
      },

      series: [{
        name: 'Balance',
        color: '#09EB6D'
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    });
    this.get('bal').toArray().forEach(function(item) {
      //alert(item.get('expense_description'));
      myBalance.series[0].addPoint(
        item.get('balance')
      );
    });
  }


}

});
