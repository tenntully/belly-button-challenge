/*
    D3 is alibrary that allows for us to implement data driven documents
    D3 allows for more interactive elements to be added
    Perfect for Dashboards!
*/

// first use D3.json() to access jsonified data 
d3.json("data.json").then(function(data){
    console.log(data)
});

// function that filters greek search resutls
function popularGreek(greek)
{
    return greek.greekSearchResults > 100000000
}

d3.json("data.json").then(function(data){
    let poppinGreeks = data.filter(popularGreek);

    // console.log(poppinGreeks)

    let trace = {
        x: poppinGreeks.map(entry => entry.greekName),
        y: poppinGreeks.map(entry => entry.greekSearchResults),
        type: "bar"
    };

    let traceData = [trace];

    let layout = {
        title: "popular greek search results"
    };

    Plotly.newPlot("plot1", traceData, layout);
});
