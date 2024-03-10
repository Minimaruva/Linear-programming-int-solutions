function max(inequalities, profitFunction){
    let profit = 0;
    let X = 0;
    let Y = 0;
    
    if (inequalities.length==1){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp > profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
                }
            }
    
    else if(inequalities.length==2){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[1].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp > profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
            }
    }

    else if(inequalities.length==3){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[1].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[2].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp > profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
            }
    }

    else if(inequalities.length==4){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[1].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[2].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[3].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp > profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
            }
    }
    
    result = document.getElementById('result')
    result.innerHTML += "Max profit: "+profit;
    result.appendChild(document.createElement("br"));
    result.innerHTML += "x: "+X;
    result.appendChild(document.createElement("br"));
    result.innerHTML += "y: "+Y;
}
function min(inequalities, profitFunction){
    let profit = 1000000;
    let X = 0;
    let Y = 0;
    
    if (inequalities.length==1){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp < profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
                }
            }
    
    else if(inequalities.length==2){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[1].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp < profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
            }
    }

    else if(inequalities.length==3){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[1].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[2].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp < profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
            }
    }

    else if(inequalities.length==4){
        for(let x=0; x<=200; x++){
            for(let y=0; y<=200; y++){
                    if(eval((inequalities[0].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[1].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[2].replace('x','*'+x)).replace('y','*'+y))
                    && eval((inequalities[3].replace('x','*'+x)).replace('y','*'+y))){
                        let temp = eval((profitFunction.replace('x','*'+x)).replace('y','*'+y));
                            if(temp < profit){
                                profit = temp;
                                X = x;
                                Y = y;
                            }
                    }
                }
            }
    }
    
    result = document.getElementById('result')
    result.innerHTML += "Min profit: "+profit;
    result.appendChild(document.createElement("br"));
    result.innerHTML += "x: "+X;
    result.appendChild(document.createElement("br"));
    result.innerHTML += "y: "+Y;
}



function solveLinearProgramming() {
    
    
    let profitFunction = (document.getElementById('profitFunction').value).replace(';','');
    let inequalities = (document.getElementById('inequalities').value).replace(';','');
    // let optimizationType = document.querySelector('input[name="optimizationType"]:checked').value;
    inequalities=inequalities.split(",");
    // console.log(eval(inequalities[0].replace('x','*2')));
    let ismax = document.getElementById("maximize").checked;
    let ismin = document.getElementById("minimize").checked;
    if(ismax){
        max(inequalities, profitFunction); 
    }
    else if(ismin){
        min(inequalities,profitFunction);
    }
    else{
        alert('Please select optimisation type!')
    }

}
