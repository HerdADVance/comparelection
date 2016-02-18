var globalSxOne, globalSyOne, globalSsOne, globalSxTwo, globalSyTwo, globalSsTwo;

var area= d3.select("#map1").node().getBoundingClientRect();
var w = area.width;
var sw = 690;
var h = 500;

var svgone = d3.select("#map1").append("svg").attr({width: w, height: h });
var svgtwo = d3.select("#map2").append("svg").attr({width: w, height: h });

var tooltip = d3.select("body").append("div")
		.attr("class", "tooltip")
		.attr("id", "tooltip")
		.style("opacity", 0)

$(window).resize(function() {
  var area= d3.select("#map1").node().getBoundingClientRect();
	var w = area.width;

	var nwOne = globalSxOne - ((sw-w)/2);
	var nwTwo = globalSxTwo - ((sw-w)/2);

	var projOne = d3.geo.albers()
		.translate([nwOne, globalSyOne])
		.scale([globalSsOne])

	var projTwo = d3.geo.albers()
		.translate([nwTwo, globalSyTwo])
		.scale([globalSsTwo])

	var pathOne = d3.geo.path().projection(projOne);
	var pathTwo = d3.geo.path().projection(projTwo);
	
	resizeSvg(pathOne, pathTwo, w);
});

function getPathSizes(stateProj){
	var area= d3.select("#map1").node().getBoundingClientRect();
	var w = area.width;
	var sw = 690; //standard width
	var h = 500; //height

	var sx = stateProj["sx"]; // translate-x for standard width
	var sy = stateProj["sy"]; // translate-y
	var ss = stateProj["ss"]; // scale

	var nw = sx - ((sw-w)/2); // translate-x for new width

	var proj = d3.geo.albers()
		.translate([nw, sy])
		.scale([ss])

	var path = d3.geo.path().projection(proj);
	return path;
}

function setGlobalProjections(stateProj, mapId){
	if(mapId == "#map1"){
		globalSxOne = stateProj["sx"];
		globalSyOne = stateProj["sy"];
		globalSsOne = stateProj["ss"];
	}
	if(mapId == "#map2"){
		globalSxTwo = stateProj["sx"];
		globalSyTwo = stateProj["sy"];
		globalSsTwo = stateProj["ss"];
	}
}

function classifyName(name){
	name = name.replace(/\./g, '-').toLowerCase();
	name = name.replace(/\,/g, '-').toLowerCase();
	return name = name.replace(/\s+/g, '-').toLowerCase();
	/\./g,' '
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function fillColor(votes, countyId, year){
	var countyId = countyId.slice(7);
	var county = $.grep(votes, function(e){ return e["FIPS Code"] == countyId; });
	var results = countyResults(county[0], year);
	if(results.length > 0){
		return classifyName(results[0].name)
	}
	else return "none";
}
function countySuffix(state){
	switch(state){
		case "LA":
			var suffix = " Parish";
			break;
		case "US":
			var suffix = "";
			break;
		default:
			var suffix = " County";
	}
	return suffix;
}
function countyResults(county, year){
	var results = [];
	if(county){

		switch(year){
			case "2008":
				results = results2008(county);
				break;
			case "2012":
				results = results2012(county);
				break;
		}

		results.sort(function(a, b){return b.votes-a.votes});
		results = results.slice(0,5);
	}
	return results;
}

function results2008(county){
	var results = [];
	results.push({
		"name": "Barack Obama",
		"votes": county["Obama#"]
	});
	results.push({
		"name": "John McCain",
		"votes": county["McCain#"]
	});
	if(county["Nader#"]){
		results.push({
			"name": "Ralph Nader",
			"votes": county["Nader#"]
		});
	}
	if(county["Barr#"]){
		results.push({
			"name": "Bob Barr",
			"votes": county["Barr#"]
		});
	}
	if(county["McKinney#"]){
		results.push({
			"name": "Cynthia McKinney",
			"votes": county["McKinney#"]
		});
	}
	if(county["Baldwin#"]){
		results.push({
			"name": "Chuck Baldwin",
			"votes": county["Baldwin#"]
		});
	}
	if(county["Keyes#"]){
		results.push({
			"name": "Alan Keyes",
			"votes": county["Keyes#"]
		});
	}
	if(county["Paul#"]){
		results.push({
			"name": "Ron Paul",
			"votes": county["Paul#"]
		});
	}
	if(county["Other#"]){
		results.push({
			"name": "Other",
			"votes": county["Other#"]
		});
	}

	for(var x=0; x<results.length; x++){
		if(county["Total"]){
			results[x]["pct"] = results[x]["votes"]/county["Total"];
		}
	}
	return results;
}
function results2012(county){
	var results = [];
	results.push({
		"name": county["FirstOne"] + " " + county["LastOne"],
		"votes": county["VotesOne"],
		"pct": county["VotesOne"]/county["TOTAL VOTES CAST"]
	});
	results.push({
		"name": county["FirstTwo"] + " " + county["LastTwo"],
		"votes": county["VotesTwo"],
		"pct": county["VotesTwo"]/county["TOTAL VOTES CAST"]
	});
	if(county["FirstThree"] != null){
		results.push({
			"name": county["FirstThree"] + " " + county["LastThree"],
			"votes": county["VotesThree"],
			"pct": county["VotesThree"]/county["TOTAL VOTES CAST"]
		});
	}
	if(county["FirstFour"] != null){
		results.push({
			"name": county["FirstFour"] + " " + county["LastFour"],
			"votes": county["VotesFour"],
			"pct": county["VotesFour"]/county["TOTAL VOTES CAST"]
		});
	}
	if(county["FirstFive"] != null){
		results.push({
			"name": county["FirstFive"] + " " + county["LastFive"],
			"votes": county["VotesFive"],
			"pct": county["VotesFive"]/county["TOTAL VOTES CAST"]
		});
	}
	if(county["FirstSix"] != null){
		results.push({
			"name": county["FirstSix"] + " " + county["LastSix"],
			"votes": county["VotesSix"],
			"pct": county["VotesSix"]/county["TOTAL VOTES CAST"]
		});
	}
	if(county["FirstSeven"] != null){
		results.push({
			"name": county["FirstSeven"] + " " + county["LastSeven"],
			"votes": county["VotesSeven"],
			"pct": county["VotesSeven"]/county["TOTAL VOTES CAST"]
		});
	}
	if(county["FirstEight"] != null){
		results.push({
			"name": county["FirstEight"] + " " + county["LastEight"],
			"votes": county["VotesEight"],
			"pct": county["VotesEight"]/county["TOTAL VOTES CAST"]
		});
	}
	if(county["FirstNine"] != null){
		results.push({
			"name": county["FirstNine"] + " " + county["LastNine"],
			"votes": county["VotesNine"],
			"pct": county["VotesNine"]/county["TOTAL VOTES CAST"]
		});
	}
	return results;
}

function tooltipData(votes, countyId, state, year){
	var countyId = countyId.slice(7);
	var county = $.grep(votes, function(e){ return e["FIPS Code"] == countyId; });
	var results = countyResults(county[0], year);

	if(results.length > 0){
		var output = "<p class='county-name'>" + county[0]["County Name"] + countySuffix(state) + "</p>";
		output += "<table class='county-results'><tr><th></th><th>Votes</th><th>Pct</th></tr>"
		for(var i=0; i<results.length; i++){
			var pct = ((results[i].pct)*100).toFixed(2) + "%";
			var votes = numberWithCommas(results[i].votes);
			output += "<tr><td class='cand-name'>" + results[i].name + "</td><td>" + votes + "</td><td>" + pct + "</td></tr>";
		}
		output += "</table>";
		return output;
	}
	else return "<p class='county-name'>County results unavailable</p>";
}

function addStateData(state, mapId, year){
	var output = "";
	var results = countyResults(state, year);
	for(var i=0; i<results.length; i++){
		var pct = ((results[i].pct)*100).toFixed(2) + "%";
		output += "<div class='state-cand " + classifyName(results[i].name) + "'>";
		output += results[i].name + ": <span class='state-votes'>" + numberWithCommas(results[i].votes) + "</span><span class='state-pct'>" + pct + "</span>";
		output += "</div>";
	}
	d3.select(mapId + " .state-data").remove();
	d3.select(mapId).append("div").attr("class", "state-data").html(output);
}

function buildSvg(mapId, stateProj, counties, votes, state, year){
	if(mapId == "#map1"){ var svg = svgone;}
	if(mapId == "#map2"){ var svg = svgtwo;}

	var path = getPathSizes(stateProj);
	
	svg.selectAll("path").remove();
	svg.selectAll("path").data(counties).enter().append("path")
		.attr({
			"d":  path,
			"stroke": "white",
			"stroke-width": 1,
			"id": function(d){return d.properties.geoid; },
			"class": function(d){return fillColor(votes, d.properties.geoid, year); },
			"data-state": function(d){return d.properties.LSAD; }
		})
		.on("mouseover", function(d){
			// position tooltip on left or right side of mouse and find width of tooltip
			var tooltipWidth = d3.select("#tooltip").node().getBoundingClientRect().width;
			if(tooltipWidth == 0){tooltipWidth = 300;}
			var width = d3.select("body").node().getBoundingClientRect().width;
			var pageX = d3.event.pageX;
			if(pageX <= width/2){var xPos = pageX + 20;}
			else{var xPos = pageX - tooltipWidth - 20;}
				
			d3.select(this).attr({
				"stroke-width": 2
			})
			tooltip.transition()
				.duration(300)
				.style("opacity", .95)
			tooltip.html(tooltipData(votes, d.properties.geoid, state, year))
				.style("left", (xPos) + "px")
				.style("top", (d3.event.pageY - 80) + "px")
		})
		.on("mouseout", function(d){
			d3.select(this).attr({
				"stroke-width": 1
			})
			tooltip.transition()
				.duration(300)
				.style("opacity", 0)
		})
		.on("click", function(d){
			if(state == "US"){
				var clickedState = $(this).attr("data-state");
				var election = $(mapId + ' .map-el-select ').find(":selected").val();
				changeMap(clickedState, election, mapId);
				$(mapId + ' .map-st-select ').val(clickedState);
				tooltip.transition()
				.duration(300)
				.style("opacity", 0)
			}
		});

	addStateData(votes[0], mapId, year);

	// svg.selectAll("circle")
	// 	.data([0,0]).enter()
	// 	.append("circle")
	// 	.attr("cx", 100)
	// 	.attr("cy", 100)
	// 	.attr("r", "5px")
	// 	.attr("fill", "#000")
}

function resizeSvg(pathOne, pathTwo, w){
	svgone.selectAll("path").attr({"d": pathOne, "width": globalSxOne});
	svgtwo.selectAll("path").attr({"d": pathTwo, "width": globalSxTwo});
	//svgone.selectAll("circle").attr({"cx": w/2});
}

function changeMap(state, election, mapId){

	election = (election).split('-');
	var year = election[0];
	var party = election[1];

	var mapData = state+ ".json";
	var voteData = state + year + "gen.json";	

	d3.json(mapData, function(mapJson){
		var counties = mapJson.features.sort(function(a, b){return a["geoid"]-b["geoid"]});
		var stateProj = {
			"sx": mapJson["sx"],
			"sy": mapJson["sy"],
			"ss": mapJson["ss"],
		}
		d3.json(voteData, function(voteJson){
			votes = voteJson.sort(function(a, b){return a["FIPS Code"]-b["FIPS Code"]});
			setGlobalProjections(stateProj, mapId);
			buildSvg(mapId, stateProj, counties, votes, state, year)
		});
	});
}

d3.select("#map-el-select-1").on("change", function(d,i){
	var election = d3.select(this).node().value;
	var state = d3.select("#map-st-select-1").node().value;
	changeMap(state, election, '#map1');
});
d3.select("#map-el-select-2").on("change", function(d,i){
	var election = d3.select(this).node().value;
	var state = d3.select("#map-st-select-2").node().value;
	changeMap(state, election, '#map2');
});
d3.select("#map-st-select-1").on("change", function(d,i){
	var state = d3.select(this).node().value;
	var election = d3.select("#map-el-select-1").node().value;
	changeMap(state, election, '#map1');
});
d3.select("#map-st-select-2").on("change", function(d,i){
	var state = d3.select(this).node().value;
	var election = d3.select("#map-el-select-2").node().value;
	changeMap(state, election, '#map2');
});

changeMap('US', '2008-gen', '#map1');
changeMap('US', '2012-gen', '#map2');
