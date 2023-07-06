const getPermutations = document.querySelector(".get-permutations")
const outputDiv = document.querySelector(".results-list")
const inputNums = document.querySelector(".numbers")

function convert(num, arr) {
    let results = []
    for(i = 0; i < 3; i++){
        results.push(parseInt(arr[num % arr.length]))
        num = parseInt(num / arr.length);
    }
    return results.join("");
}

function permute(nums) {
    let results = []

    for (var i = 0; i < parseInt(Math.pow(nums.length, 3)); i++) {
        results.push(convert(i, nums))
    }
    return results
};

getPermutations.addEventListener("click", () => {
    let permutations = permute(`${inputNums.value}`.split(""))
    console.log(permutations)
    outputDiv.textContent = ""
    permutations.forEach(e => {
        outputDiv.textContent += (e + ", ")
    })

    outputDiv.textContent == outputDiv.textContent.substring(0, outputDiv.textContent.length - 2)

})