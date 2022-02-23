function Scoring() {
    var score = document.getElementById("score").value;

    var url = "/convertScoring";  
    axios({
        method: "post",
        url: url,
        data: {
            score: score,
        },
        headers: {
            "Content-Type": "application/json",
        },
    }).then(
        (response) => {
            var result = response.data;
            document.getElementById("converting_result").value = result["result"];
        },
        (error) => {
            console.log(error);
        }
    );
}

function RootScore() {
    var number = document.getElementById("rootSquare_number").value;

    var url = "/rootSquare";  
    axios({
        method: "post",
        url: url,
        data: {
            number: number,
        },
        headers: {
            "Content-Type": "application/json",
        },
    }).then(
        (response) => {
            var result = response.data;
            document.getElementById("rootSquare_result").value = result["result"];
        },
        (error) => {
            console.log(error);
        }
    );
}

function hypotenuse() {
    var baseNumber = document.getElementById("base").value;
    var altitudeNumber = document.getElementById("altitude").value;

    var url = "/hypotenuse";  
    axios({
        method: "post",
        url: url,
        data: {
            baseNumber: baseNumber,
            altitudeNumber: altitudeNumber,
        },
        headers: {
            "Content-Type": "application/json",
        },
    }).then(
        (response) => {
            var result = response.data;
            document.getElementById("hypotenuseResult").value = result["result"];
        },
        (error) => {
            console.log(error);
        }
    );
}