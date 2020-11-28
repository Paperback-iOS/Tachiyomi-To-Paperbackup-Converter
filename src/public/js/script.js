const remoteEndpoint = "convert.stormcloud.host" // Where do we send these files for conversion?

$(document).ready(function() {
    $("#fileUploadButton").change(function() {
        // When the user registers a file, attempt to perform a conversion
        // First, read the file contents
        var file = $("#fileUploadButton").prop('files')[0]

        // Ensure that this is a gzip file, if not, alert the user
        // if(file.type != "application/x-gzip") {
        //     $("#warning").text("Please make sure that your backup file ends in .proto.gz")
        //     return
        // }

        var form = new FormData()
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

          console.log(settings)
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            // Generate a filename and queue a download operation'
            let title = new Date().toDateString() + "-PaperbackConversion.json"
            downloadData(title, response)

          })
          .fail(function(xhr, status, error) {
            $("#warning").text(`Error: ${xhr.responseText}`)
          });
    })
})

// Tell the browser to start a download operation on a given set of text
function downloadData(filename, text) {
  var element = document.createElement('a')
  element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
