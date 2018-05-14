import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    showIncomeChart() {
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


      //Functions to add to the charts
      var addPie = function(type, des, val) {
        //Add item to pie CHART
        if (type == 'inc') {
          myIncome.series[0].addPoint({
            name: des,
            y: val
          });
          myIncome.redraw();
        }
      }

    }
  }

});
