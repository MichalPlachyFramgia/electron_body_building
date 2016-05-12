var Container = document.getElementById("bmi_caculator");
Container.addEventListener('click', function(event){
  var caculator = document.getElementById("caculator");
  caculator.style.display = 'block';
});

var bmiButton = document.getElementById("bmi_button");
bmiButton.addEventListener('click', function(event){
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");

  var result = weight.value*10000 / (height.value * height.value);
  alert(result);
});