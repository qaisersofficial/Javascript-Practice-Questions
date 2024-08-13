function addition() {
    document.form1.answer.value += "+";
  }
  
  function subtraction() {
    document.form1.answer.value += "-";
  }
  
  function multiplication() {
    document.form1.answer.value += "*";
  }
  
  function division() {
    document.form1.answer.value += "/";
  }
  
  function modulus() {
    document.form1.answer.value += "%";
  }
  
  function calculate() {
    document.form1.answer.value = eval(document.form1.answer.value);
  }
  
  function togglesign() {
    document.form1.answer.value =
      eval(document.form1.answer.value) * -1;
  }