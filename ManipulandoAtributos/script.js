const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === '' ? 'Olá, mundo!' : '';
});

document.getElementById('type').addEventListener('click', function () {
    input.setAttribute('type', 'radio');
});

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite Algo...';
});

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled);
});

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse;
    console.log("O Valor do atributo data-something-else é " + data);
    input.dataset.somethingElse = "Algum Outro Valor";
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse);
})