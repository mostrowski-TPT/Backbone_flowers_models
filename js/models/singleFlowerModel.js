var app = app || {};

app.singleFlower = Backbone.Model.extend({

    defaults: {
        color: "pink",
        img: "images/placeholder.jpg"
    },

    initialize: function () {
        console.log("A model instance named " + this.get("name") + " has been created and it costs " + this.get("price"));

        //on instance change
        this.on('change', function () {
            console.log("Something in our model has changed");
        });


        //on instance key change
        this.on('change:price', function () {
            console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars");
        });

        //on instance key change
        this.on('change:originCountry', function () {
            console.log("The orogin country of the" + this.get("name") + " model instance just changed to " + this.get("originCountry"));
        });

    }


});
