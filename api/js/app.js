const vm = new Vue({
    el: "#app",
    data: {
        // https://api.weatherapi.com/v1/current.json?key=cc6f6d5f143b4962b74161643220401&q=brazil&units=metric
        api_key: "cc6f6d5f143b4962b74161643220401",
        url_base: "http://api.weatherapi.com/v1/current.json",
        query: "",
        weather: {},
        location: {},
        current: {},
        condition: {},
    },
    methods: {
        takeData(e) {
            if (e.key === "Enter") {
                fetch(`${this.url_base}?key=${this.api_key}&q=${this.query}&lang=pt`)
                    .then((r) => {
                        return r.json();
                    })
                    .then(this.results);
            }
        },
        results(results) {
            this.weather = results;
            this.current = results.current;
            this.location = results.location;
            this.condition = results.current.condition;
        },
        mounted(){
            this.results()
        }
        
    },
});
