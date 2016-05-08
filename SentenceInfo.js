var sentence = "I am happy you are reading this sentence";

function sentenceInfo(str) {
	var words = str.split(" ");
	console.log('There are ' + words.length + ' words in this sentence')
	var total = 0;
	for (i = 0;i < words.length; i++){
		total += words[i].length;
	}
	var average = total/words.length;
	console.log('The average length of each word in this sentence is ' + average);
}



sentenceInfo(sentence);
