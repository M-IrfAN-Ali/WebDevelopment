 var rows=prompt("Please enter the no of Rows for the table");
    var cols=prompt("Please enter the no of coulms for the table");
        if(rows==" " || rows== null){
            rows=10;
        }
        if(cols==" " || cols== null){
            cols=10;
        }
        function createtable(rows, cols){
        var output="<table border='1' width='500' cellspacing='0' cellpadding='5'>";
        for(i=1; i<=rows; i++){
            output=output + "<tr>"
            for(j=1; j<=cols; j++){
                output=output + "<td>" + i*j + "</td>"
            }
            output=output + "</tr>"
        }
        output= output + "</table>"
        document.write(output);}
        createtable(rows, cols);