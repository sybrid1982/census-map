'use strict';

const data = {
    templateUrl: `scripts/components/dataVomit.html`,
    controller: ["CensusDataService","ColorService", function(CensusDataService, ColorService) {
        const vm = this;
        vm.datas;

        vm.getData = () => {
            console.log("asked to get data");
            CensusDataService.getStatePopulation().then((response)=> {
                vm.datas = response;
                ColorService.getColors(vm.datas);
            });   
            console.log(vm.datas);
        };

        vm.getData();

        // taz added functionality for dropdown select to call API
        vm.getCensusData = function(API){
            console.log(API);
            if (API == 1) {
                CensusDataService.getStatePopulation().then((response)=> {
                    vm.datas = response;
                });
                console.log(vm.datas);
            }
            if (API == 2) {
                CensusDataService.getStatePopRace().then((response)=> {
                    console.log(response);
                });
                
            }
            if (API == 3) {
                CensusDataService.getStatePopAge().then((response)=> {
                    vm.datas = response;
                });
                console.dir(vm.datas);
            }
        };
    }]
};

angular.module('App').component("data", data);