// logika game pukul guling
var vm = new Vue({
    el: '#vue-game',
    data: {
        kesehatanNumber: 100,
        isEnded: false
    },
    methods: {
        pukulGuling: function () {

            var randomNumber = this.randomValPukul();
            this.kesehatanNumber = this.kesehatanNumber - randomNumber;

            if (this.kesehatanNumber <= 0) {
                this.isEnded = true;
            };
        },
        restartGame: function () {

            this.kesehatanNumber = 100;
            this.isEnded = false;
        },
        randomValPukul: function () {

            var randomNumber = Math.floor(Math.random() * 10);
            return randomNumber;
        }
    },
    computed: {
        healthBarComputed: function () {

            var styleWidthBar = {
                width: this.kesehatanNumber + "%"
            }
            return styleWidthBar;
        },
        bagStatusComputed: function () {

            var imageBagStatus = {
                burst: this.isEnded
            }
            return imageBagStatus;
        }
    }
});