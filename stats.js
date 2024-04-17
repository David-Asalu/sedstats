
function showSelectedForm() {
    var selectedCalculation = document.getElementById('calculationType').value;
    var formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';

    if (selectedCalculation === 'skewness') {
        formContainer.innerHTML = `
            <div class="input-group">
                <label for="sixteenphi">Sixteen Phi:</label>
                <input type="number" id="sixteenphi" class="input" placeholder="Enter sixteen phi">
            </div>
            <div class="input-group">
                <label for="eightyfourphi">Eighty-four Phi:</label>
                <input type="number" id="eightyfourphi" class="input" placeholder="Enter eighty-four phi">
            </div>
            <div class="input-group">
                <label for="fiftyphi">Fifty Phi:</label>
                <input type="number" id="fiftyphi" class="input" placeholder="Enter fifty phi">
            </div>
            <div class="input-group">
                <label for="ninetyfivephi">Ninety-five Phi:</label>
                <input type="number" id="ninetyfivephi" class="input" placeholder="Enter ninety-five phi">
            </div>
            <div class="input-group">
                <label for="fivephi">Five Phi:</label>
                <input type="number" id="fivephi" class="input" placeholder="Enter five phi">
            </div>
            <button onclick="calculateSkewness()">Calculate Skewness</button>
        `;
    } else if (selectedCalculation === 'kurtosis') {
      
        formContainer.innerHTML = `
            <div class="input-group">
                <label for="twentyfivephi">Twenty-five Phi:</label>
                <input type="number" id="twentyfivephi" class="input" placeholder="Enter twenty-five phi">
            </div>
            <div class="input-group">
                <label for="seventyfivephi">Seventy-five Phi:</label>
                <input type="number" id="seventyfivephi" class="input" placeholder="Enter seventy-five phi">
            </div>
            <div class="input-group">
            <label for="ninetyfivephi">Ninety-five Phi:</label>
            <input type="number" id="ninetyfivephi" class="input" placeholder="Enter ninety-five phi">
        </div>
        <div class="input-group">
            <label for="fivephi">Five Phi:</label>
            <input type="number" id="fivephi" class="input" placeholder="Enter five phi">
        </div>
            <button onclick="calculateKurtosis()">Calculate Kurtosis</button>
            
        `;
        document.getElementById('result').innerText = " " ;
    }
    else if (selectedCalculation === "Sorting"){
        formContainer.innerHTML = `
        <div class="input-group">
        <label for="eightyfourphi">Eighty-four Phi:</label>
        <input type="number" id="eightyfourphi" class="input" placeholder="Enter eighty-four phi">
    </div>
        <label for="sixteenphi">Sixteen Phi:</label>
        <input type="number" id="sixteenphi" class="input" placeholder="Enter sixteen phi">
    </div>

        <div class="input-group">
        <label for="ninetyfivephi">Ninety-five Phi:</label>
        <input type="number" id="ninetyfivephi" class="input" placeholder="Enter ninety-five phi">
    </div>
    <div class="input-group">
        <label for="fivephi">Five Phi:</label>
        <input type="number" id="fivephi" class="input" placeholder="Enter five phi">
    </div>
    <button onclick="calculateSorting()">Calculate Sorting</button>
`
    }
    else if (selectedCalculation === "Mean"){
        formContainer.innerHTML = `     <div class="input-group">
        <label for="sixteenphi">Sixteen Phi:</label>
        <input type="number" id="sixteenphi" class="input" placeholder="Enter sixteen phi">
    </div>
    <div class="input-group">
        <label for="eightyfourphi">Eighty-four Phi:</label>
        <input type="number" id="eightyfourphi" class="input" placeholder="Enter eighty-four phi">
    </div>
    <div class="input-group">
        <label for="fiftyphi">Fifty Phi:</label>
        <input type="number" id="fiftyphi" class="input" placeholder="Enter fifty phi">
    </div>
    <button onclick="calculateMean()">Calculate mean</button>
    `
    }
}
function calculateMean(){
    var sixteen_phi = parseFloat(document.getElementById('sixteenphi').value);
    var eightyfour_phi = parseFloat(document.getElementById('eightyfourphi').value);
    var fifty_phi = parseFloat(document.getElementById('fiftyphi').value);
    var mean= (sixteen_phi+fifty_phi+eightyfour_phi)/3
    document.getElementById('result').innerText = "mean: " + mean;

}
function calculateSkewness() {
       
    var sixteen_phi = parseFloat(document.getElementById('sixteenphi').value);
var eightyfour_phi = parseFloat(document.getElementById('eightyfourphi').value);
var fifty_phi = parseFloat(document.getElementById('fiftyphi').value);
var ninetyfive_phi = parseFloat(document.getElementById('ninetyfivephi').value);
var five_phi = parseFloat(document.getElementById('fivephi').value);
    var skewness = ((((sixteen_phi + eightyfour_phi) - (2 * fifty_phi)) / (2 * (eightyfour_phi - sixteen_phi))) + (((five_phi + ninetyfive_phi) - (2 * fifty_phi)) / (2 * (ninetyfive_phi - five_phi))));

    document.getElementById('result').innerText = "Skewness: " + skewness;
}
function calculateKurtosis() {
    var ninetyfive_phi = parseFloat(document.getElementById('ninetyfivephi').value);
    var five_phi = parseFloat(document.getElementById('fivephi').value);
    var seventyfive_phi= parseFloat(document.getElementById('seventyfivephi').value);
    var twentyfive_phi= parseFloat(document.getElementById('twentyfivephi').value);
    var kurtosis = ((ninetyfive_phi - five_phi) / (2.44 * (seventyfive_phi - twentyfive_phi)));

    document.getElementById('result').innerText = "Kurtosis: " + kurtosis;
}
function calculateSorting(){
    var eightyfour_phi= parseFloat(document.getElementById('eightyfourphi').value);
    var sixteen_phi = parseFloat(document.getElementById('sixteenphi').value);
    var ninetyfive_phi = parseFloat(document.getElementById('ninetyfivephi').value);
    var five_phi = parseFloat(document.getElementById('fivephi').value);

    ISD = (((eightyfour_phi-sixteen_phi)/4)+((ninetyfive_phi-five_phi)/6.6))
    document.getElementById('result').innerText = "ISD: " + ISD;
}
// Show Skewness form by default
showSelectedForm();
