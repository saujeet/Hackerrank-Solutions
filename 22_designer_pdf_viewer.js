// Problem Description
// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.
// ----------------------------------------------------------------

function designerPdfViewer(h, word) {
    // Write your code here
    let length = word.length;
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let wordIndex = [];
    let wordHeight = [];

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if (word[i] == alphabets[j]) {
                wordIndex.push(j);
            }
        }
    }
    for (let i = 0; i < wordIndex.length; i++) {
        wordHeight.push(h[wordIndex[i]])
    }

    let max = Math.max(...wordHeight);

    return (max * length);

}
