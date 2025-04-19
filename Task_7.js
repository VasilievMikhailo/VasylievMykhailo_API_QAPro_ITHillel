const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  };
  
  
  services.price = function() {
    let total = 0;
    for (let value in this) {
      if (typeof this[value] === 'string' && this[value].includes('грн')) {
        total += parseFloat(this[value]);
      }
    }
    return total + ' грн';
  };
  
  services.minPrice = function() {
    let prices = [];
    for (let value in this) {
      if (typeof this[value] === 'string' && this[value].includes('грн')) {
        prices.push(parseFloat(this[value]));
      }
    }
    return Math.min(...prices) + ' грн';
  };
  
  services.maxPrice = function() {
    let prices = [];
    for (let value in this) {
      if (typeof this[value] === 'string' && this[value].includes('грн')) {
        prices.push(parseFloat(this[value]));
      }
    }
    return Math.max(...prices) + ' грн';
  };
  

  services['Розбити скло'] = "200 грн";

  services['Пакет'] = "1.50 грн";

  console.log('Total proce:', services.price());   
  console.log('Min price:', services.minPrice());       
  console.log('Max price:', services.maxPrice());      