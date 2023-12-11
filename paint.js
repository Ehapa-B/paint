//write a paint type checker function: the customer should be able to
// input paint type and color

function paintTypeChecker(type, color) {
    if (type === "satin" && color === "tiffany" || color === "blue" || color === "brown") {
        return `${type} ${color} is a beautiful color!`;
    } else if (type === "emulsion" && color === "white") {
        return `${type}  ${color} okay, is a beautiful color! It is available`;
    } else {
        return `${type} ${color} is a beautiful color! but it is not available!`;
    
  }
  
};
console.log(paintTypeChecker("emulsion", "red"));
console.log(paintTypeChecker("satin", "tiffany"));






