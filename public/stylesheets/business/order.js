var counts = [];
var create_date = [];

data_list.forEach(function (val) {
    counts.push(val.count);
    create_date.push(val.create_date);
});

var data = {
    labels: create_date,
    // labels: aa,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: counts
        }
    ]
};

var ctxl = $("#lineChartDemo").get(0).getContext("2d");
var lineChart = new Chart(ctxl).Line(data);