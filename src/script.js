const getPermutations = document.querySelector(".get-permutations")
const outputDiv = document.querySelector(".results-list")
const inputNums = document.querySelector(".numbers")
const permutationSizeInput = document.querySelector(".permutation-size")

function combinationUtil(arr,data,start,end,index,r, currentResults)
{

    let results = []
    if (index == r)
    {
        for (let j=0; j<r; j++)
        {
            results.push(data[j]);
        }
    }
    currentResults.push(results)

    for (let i=start; i<=end && end-i+1 >= r-index; i++)
    {
        data[index] = arr[i];
        combinationUtil(arr, data, i+1, end, index+1, r, currentResults);
    }

    return currentResults
}
 
function printCombination(arr,n,r)
{
    let data = new Array(r);
     
    return combinationUtil(arr, data, 0, n-1, 0, r, []);
}
 

getPermutations.addEventListener("click", () => {
    let inputAsArr = `${inputNums.value}`.split("")
    let result = printCombination(inputAsArr, inputAsArr.length, 3).filter(e => e.length !== 0)
    console.log(result)


    outputDiv.textContent =  ""

    result.forEach(e => outputDiv.textContent += (e.join("") + ", "))

    outputDiv.textContent == outputDiv.textContent.substring(0, outputDiv.textContent.length - 2)

})