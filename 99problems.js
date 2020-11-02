/* 99 Problems but a while loop ain't one


var num = 99;

while (num >=1) {
    // Last part of the loop changes made in verbage
    if (num === 1) {
        console.log(num + " problem left but a while loop ain't one! "
                    + "If you havin' code problems, I feel bad for you son... "
                    + "I got " + (num-1) + " problems left I hope you had some fun");
    }
    // Second to last part changes made in verbage
    else if (num === 2){
        console.log(num + " problems left but a while loop ain't one! "
                    + "If you havin' code problems, I feel bad for you son... "
                    + "I got " + (num-1) + " problem left but a while loop ain't one! "
                    + "Hit Me");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " problems left but a while loop ain't one! "
                    + "If you havin' code problems, I feel bad for you son... "
                    + "I got " + (num-1) + " problems left but a while loop ain't one! "
                    + "Hit Me");
    }
    num = num - 1;
}