(function () {
    const appContainer = document.querySelector('#app');
    const submitButton = document.querySelector('#submit');
    const inputValue = document.querySelector('#input');
    const setsListContainer = document.querySelector('#sets-list');


    submitButton.addEventListener('click', function (event) {
        resetDocument();

        setsListContainer.innerHTML = '';

        let totalNumber = inputValue.value;

        if (totalNumber <= 1) {
            totalNumber = 2;
        }

        const sets = generateSets(totalNumber);


        appendToList(sets);
        addTotalToApp(sets);


    });


    function generateSets(personalMax) {
        const percentages = [30, 40, 50];
        const result = [];
        percentages.forEach(function (per) {
            const rep = Math.floor(personalMax - (personalMax * (per / 100)))
            result.push(rep);
        });
        return result;
    }


    function appendToList(setArray) {

        setArray.forEach(function (item, index) {
            const li = document.createElement('li');
            li.innerHTML = "Set " + (index + 1) ": " + item;
            setsListContainer.appendChild(li);
        });


    }

    function addTotalToApp(setArray) {
        const p = document.createElement('p');
        p.id = 'total-count';
        p.innerText = "Total Reps: " + setArray.reduce((acc, item) => acc + item, 0);
        appContainer.appendChild(p);
    };


    function resetDocument() {
        setsListContainer.innerHTML = '';

        const totalP = document.querySelector('#total-count');

        if (totalP) {
            appContainer.removeChild(totalP);
        }


    }





})()
