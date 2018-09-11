
const ColorService = function(){
    this.lightest = 90;
    this.darkest = 20;
    simplemaps_usmap.load();
    
    this.getColors = function(myArray){
        // will hold arrays for all the data
        let arrayOfArrays = [];
        let geographyKeys = []
        // parse the passed data into arrays that group the data up by variable
        // instead of by geography (ie, all total population in one array)
        for(let i = 0; i < myArray[1].length; i++) {
            if(!isNaN(parseInt(myArray[1][i]))){
                let newArray = [parseInt(myArray[1][i])];
                arrayOfArrays.push(newArray);
            } else {
                geographyKeys.push(myArray[1][i]);
                break;
            }
        }
        

        for(let i = 2; i < myArray.length; i++){
            for(let j = 0; j < arrayOfArrays.length; j++) {
                arrayOfArrays[j].push(parseInt(myArray[i][j]));
            }
            geographyKeys.push(myArray[i][arrayOfArrays.length])
        }
        console.log(arrayOfArrays);
        
        
        let min = max = arrayOfArrays[0][0];

        for(let i = 1; i < arrayOfArrays[0].length; i++) {
            if(arrayOfArrays[0][i] > max) {
                max = arrayOfArrays[0][i];
            } else if (arrayOfArrays[0][i] < min) {
                min = arrayOfArrays[0][i];
            }
        }

        console.log(min, max);

        max -= min;

        // arrayOfArrays[0][25]

        // let michiganAdjusted = arrayOfArrays[0][22] - min;

        // let michiganPercentage = michiganAdjusted / max;
        // let michiganColorPercentage = (1-michiganPercentage)*(this.lightest - this.darkest)+this.darkest;
        // document.querySelector(".sm_state_MI").style.fill = `hsl(0,100%,${michiganColorPercentage}%)`;
        // console.log(michiganColorPercentage);


        for (let i = 0; i < arrayOfArrays[0].length; i++) {
            // console.log(arrayOfArrays[0][i])
            let stateAdjustedByMinPop = arrayOfArrays[0][i] - min;
            
            let statePercentage = stateAdjustedByMinPop / max;
            let stateColorPercentage = (1-statePercentage)*(this.lightest - this.darkest)+this.darkest;
            console.log(stateAdjustedByMinPop + ": " + stateColorPercentage);
            for(let state in simplemaps_usmap_mapdata.state_specific) {
                if(simplemaps_usmap_mapdata.state_specific[state].name === geographyKeys[i]) {

                    // <---- start new colors

                    if (stateColorPercentage > 30) {
                            try {

                            document.querySelector(`.sm_state_${state}`).style.fill = `hsl(10, 100%, ${stateColorPercentage}%)`;
                        } catch {
                            try {
                                document.querySelector(`.sm_state_${state}`).style.fill = `hsl(10, 100%, ${stateColorPercentage}%)`;
                            } catch {
                                setTimeout(function(){
                                    document.querySelector(`.sm_state_${state}`).style.fill = `hsl(10, 100%, ${stateColorPercentage}%)`;
                                }, 500);
                            }
                        }

                    }

                    if (stateColorPercentage > 40) {
                            try {

                            document.querySelector(`.sm_state_${state}`).style.fill = `hsl(19, 100%, ${stateColorPercentage}%)`;
                        } catch {
                            try {
                                document.querySelector(`.sm_state_${state}`).style.fill = `hsl(19, 100%, ${stateColorPercentage}%)`;
                            } catch {
                                setTimeout(function(){
                                    document.querySelector(`.sm_state_${state}`).style.fill = `hsl(19, 100%, ${stateColorPercentage}%)`;
                                }, 500);
                            }
                        }

                    }

                    if (stateColorPercentage > 50) {
                            try {

                            document.querySelector(`.sm_state_${state}`).style.fill = `hsl(28, 100%, ${stateColorPercentage}%)`;
                        } catch {
                            try {
                                document.querySelector(`.sm_state_${state}`).style.fill = `hsl(28, 100%, ${stateColorPercentage}%)`;
                            } catch {
                                setTimeout(function(){
                                    document.querySelector(`.sm_state_${state}`).style.fill = `hsl(28, 100%, ${stateColorPercentage}%)`;
                                }, 500);
                            }
                        }

                    }
                    
                    if (stateColorPercentage > 60) {
                            try {

                            document.querySelector(`.sm_state_${state}`).style.fill = `hsl(37, 100%, ${stateColorPercentage}%)`;
                        } catch {
                            try {
                                document.querySelector(`.sm_state_${state}`).style.fill = `hsl(37, 100%, ${stateColorPercentage}%)`;
                            } catch {
                                setTimeout(function(){
                                    document.querySelector(`.sm_state_${state}`).style.fill = `hsl(37, 100%, ${stateColorPercentage}%)`;
                                }, 500);
                            }
                        }

                    }


                    if (stateColorPercentage > 70) {
                            try {

                            document.querySelector(`.sm_state_${state}`).style.fill = `hsl(46, 100%, ${stateColorPercentage}%)`;
                        } catch {
                            try {
                                document.querySelector(`.sm_state_${state}`).style.fill = `hsl(46, 100%, ${stateColorPercentage}%)`;
                            } catch {
                                setTimeout(function(){
                                    document.querySelector(`.sm_state_${state}`).style.fill = `hsl(46, 100%, ${stateColorPercentage}%)`;
                                }, 500);
                            }
                        }

                    }

                    if (stateColorPercentage > 80) {
                            try {

                            document.querySelector(`.sm_state_${state}`).style.fill = `hsl(55, 100%, ${stateColorPercentage}%)`;
                        } catch {
                            try {
                                document.querySelector(`.sm_state_${state}`).style.fill = `hsl(55, 100%, ${stateColorPercentage}%)`;
                            } catch {
                                setTimeout(function(){
                                    document.querySelector(`.sm_state_${state}`).style.fill = `hsl(55, 100%, ${stateColorPercentage}%)`;
                                }, 500);
                            }
                        }

                    }

                    else {
                        try {

                            document.querySelector(`.sm_state_${state}`).style.fill = `hsl(1, 100%, ${stateColorPercentage}%)`;
                        } catch {
                            try {
                                document.querySelector(`.sm_state_${state}`).style.fill = `hsl(1, 100%, ${stateColorPercentage}%)`;
                            } catch {
                                setTimeout(function(){
                                    document.querySelector(`.sm_state_${state}`).style.fill = `hsl(1, 100%, ${stateColorPercentage}%)`;
                                }, 500);
                            }
                        }

                    }



                    // <---- end new colors

                    // try {

                    //     document.querySelector(`.sm_state_${state}`).style.fill = `hsl(0,100%,${stateColorPercentage}%)`;
                    // } catch {
                    //     try {
                    //         document.querySelector(`.sm_state_${state}`).style.fill = `hsl(0,100%,${stateColorPercentage}%)`;
                    //     } catch {
                    //         setTimeout(function(){
                    //             document.querySelector(`.sm_state_${state}`).style.fill = `hsl(0,100%,${stateColorPercentage}%)`;
                    //         }, 500);
                    //     }
                    // }
                }
            }
        }





    }


};





angular.module("App").
service("ColorService", ColorService)