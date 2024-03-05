let string = ''
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == 'RESULT')
        {
            try {
                string = eval(string);
                document.querySelector('#ans').value = string;
            } catch (error) {
                console.error("Error:", error);
                document.querySelector('#ans').value = "Error";
            }
        } else if(e.target.innerHTML == 'DEL')
        {
            string = ''
            document.querySelector('#ans').value = string
        }
        else{
        string = string + e.target.innerHTML
        document.querySelector('#ans').value = string}
    });
});