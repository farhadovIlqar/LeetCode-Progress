/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows==1){
        return s;
    }
    
    let arr=[];
    for(let i=0;i<numRows;i++){
        arr.push("");
    }
    
    down=false;
    let row=0;
    for(let i=0;i<s.length;i++){
        arr[row]+=s[i];
        if(row==numRows-1){
            down=true;
        }else if(row==0){
            down=false;
        }
        if(down){
            row--;
        }else{
            row++;
        }
    }
    return arr.join("");


};