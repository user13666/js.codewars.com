/*    function openOrSenior(data) {
       let arrCategories = [];
       for (let i = 0; i < data.length; i++) {
           if (data[i][0] >= 55 && data[i][1] > 7) {
               arrCategories.push('Senior');
           } else {
               arrCategories.push('Open');
           }
       }
       return arrCategories;
   } */

function openOrSenior(data) {
    let arrCategories = data.map(Categories);

    function Categories(mapData) {
        if (mapData[0] >= 55 && mapData[1] > 7) {
            return 'Senior';
        } else {
            return 'Open';
        }
    }
    return arrCategories;
}


console.log(openOrSenior([
    [45, 12], //'Open',  
    [55, 21], //'Senior',
    [19, -2], // Open',
    [104, 20] // 'Senior'
]));
console.log(openOrSenior([
    [3, 12], //'Open',  
    [55, 1], // 'Open',
    [91, -2], //'Open',
    [54, 23] //'Open'
]));
console.log(openOrSenior([
    [59, 12], //'Senior',
    [55, -1], //'Open', 
    [12, -2], // 'Open',
    [12, 12] // 'Open',
]));