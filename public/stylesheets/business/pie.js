var new_data = [];
var i = 0;
var color = [
    "#F7464A",
    "#46BFBD",
    "#FDB45C",
    "#2D59AA"
];

data_list.forEach(function (val) {
    let tpm_data = {
        value: val.count,
        color: color[val.freight_forwarding],
        highlight:color[val.freight_forwarding],
        label: val.explain
    };

    new_data.push(tpm_data);

    i++;
});

var ctxp = $("#pieChartDemo").get(0).getContext("2d");
var pieChart = new Chart(ctxp).Pie(new_data);