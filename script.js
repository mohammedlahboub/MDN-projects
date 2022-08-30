function creatParagraph (){
    const para = document.createElement('p');
    para.textContent = "Hey, I am a paragraph"
    document.body.appendChild(para);

}
const buttons = document.querySelectorAll('button');
for (const button of buttons){
    button.addEventListener('click',creatParagraph);
}