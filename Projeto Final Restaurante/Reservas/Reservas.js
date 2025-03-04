document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o EmailJS com seu User ID
    emailjs.init("jMw6H5K7i-i4WZ1ui");

    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação simples de campos obrigatórios
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value) {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!valid) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Envio do formulário usando EmailJS
        emailjs.sendForm('service_yci6u0k', 'template_luvbodr', form)
            .then(() => {
                alert('Reserva enviada com sucesso!');
                form.reset(); // Limpa o formulário após o envio
            }, (error) => {
                alert('Erro ao enviar reserva, tente novamente.');
                console.error('Erro:', error);
            });
    });
});
