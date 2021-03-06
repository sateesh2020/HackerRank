//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/compare-the-triplets)
//

// Running main function for output
main(['5 6 7', '3 6 10']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
	// Creating integer arrays of scores for each person
	var aliceTemp = stdin[0].split(' ').map(Number);
	var bobTemp = stdin[1].split(' ').map(Number);
	
	// Initializing scores for each player
	var aliceScore = 0, bobScore = 0;
		
	// Loop through scores and compare them
	for (var i = 0; i < aliceTemp.length; i++) {
		if (aliceTemp[i] > bobTemp[i]) aliceScore += 1;
		if (aliceTemp[i] < bobTemp[i]) bobScore += 1;
	}
	
	// Output
	console.log(aliceScore, bobScore);
}