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

//Functions to add to the charts
var addPie = function(type, des, val) {
  //Add item to pie CHART
  if (type == 'inc') {
    myIncome.series[0].addPoint({
      name: des,
      y: val
    });
    myIncome.redraw();
  } else {
    myExpense.series[0].addPoint({
      name: des,
      y: val
    });
    myExpense.redraw();
  }
}

var removePie = function(type, id) {
  //Remove item to pie CHART
  if (type == 'inc') {
    myIncome.series[0].data[id].remove();
    myIncome.redraw();
  } else {
    myExpense.series[0].data[id].remove();
    myExpense.redraw();
  }
}

var updateLine = function(budget) {
  myBalance.series[0].addPoint(
    budget
  );
}
