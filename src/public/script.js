const remoteEndpoint = "127.0.0.1:3000" // Where do we send these files for conversion?

$(document).ready(function() {
    $("#fileUploadButton").change(function() {
        // When the user registers a file, attempt to perform a conversion
        // First, read the file contents
        var file = $("#fileUploadButton").prop('files')[0]

        console.log(file.type)
        // Ensure that this is a gzip file, if not, alert the user
        if(file.type != "application/x-gzip") {
            $("#warning").text("You fucked it")
            return
        }

        var form = new FormData()
        console.log(file)
        form.append("backupFile", file, file.name)

        // Send this in for processing
        var settings = {
            "url": remoteEndpoint,
            "method": "POST",
            "timeout": 0,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "processData": false,
            "data": form
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    })
})