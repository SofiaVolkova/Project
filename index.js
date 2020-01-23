window.onload = function() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        console.log(cell);
        cell.addEventListener("click", () => {
            console.log(cell);
            if (cell.className.indexOf('active') !== -1) {
                //remove class
                cell.classList.remove('active');
            } else { cell.classList.add('active') };
        });
    }

    const cellTwo = document.getElementsByClassName('cellT');
    for (let cellT of cellTwo) {
        console.log(cellT);
        cellT.addEventListener("click", () => {
            console.log(cellT);
            if (cellT.className.indexOf('active') !== -1) {
                //remove class
                cellT.classList.remove('active');
            } else { cellT.classList.add('active') };
        });
    }

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let activeTextId = 1;

    nextButton.addEventListener("click", () => {
        // activeTextId == 1
        if (activeTextId === 4) {
            activeTextId = 1;
        } else {
            activeTextId++;
        }

        // activeTextId == 2

        document.getElementById(`text${activeTextId == 1 ? 4 : activeTextId-1}`).style.opacity = 0;
        // document.getElementById(`text${activeTextId}`).classList.add('active');

        let op = 0;
        while (op <= 1) {
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op * 200);

            op += 0.05;
            console.log(op);
        }

        document.getElementById(`round${activeTextId == 1 ? 4 : activeTextId-1}`).classList.remove('round_active');
        document.getElementById(`round${activeTextId}`).classList.add('round_active');

    })

    prevButton.addEventListener('click', () => {
        if (activeTextId === 1) {
            activeTextId = 4
        } else {
            activeTextId--;
        }

        document.getElementById(`text${activeTextId== 4 ? 1: activeTextId+1}`).style.opacity = 0;
        // document.getElementById(`text${activeTextId}`).classList.add('active');

        let op = 0;
        while (op <= 1) {
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op * 200);

            op += 0.05;
            console.log(op);
        }

        document.getElementById(`round${activeTextId == 4 ? 1 : activeTextId+1}`).classList.remove('round_active');
        document.getElementById(`round${activeTextId}`).classList.add('round_active');

    })

    ///clients

    const prevButton2 = document.getElementById('prev2');
    const nextButton2 = document.getElementById('next2');
    let activeTextId2 = 1;

    nextButton2.addEventListener("click", () => {
        // activeTextId == 1
        if (activeTextId2 === 4) {
            activeTextId2 = 1;
        } else {
            activeTextId2++;
        }

        // activeTextId == 2

        //document.getElementById(`image${activeTextId2 == 1 ? 4 : activeTextId2-1}`).style.opacity = 0;
        // document.getElementById(`image${activeTextId2}`).classList.add('active');

        let op2 = 0;
        while (op2 <= 1) {
            let _op2 = op2 + 0.05;
            setTimeout(() => {
                document.getElementById(`image${activeTextId2}`).style.opacity = _op2;
            }, 60 + _op2 * 200);

            op2 += 0.05;
            console.log(op2);
        }

        document.getElementById(`circle${activeTextId2 == 1 ? 4 : activeTextId2-1}`).classList.remove('circle_active');
        document.getElementById(`circle${activeTextId2}`).classList.add('circle_active');

    })

    prevButton2.addEventListener('click', () => {
        if (activeTextId2 === 1) {
            activeTextId2 = 4
        } else {
            activeTextId2--;
        }

        //document.getElementById(`image${activeTextId2== 4 ? 1: activeTextId2+1}`).style.opacity = 0;
        // document.getElementById(`image${activeTextId2}`).classList.add('active');

        let op2 = 0;
        while (op2 <= 1) {
            let _op2 = op2 + 0.05;
            setTimeout(() => {
                document.getElementById(`image${activeTextId2}`).style.opacity = _op2;
            }, 60 + _op2 * 200);

            op2 += 0.05;
            console.log(op2);
        }

        document.getElementById(`circle${activeTextId2 == 4 ? 1 : activeTextId2+1}`).classList.remove('circle_active');
        document.getElementById(`circle${activeTextId2}`).classList.add('circle_active');

    })

    //comments
    const prevButton3 = document.getElementById('prev3');
    const nextButton3 = document.getElementById('next3');
    let activeTextId3 = 1;

    nextButton3.addEventListener("click", () => {
        // activeTextId == 1
        if (activeTextId3 === 4) {
            activeTextId3 = 1;
        } else {
            activeTextId3++;
        }


        document.getElementById(`disk${activeTextId3 == 1 ? 4 : activeTextId3-1}`).classList.remove('disk_active');
        document.getElementById(`disk${activeTextId3}`).classList.add('disk_active');

    })

    prevButton3.addEventListener('click', () => {
        if (activeTextId3 === 1) {
            activeTextId3 = 4
        } else {
            activeTextId3--;
        }

        document.getElementById(`disk${activeTextId3 == 4 ? 1 : activeTextId3+1}`).classList.remove('disk_active');
        document.getElementById(`disk${activeTextId3}`).classList.add('disk_active');

    })




};