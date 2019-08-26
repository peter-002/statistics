var counts      = [];
var create_date = [];

data_list.forEach(function (val) {
    counts.push(val.count);
    create_date.push(val.create_date);
});

var data = {
    labels  : create_date,
    datasets: [
        {
            label               : "My First dataset",
            fillColor           : "rgba(220,220,220,0.2)",
            strokeColor         : "rgba(220,220,220,1)",
            pointColor          : "rgba(220,220,220,1)",
            pointStrokeColor    : "#fff",
            pointHighlightFill  : "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data                : counts
        }
    ]
};

var ctxl      = $("#lineChartDemo").get(0).getContext("2d");
var lineChart = new Chart(ctxl).Line(data);

$("#exampleSelect1").change(function () {
    console.log($(this).val());
    var val      = $(this).val(),
        pathname = window.location.pathname,
        origin   = window.location.origin;

    location.href = origin + pathname + '?argument=' + val;
});