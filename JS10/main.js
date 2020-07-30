let btn = document.getElementById('btn');
let textArea = document.getElementById('text');
btn.onclick = () => {
    // console.log(textArea.value.length);
    for (let i = 0; i < textArea.value.length; i++) {
        let max = 5000;
        let min = 1000;
        let random = Math.floor(Math.random() * (max - min + 1));
        setTimeout(() => {
            console.log(textArea.value[i]);
            document.write(textArea.value[i])
        }, random)
        // for (const character of textArea.value) {
        //     let max = 5000;
        //     let min = 1000;
        //     let random = Math.floor(Math.random() * (max - min + 1));
        //     setTimeout(() => document.write(character), random)
        // }
    }
}