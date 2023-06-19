function letterCombinations(input_digit) {
  //Complete the function
	if(input_digit.length==0){
		return [];
	}
	const digitsLetter = {
		'2':'abc',
		'3':'def',
		'4':'ghi',
		'5':'jkl',
		'6':'mno',
		'7':'pqrs',
		'8':'tuv',
		'9':'wxyz',
	}
	const combination = [];
	function generateCombinaton(index,letterCombination){
		if(index===input_digit.length){
			combination.push(letterCombination);
			return;
		}
		const letter = digitsLetter[input_digit[index]];
		
		for(let i=0;i<letter.length;i++){
			generateCombinaton(index+1,letterCombination+letter[i]);
		}
	}
	generateCombinaton(0,'')
	return combination.sort();
  //Complete the function
}

module.exports = letterCombinations;
