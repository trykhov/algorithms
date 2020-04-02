class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor() {
       this.root = new Node();
   }

   insertRecur(word, root = this.root) {
       let char = word[0];
       if(!(char in root.children)) {
           root.children[char] = new Node();
       }
       if(word.length === 1) {
           root.children[char].isTerminal = true;
       } else {
           this.insertRecur(word.substring(1), root.children[char]);
       }
   }

   insertIter(word, root = this.root) {
    for(let i = 0; i < word.length; i++) {
        let char = word[i];
        if(!(char in root.children)) {
            root.children[char] = new Node();
        } 
        if(i === word.length - 1) {
            root.children[char].isTerminal = true;
        }
        root = root.children[char];      
    }
   }

   searchRecur(word, root = this.root) {
       if(word.length === 0) return root.isTerminal;
       let char = word[0];
       if(char in root.children) {
           return this.searchRecur(word.substring(1), root.children[char]);
       } else {
           return false;
       }
   }

   searchIter(word, root = this.root) {
       for(let i = 0; i < word.length; i++) {
           let char = word[i];
           if(char in root.children) {
               root = root.children[char];
           } else {
               return false;
           }
       }
       return root.isTerminal;
   }

   wordsWithPrefix(prefix, root = this.root) {
       function dfs(nodeVal, node) {
           let res = [];
           if(node.isTerminal) {
               res.push(nodeVal)
           }
           for(let child in node.children) {
                let subSol = dfs(child, node.children[child]);
                subSol.forEach(el => res.push(nodeVal + el));
            }
           return res;
       }

       if(prefix.length === 0) {
           return dfs(prefix, root);
        } else {
           let char = prefix[0];
           // continue down rabbit hole
           if(char in root.children) {
               let sol = this.wordsWithPrefix(prefix.substring(1), root.children[char]);
               return sol.map(el => char + el);
           } else {
               return [];
           }
       }
   }

}

module.exports = {
    Node,
    Trie
};