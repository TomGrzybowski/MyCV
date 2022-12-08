const object = {
    key1: true,
    key2: true,
    key3: true
}


// function isTrue(object) {
    //     if () {
        //         return true
        //     }
        //     return false
        // }
        const areTrue = Object.values(object).every(
            value => value === true
        )

        console.log(areTrue)
        // console.log(isTrue(object))
        
