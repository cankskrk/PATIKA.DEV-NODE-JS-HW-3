const circleArea = (r) => {
    const pi = 3.14
    let area = pi * r ** 2
    console.log(area)
}


const circleCircumference = (r) => {
    const pi = 3.14
    let circumference = 2 * pi * r
    console.log(circumference)
}

module.exports = {
    circleArea,
    circleCircumference
}