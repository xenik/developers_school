// Тайная жизнь объектов

// Упражнение 1 Векторный тип

function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function(otherVector) {
  return new Vector(this.x + otherVector.x, this.y + otherVector.y);
};

Vector.prototype.minus = function(otherVector) {
  return new Vector(this.x - otherVector.x, this.y + otherVector.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));

console.log(new Vector(1, 2).minus(new Vector(2, 3)));

console.log(new Vector(3, 4).length);


// Упражнение 2 Еще одна ячейка

