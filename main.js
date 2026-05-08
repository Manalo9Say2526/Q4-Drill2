function checkIndex() {
    let temp = Number(document.getElementById("degree").value);
    let humidity = Number(document.getElementById("percent").value);
    

     if (temp < 0 || humidity < 0) {
        document.getElementById("degree").value = "";
        document.getElementById("percent").value = "";
        return; 

     }
     
     let heatIndex = temp + (0.33 * humidity) - 4; 

     if (heatIndex <= 27) {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Comfortable / Cool");
    }
    else if (heatIndex < 33) {
        window.alert("Heat Index: " + heatIndex  + "°C\nStatus: Warm");
    }
    else if (heatIndex < 38) {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Hot");
    }
    else if (heatIndex < 42) {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Very Hot / Caution");
    }
    else {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Extreme Heat / Danger");
    }

}