function ct(votes){
	var newCT = [];
	newCT.push({"State Postal": "CT", "FIPS Code": 0, "County Name": "Connecticut", "TOTAL VOTES CAST": 1562187, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 631432, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 912531, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 5596, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 12628, "IdFour": 31708 });
	newCT.push({"State Postal": "CT", "FIPS Code": 9011, "County Name": "New London", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 });
  newCT.push({"State Postal": "CT", "FIPS Code": 9003, "County Name": "Hartford", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 }); 
  newCT.push({"State Postal": "CT", "FIPS Code": 9007, "County Name": "Middlesex", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 }); 
  newCT.push({"State Postal": "CT", "FIPS Code": 9005, "County Name": "Litchfield", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 });
  newCT.push({"State Postal": "CT", "FIPS Code": 9013, "County Name": "Tolland", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 });
  newCT.push({"State Postal": "CT", "FIPS Code": 9015, "County Name": "Windham", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 });
  newCT.push({"State Postal": "CT", "FIPS Code": 9001, "County Name": "Fairfield", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 });
  newCT.push({"State Postal": "CT", "FIPS Code": 9009, "County Name": "New Haven", "TOTAL VOTES CAST": 0, "FirstOne": "Mitt", "LastOne": "Romney", "VotesOne": 0, "IdOne": 893, "FirstTwo": "Barack", "LastTwo": "Obama", "VotesTwo": 0, "IdTwo": 1918, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708 });

  for(var i=1; i<votes.length; i++){
  	switch(votes[i]["FIPS Code"]){
  		case 9001:
  			var n = 7
  			break;
  		case 9003:
  			var n = 2
  			break;
  		case 9005:
  			var n = 4
  			break;
  		case 9007:
  			var n = 3
  			break;
  		case 9009:
  			var n = 8
  			break;
  		case 9011:
  			var n = 1
  			break;
  		case 9013:
  			var n = 5
  			break;
  		case 9015:
  			var n = 6
  			break;
  	}
  	newCT[n]["TOTAL VOTES CAST"] += votes[i]["TOTAL VOTES CAST"];
		newCT[n]["VotesOne"] += votes[i]["VotesOne"];
		newCT[n]["VotesTwo"] += votes[i]["VotesTwo"];
		newCT[n]["VotesThree"] += votes[i]["VotesThree"];
		newCT[n]["VotesFour"] += votes[i]["VotesFour"];
  }

  console.log(JSON.stringify(newCT));
}

function vt(votes){
  var newVT = [];
  newVT.push({"State Postal": "VT", "FIPS Code": 0, "County Name": "Vermont", "TOTAL VOTES CAST": 297274, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 199259, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 92700, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 1139, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 3482, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 694, "IDFive": 62562, "TOTAL VOTES CAST": 297274});
  newVT.push({"State Postal": "VT", "FIPS Code": 50001, "County Name": "Addison", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50003, "County Name": "Bennington", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50005, "County Name": "Caledonia", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50007, "County Name": "Chittenden", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50009, "County Name": "Essex", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50011, "County Name": "Franklin", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50013, "County Name": "Grand Isle", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50015, "County Name": "Lamoille", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50017, "County Name": "Orange", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50019, "County Name": "Orleans", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50021, "County Name": "Rutland", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50023, "County Name": "Washington", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50025, "County Name": "Windham", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});
  newVT.push({"State Postal": "VT", "FIPS Code": 50027, "County Name": "Windsor", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": "Peta", "LastFive": "Lindsay", "VotesFive": 0, "IDFive": 62562});

  for(var i=1; i<votes.length; i++){
    switch(votes[i]["FIPS Code"]){
      case 50001:
        var n = 1
        break;
      case 50003:
        var n = 2
        break;
      case 50005:
        var n = 3
        break;
      case 50007:
        var n = 4
        break;
      case 50009:
        var n = 5
        break;
      case 50011:
        var n = 6
        break;
      case 50013:
        var n = 7
        break;
      case 50015:
        var n = 8
        break;
      case 50017:
        var n = 9
        break;
      case 50019:
        var n = 10
        break;
      case 50021:
        var n = 11
        break;
      case 50023:
        var n = 12
        break;
      case 50025:
        var n = 13
        break;
      case 50027:
        var n = 14
        break;
    }
    console.log(votes[i]["County Name"]);
    newVT[n]["TOTAL VOTES CAST"] += votes[i]["TOTAL VOTES CAST"];
    newVT[n]["VotesOne"] += votes[i]["VotesOne"];
    newVT[n]["VotesTwo"] += votes[i]["VotesTwo"];
    newVT[n]["VotesThree"] += votes[i]["VotesThree"];
    newVT[n]["VotesFour"] += votes[i]["VotesFour"];
    newVT[n]["VotesFive"] += votes[i]["VotesFive"];
  }

  console.log(JSON.stringify(newVT));
}

function ma(votes){
  var newMA = [];
  newMA.push({
    "State Postal": "MA",
    "FIPS Code": 0,
    "County Name": "Massachusetts",
    "TOTAL VOTES CAST": 3129731,
    "FirstOne": "Barack",
    "LastOne": "Obama",
    "VotesOne": 1901276,
    "IdOne": 1918,
    "FirstTwo": "Mitt",
    "LastTwo": "Romney",
    "VotesTwo": 1178245,
    "IdTwo": 893,
    "FirstThree": "Jill",
    "LastThree": "Stein",
    "VotesThree": 19672,
    "IDThree": 895,
    "FirstFour": "Gary",
    "LastFour": "Johnson",
    "VotesFour": 30538,
    "IdFour": 31708,
    "FirstFive": null,
    "LastFive": null,
    "VotesFive": null,
    "IDFive": null
  });
  newMA.push({"State Postal": "MA", "FIPS Code": 25001, "County Name": "Barnstable", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25003, "County Name": "Berkshire", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25005, "County Name": "Bristol", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25007, "County Name": "Dukes", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25009, "County Name": "Essex", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25011, "County Name": "Franklin", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25013, "County Name": "Hampden", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25015, "County Name": "Hampshire", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25017, "County Name": "Middlesex", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25019, "County Name": "Nantucket", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25021, "County Name": "Norfolk", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25023, "County Name": "Plymouth", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25025, "County Name": "Suffolk", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newMA.push({"State Postal": "MA", "FIPS Code": 25027, "County Name": "Worcester", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Jill", "LastThree": "Stein", "VotesThree": 0, "IDThree": 895, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });

  for(var i=1; i<votes.length; i++){
    switch(votes[i]["FIPS Code"]){
      case 25001:
        var n = 1
        break;
      case 25003:
        var n = 2
        break;
      case 25005:
        var n = 3
        break;
      case 25007:
        var n = 4
        break;
      case 25009:
        var n = 5
        break;
      case 25011:
        var n = 6
        break;
      case 25013:
        var n = 7
        break;
      case 25015:
        var n = 8
        break;
      case 25017:
        var n = 9
        break;
      case 25019:
        var n = 10
        break;
      case 25021:
        var n = 11
        break;
      case 25023:
        var n = 12
        break;
      case 25025:
        var n = 13
        break;
      case 25027:
        var n = 14
        break;
    }
    console.log(votes[i]["County Name"]);
    newMA[n]["TOTAL VOTES CAST"] += votes[i]["TOTAL VOTES CAST"];
    newMA[n]["VotesOne"] += votes[i]["VotesOne"];
    newMA[n]["VotesTwo"] += votes[i]["VotesTwo"];
    newMA[n]["VotesThree"] += votes[i]["VotesThree"];
    newMA[n]["VotesFour"] += votes[i]["VotesFour"];
  }

  console.log(JSON.stringify(newMA));
}

function nh(votes){
  var newNH = [];
  newNH.push({"State Postal": "NH", "FIPS Code": 0, "County Name": "New Hampshire", "TOTAL VOTES CAST": 705874, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 368529, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 327870, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 1156, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 8319, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33001, "County Name": "Belknap", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33003, "County Name": "Carroll", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33005, "County Name": "Cheshire", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33007, "County Name": "Coos", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33009, "County Name": "Grafton", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33011, "County Name": "Hillsborough", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33013, "County Name": "Merrimack", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33015, "County Name": "Rockingham", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33017, "County Name": "Strafford", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newNH.push({"State Postal": "NH", "FIPS Code": 33019, "County Name": "Sullivan", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Virgil", "LastThree": "Goode", "VotesThree": 0, "IDThree": 713, "FirstFour": "Gary", "LastFour": "Johnson", "VotesFour": 0, "IdFour": 31708, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });

  for(var i=1; i<votes.length; i++){
    switch(votes[i]["FIPS Code"]){
      case 33001:
        var n = 1
        break;
      case 33003:
        var n = 2
        break;
      case 33005:
        var n = 3
        break;
      case 33007:
        var n = 4
        break;
      case 33009:
        var n = 5
        break;
      case 33011:
        var n = 6
        break;
      case 33013:
        var n = 7
        break;
      case 33015:
        var n = 8
        break;
      case 33017:
        var n = 9
        break;
      case 33019:
        var n = 10
        break;
    }
    newNH[n]["TOTAL VOTES CAST"] += votes[i]["TOTAL VOTES CAST"];
    newNH[n]["VotesOne"] += votes[i]["VotesOne"];
    newNH[n]["VotesTwo"] += votes[i]["VotesTwo"];
    newNH[n]["VotesThree"] += votes[i]["VotesThree"];
    newNH[n]["VotesFour"] += votes[i]["VotesFour"];
  }

  console.log(JSON.stringify(newNH));
}

function ri(votes){
  var newRI = [];
  newRI.push({"State Postal": "RI", "FIPS Code": 0, "County Name": "Rhode Island", "TOTAL VOTES CAST": 437380, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 274342, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 155355, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 403, "IDThree": 43773, "FirstFour": "Virgil", "LastFour": "Goode", "VotesFour": 452, "IdFour": 713, "FirstFive": "Gary", "LastFive": "Johnson", "VotesFive": 4334, "IDFive": 31708, "FirstSix": "Peta", "LastSix": "Lindsay", "VotesSix": 124, "IDSix": 62562, "FirstSeven": "Jill", "LastSeven": "Stein", "VotesSeven": 2370, "IDSeven": 895 });
  newRI.push({"State Postal": "RI", "FIPS Code": 44001, "County Name": "Bristol", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Virgil", "LastFour": "Goode", "VotesFour": 0, "IdFour": 713, "FirstFive": "Gary", "LastFive": "Johnson", "VotesFive": 0, "IDFive": 31708, "FirstSix": "Peta", "LastSix": "Lindsay", "VotesSix": 0, "IDSix": 62562, "FirstSeven": "Jill", "LastSeven": "Stein", "VotesSeven": 0, "IDSeven": 895 });
  newRI.push({"State Postal": "RI", "FIPS Code": 44003, "County Name": "Kent", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Virgil", "LastFour": "Goode", "VotesFour": 0, "IdFour": 713, "FirstFive": "Gary", "LastFive": "Johnson", "VotesFive": 0, "IDFive": 31708, "FirstSix": "Peta", "LastSix": "Lindsay", "VotesSix": 0, "IDSix": 62562, "FirstSeven": "Jill", "LastSeven": "Stein", "VotesSeven": 0, "IDSeven": 895 });
  newRI.push({"State Postal": "RI", "FIPS Code": 44005, "County Name": "Newport", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Virgil", "LastFour": "Goode", "VotesFour": 0, "IdFour": 713, "FirstFive": "Gary", "LastFive": "Johnson", "VotesFive": 0, "IDFive": 31708, "FirstSix": "Peta", "LastSix": "Lindsay", "VotesSix": 0, "IDSix": 62562, "FirstSeven": "Jill", "LastSeven": "Stein", "VotesSeven": 0, "IDSeven": 895 });
  newRI.push({"State Postal": "RI", "FIPS Code": 44007, "County Name": "Providence", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Virgil", "LastFour": "Goode", "VotesFour": 0, "IdFour": 713, "FirstFive": "Gary", "LastFive": "Johnson", "VotesFive": 0, "IDFive": 31708, "FirstSix": "Peta", "LastSix": "Lindsay", "VotesSix": 0, "IDSix": 62562, "FirstSeven": "Jill", "LastSeven": "Stein", "VotesSeven": 0, "IDSeven": 895 });
  newRI.push({"State Postal": "RI", "FIPS Code": 44009, "County Name": "Washington", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Rocky", "LastThree": "Anderson", "VotesThree": 0, "IDThree": 43773, "FirstFour": "Virgil", "LastFour": "Goode", "VotesFour": 0, "IdFour": 713, "FirstFive": "Gary", "LastFive": "Johnson", "VotesFive": 0, "IDFive": 31708, "FirstSix": "Peta", "LastSix": "Lindsay", "VotesSix": 0, "IDSix": 62562, "FirstSeven": "Jill", "LastSeven": "Stein", "VotesSeven": 0, "IDSeven": 895 });

  for(var i=1; i<votes.length; i++){
    switch(votes[i]["FIPS Code"]){
      case 44001:
        var n = 1
        break;
      case 44003:
        var n = 2
        break;
      case 44005:
        var n = 3
        break;
      case 44007:
        var n = 4
        break;
      case 44009:
        var n = 5
        break;
    }
    newRI[n]["TOTAL VOTES CAST"] += votes[i]["TOTAL VOTES CAST"];
    newRI[n]["VotesOne"] += votes[i]["VotesOne"];
    newRI[n]["VotesTwo"] += votes[i]["VotesTwo"];
    newRI[n]["VotesThree"] += votes[i]["VotesThree"];
    newRI[n]["VotesFour"] += votes[i]["VotesFour"];
    newRI[n]["VotesFive"] += votes[i]["VotesFive"];
    newRI[n]["VotesSix"] += votes[i]["VotesSix"];
    newRI[n]["VotesSeven"] += votes[i]["VotesSeven"];
  }

  console.log(JSON.stringify(newRI));
}

function me(votes){
  var newME = [];

  newME.push({"State Postal": "ME", "FIPS Code": 0, "County Name": "Maine", "TOTAL VOTES CAST": 710738, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 397754, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 290437, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 13446, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 9101, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  
  newME.push({"State Postal": "ME", "FIPS Code": 23001, "County Name": "Androscoggin", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23003, "County Name": "Aroostook", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23005, "County Name": "Cumberland", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23007, "County Name": "Franklin", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23009, "County Name": "Hancock", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23011, "County Name": "Kennebeck", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23013, "County Name": "Knox", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23015, "County Name": "Lincoln", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23017, "County Name": "Oxford", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23019, "County Name": "Penobscot", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23021, "County Name": "Piscataquis", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23023, "County Name": "Sagadahoc", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23025, "County Name": "Somerset", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23027, "County Name": "Waldo", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23029, "County Name": "Washington", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });
  newME.push({"State Postal": "ME", "FIPS Code": 23031, "County Name": "York", "TOTAL VOTES CAST": 0, "FirstOne": "Barack", "LastOne": "Obama", "VotesOne": 0, "IdOne": 1918, "FirstTwo": "Mitt", "LastTwo": "Romney", "VotesTwo": 0, "IdTwo": 893, "FirstThree": "Gary", "LastThree": "Johnson", "VotesThree": 0, "IDThree": 31708, "FirstFour": "Jill", "LastFour": "Stein", "VotesFour": 0, "IdFour": 895, "FirstFive": null, "LastFive": null, "VotesFive": null, "IDFive": null });

  for(var i=1; i<votes.length; i++){
    switch(votes[i]["FIPS Code"]){
      case 23001:
        var n = 1
        break;
      case 23003:
        var n = 2
        break;
      case 23005:
        var n = 3
        break;
      case 23007:
        var n = 4
        break;
      case 23009:
        var n = 5
        break;
      case 23011:
        var n = 6
        break;
      case 23013:
        var n = 7
        break;
      case 23015:
        var n = 8
        break;
      case 23017:
        var n = 9
        break;
      case 23019:
        var n = 10
        break;
      case 23021:
        var n = 11
        break;
      case 23023:
        var n = 12
        break;
      case 23025:
        var n = 13
        break;
      case 23027:
        var n = 14
        break;
      case 23029:
        var n = 15
        break;
      case 23031:
        var n = 16
        break;
    }
    console.log(votes[i]["County Name"]);
    newME[n]["TOTAL VOTES CAST"] += votes[i]["TOTAL VOTES CAST"];
    newME[n]["VotesOne"] += votes[i]["VotesOne"];
    newME[n]["VotesTwo"] += votes[i]["VotesTwo"];
    newME[n]["VotesThree"] += votes[i]["VotesThree"];
    newME[n]["VotesFour"] += votes[i]["VotesFour"];
  }

  console.log(JSON.stringify(newME));
}