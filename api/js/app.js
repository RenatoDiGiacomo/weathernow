const vm = new Vue({
    el: "#app",
    data: {
        api_key: "cc6f6d5f143b4962b74161643220401",
        url_base: "http://api.weatherapi.com/v1/current.json",
        query: "",
        errorStatus: "",
        errorText: "",

        //items
        weather: {},
        location: {},
        current: {},
        condition: {},
    },
    methods: {
        takeData() {
            fetch(`${this.url_base}?key=${this.api_key}&q=${this.query}&lang=pt`)
                .then((r) => {
                    this.errorStatus = r.status;
                    this.errorText = r.statusText;
                    if (r.ok || r.status != 400) {
                        return r.json();
                    }
                })
                .then((response) => {
                    this.weather = response;
                    this.current = response.current;
                    this.location = response.location;
                    this.condition = response.current.condition;
                });
        },
    },
});
