// function to read json file

var DEMONSTRATOR = document.getElementById('demonstrator');

var data = [{"principal component 1":-2.5033615265,"principal component 2":-2.116819747,"principal component 3":-0.473804993,"Parties":"SPD"},{"principal component 1":4.3877263247,"principal component 2":-2.9056953124,"principal component 3":-0.2263891828,"Parties":"CDU\/CSU"},{"principal component 1":-3.165101672,"principal component 2":-1.9881037207,"principal component 3":-0.2600675969,"Parties":"GR\u00dcNE"},{"principal component 1":3.4618633767,"principal component 2":-2.9394726217,"principal component 3":3.3510534468,"Parties":"FDP"},{"principal component 1":6.1578362079,"principal component 2":1.2196474025,"principal component 3":1.5942670099,"Parties":"AfD"},{"principal component 1":-4.2230297489,"principal component 2":0.7891514529,"principal component 3":0.7191278527,"Parties":"Die Linke"},{"principal component 1":-3.7552158716,"principal component 2":-1.40666507,"principal component 3":-1.0844597683,"Parties":"SSW"},{"principal component 1":2.8141761006,"principal component 2":-2.2817992233,"principal component 3":-1.4705284788,"Parties":"FREIE W\u00c4HLER"},{"principal component 1":-4.2855037163,"principal component 2":-0.2808394355,"principal component 3":0.2438904947,"Parties":"Tierschutzpartei"},{"principal component 1":2.5155043889,"principal component 2":3.285735427,"principal component 3":-1.7052834319,"Parties":"dieBasis"},{"principal component 1":-4.1190197899,"principal component 2":0.4651758663,"principal component 3":0.3103787579,"Parties":"Die PARTEI"},{"principal component 1":-1.0811685531,"principal component 2":1.3778883917,"principal component 3":1.1866515076,"Parties":"Die Gerechtigkeitspartei \u2013 Team Todenh\u00f6fer"},{"principal component 1":-3.5888192309,"principal component 2":-0.6956179892,"principal component 3":-0.8961287871,"Parties":"Piratenpartei"},{"principal component 1":-4.2395874446,"principal component 2":-1.0516453495,"principal component 3":-0.1021005173,"Parties":"Volt"},{"principal component 1":-1.8477602316,"principal component 2":0.9038825697,"principal component 3":-2.7630731735,"Parties":"\u00f6dp"},{"principal component 1":1.1817951854,"principal component 2":-0.0640813717,"principal component 3":0.2228537475,"Parties":"Verj\u00fcngungsforschung"},{"principal component 1":-1.8202213287,"principal component 2":-2.1124414834,"principal component 3":1.1392694846,"Parties":"PdH"},{"principal component 1":5.3030935136,"principal component 2":1.0824046838,"principal component 3":-2.4163883755,"Parties":"b\u00fcndnis C"},{"principal component 1":5.1543258217,"principal component 2":-0.3005168903,"principal component 3":-0.3348227425,"Parties":"Bayernpartei"},{"principal component 1":-3.7047074004,"principal component 2":2.1912576679,"principal component 3":0.7780447198,"Parties":"MLPD"},{"principal component 1":3.123979796,"principal component 2":1.4738648261,"principal component 3":-1.3427654445,"Parties":"Menschliche Welt"},{"principal component 1":-1.4620246971,"principal component 2":-2.2147261478,"principal component 3":-2.3686742017,"Parties":"PdF"},{"principal component 1":-3.6061367716,"principal component 2":2.2698276931,"principal component 3":1.0976123288,"Parties":"SGP"},{"principal component 1":2.7645882546,"principal component 2":2.9478088812,"principal component 3":-0.3926042117,"Parties":"B\u00fcSo"},{"principal component 1":5.899777948,"principal component 2":-0.5469291753,"principal component 3":-0.1655596045,"Parties":"B\u00fcndnis Deutschland"},{"principal component 1":-0.671419082,"principal component 2":1.4458259595,"principal component 3":1.8488601001,"Parties":"BSW"},{"principal component 1":-4.2142455748,"principal component 2":1.4920681796,"principal component 3":1.2684859944,"Parties":"MERA25"},{"principal component 1":5.5226557219,"principal component 2":-0.0391854635,"principal component 3":2.2421550652,"Parties":"WerteUnion"},{"principal component 1":0.8594011337,"principal component 2":0.1779673009,"principal component 3":-0.862837616,"Parties":"Alex"},{"principal component 1":-2.9941904802,"principal component 2":-1.1975396083,"principal component 3":-0.565799292,"Parties":"Chris"},{"principal component 1":-2.5683151777,"principal component 2":-2.2756188395,"principal component 3":-0.9178503995,"Parties":"Henning"},{"principal component 1":-2.7203377145,"principal component 2":-1.8830257264,"principal component 3":-0.4629148329,"Parties":"Jonas"},{"principal component 1":-3.310064816,"principal component 2":-0.2900181767,"principal component 3":-0.6490297738,"Parties":"Kaspar"},{"principal component 1":-0.7478062826,"principal component 2":-2.240669051,"principal component 3":-2.1200015055,"Parties":"Max"},{"principal component 1":-3.6283398312,"principal component 2":0.3748765136,"principal component 3":-0.0328158167,"Parties":"Nicolas"},{"principal component 1":-1.2667909594,"principal component 2":-0.5804917986,"principal component 3":0.2234262833,"Parties":"Niki"},{"principal component 1":-2.756642239,"principal component 2":-2.3469758467,"principal component 3":-0.6734687012,"Parties":"Philip"}];



var text = new Array(data.length);
var z_data = new Array(data.length);
var y_data = new Array(data.length);
var x_data = new Array(data.length);


for (var i = 0; i<data.length; i++) {
    x_data[i] = data[i]["principal component 1"];
    y_data[i] = data[i]["principal component 2"];
    z_data[i] = data[i]["principal component 3"];
    text[i] = data[i]["Parties"];
}


var trace1= {
    x: x_data.slice(0, 28),
    y: y_data.slice(0, 28),
    z: z_data.slice(0, 28),
    text: text.slice(0, 28),
    type: 'scatter3d',
    mode: 'markers+text',
    marker: {
        size: 5,
        opacity: 0.8,
        color: 'blue',
    }
};



var trace2= {
    x: x_data.slice(28, data.length),
    y: y_data.slice(28, data.length),
    z: z_data.slice(28, data.length),
    text: text.slice(28, data.length),
    type: 'scatter3d',
    mode: 'markers+text',
    marker: {
        size: 5,
        opacity: 0.8,
        color: 'red',
    }
};

data = [trace1, trace2];

//console.log(text);
var layout = {margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 0
}};

//Initiales Zeichnen des Plots
Plotly.newPlot(DEMONSTRATOR, data, layout);