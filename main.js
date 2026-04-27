function checkIndex() {
    let temp = Number(document.getElementById("degree").value);
    let humidity = Number(document.getElementById("percent").value);
    

     if (temp < 0 || humidity < 0) {
        document.getElementById("degree").value = "";
        document.getElementById("percent").value = "";

     }
     
     let heatIndex = temp + (0.33 * humidity) - 4; 

     if (heatIndex <= 27) {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Comfortable / Cool");
    }
    else if (heatIndex >= 28 && heatIndex <= 32) {
        window.alert("Heat Index: " + heatIndex  + "°C\nStatus: Warm");
    }
    else if (heatIndex >= 33 && heatIndex <= 37) {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Hot");
    }
    else if (heatIndex >= 38 && heatIndex <= 41) {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Very Hot / Caution");
    }
    else if (heatIndex >= 42) {
        window.alert("Heat Index: " + heatIndex + "°C\nStatus: Extreme Heat / Danger");
    }

}