/*** COLOR CHANGER ***/
$("#color-toggle").on("click", function () {
    var e = this.io ^= 1;
    $("#color-palate").animate({
        right: e ? 0 : -188
    }, "slow");
});

var color_palette = ["blue", "teal", "gray", "green", "purple", "brown", "red", "pink"];
var color = color_palette[ Math.floor( Math.random() * color_palette.length ) ];
$("#switch_style").attr("href", "stylesheets/style_" + color + ".css");

$("#blue").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_blue.css");
});
$("#teal").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_teal.css");
});
$("#gray").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_gray.css");
});
$("#green").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_green.css");
});
$("#purple").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_purple.css");
});
$("#brown").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_brown.css");
});
$("#red").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_red.css");
});
$("#pink").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_pink.css");
});
