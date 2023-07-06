const getPermutations = document.querySelector(".get-permutations")
const outputDiv = document.querySelector(".results-list")
const inputNums = document.querySelector(".numbers")
const permutationSizeInput = document.querySelector(".permutation-size")

function convert(num, arr, permSize) {
    let results = []
    for(i = 0; i < permSize; i++){
        results.push(parseInt(arr[num % arr.length]))
        num = parseInt(num / arr.length);
    }
    return results.join("");
}

function permute(nums, permSize) {
    let results = []

    for (var i = 0; i < parseInt(Math.pow(nums.length, 3)); i++) {
        results.push(convert(i, nums, permSize))
    }
    return results
};

getPermutations.addEventListener("click", () => {
    console.log(permutationSizeInput.value)
    let permutations = permute(`${inputNums.value}`.split(""), permutationSizeInput.value)
    console.log(permutations)
    outputDiv.textContent = ""
    permutations.forEach(e => {
        outputDiv.textContent += (e + ", ")
    })

    outputDiv.textContent == outputDiv.textContent.substring(0, outputDiv.textContent.length - 2)

})