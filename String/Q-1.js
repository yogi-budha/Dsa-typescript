// convert the first alphabet of each word in a string to UPPER CASE.

const str = "i am a yogesh budha"


function CFAEWTUC(str){

    let ch = " "
    let result = ""

    for(let i =0 ;i<str.length;i++){
        if(ch==" " && str.charAt(i) !==0 ){

            result = result.concat(str.charAt(i).toUpperCase())
        }else{
            result = result.concat(str.charAt(i))
        }

        ch = str.charAt(i)
    }
return result
}

const value = CFAEWTUC(str)
console.log(value)

