$(function () {
    //json data for handlebar template
    $.getJSON('data.json', function (data) {
        //handlebar template html
        var template = $("#template1").html();
        //handlebar's compile method returns special function which can be used to get final html
        var compiledCode = Mustache.render(template, data);
        //json data is passed top compiled code and result will be html
        
        //compiled html can be rendered in document
        $("#my_panel").html(compiledCode);
    });
});