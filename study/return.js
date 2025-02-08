const calculator = {
    add : function(a, b){
         return a + b;
    },
    min : function(a, b){
        return a - b;
    },
    time : function(a, b){
        return a * b;
    },
    div : function(a, b){
        return a / b;
    },
    powerof : function(a, b){
        return a ** b;
    }
};

const addResult = calculator.add(2, 3);
