var app = new Vue({

    el:"#app",
    data:{
        swpersons:[],
        swplanets:[],
        swstarships:[],
        infoperson:{},
        infoplanet:[],
        infostarship:[],
        show: 0,
        showw: 0,
        imgpeoples: "http://localhost:3000/peoples/",
        imgplanets: "http://localhost:3000/planets/",
        imgstarships: "http://localhost:3000/starships/",
        imgurl: 0
    },

    methods:{
        getAllSWPersons(){
            this.showw = 0;
            fetch("https://swapi.co/api/people/")
                .then(response=>response.json())
                .then(data=>{
                    app.swpersons=data;
                });
            this.show = 1
        },
        getAllSWPlanets(){
            this.showw = 0;
            fetch("https://swapi.co/api/planets/")
                .then(response=>response.json())
                .then(data=>{
                    this.swplanets=data;
                });
            this.show = 2;
        },
        getAllSWStarships(){
            this.showw = 0;
            fetch("https://swapi.co/api/starships/")
                .then(response=>response.json())
                .then(data=>{
                    this.swstarships=data;
                });
            this.show = 3;
        },

        getInfoPerson(url){
            this.showw = 0;
            axios.get(url).then(function (response) {
                app.infoperson = response.data;
            });
            this.showw = 1;
            this.imgurl = this.imgpeoples + (url.substr(url.length - 2)).substr(0, 1);
        },
        getInfoPlanet(url){
            this.showw = 0;
            axios.get(url).then(function (response) {
                app.infoplanet = response.data
            });
            this.showw = 2;
            this.imgurl = this.imgplanets + (url.substr(url.length - 2)).substr(0, 1);
        },
        getInfoStarship(url){
            this.showw = 0;
            axios.get(url).then(function (response) {
                app.infostarship = response.data
            });
            this.showw = 3;
            app.img = this.url1 = this.infostarship + url.substr(url.length - 2);
            this.imgurl = this.imgstarships + (url.substr(url.length - 2)).substr(0, 1);
        },
    }
});