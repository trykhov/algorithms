// how to find if a string is a substring of another string
// ex. text = "ababa" pattern = "bab" --> true

// Runtime: O(text.length + pattern.length) = O(m + n)
// Space: O(pattern.length) = O(n)

function kmp(text, pattern) {
    // first make a keeper array
    // idea: we will use this array to find when there is a mismatch, knowing that the previous substring before
    //       the character mismatch is the same as the prefix of the pattern, we can start after it
    // ex. "abcaby" where "ab" before "y" is the same as "ab" (the first two letters), so we can start at "c"
    const keeperArr = new Array(pattern.length).fill(0);
    let i = 0;
    for(let j = 1; j < keeperArr.length; j += 1) {
        if(pattern[i] == pattern[j]) {
            keeperArr[j] = i + 1; // in case there's a mismatch, we start at the index after the prefix
            i += 1;
        } else {
            i = i - 1 > 0 ? keeperArr[i - 1] : 0;
            if(pattern[i] == pattern[j]) keeperArr[j] = i + 1; // compare it again
        }
    }
    
    i = 0;
    let c = 0;
    while(c < text.length && i < pattern.length) {
        if(text[c] == pattern[i]) {
            // move the indices along
            i += 1;
            c += 1;
        } else {
            c += i === 0 ? 1 : 0; // if the characters aren't equal, move the pattern index only & then compare
            i = i !== 0 ? keeperArr[i - 1] : i; // can't move back if it's at 0
        }
    }
    return i == pattern.length; 
}

console.log(kmp('laracraft', 'craft'));