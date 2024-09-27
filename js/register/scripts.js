// Función para mostrar/ocultar la contraseña
function toggleRegisterPassword() {
    const registerPasswordField = document.getElementById('register-password');
    const eyeIconRegister = document.getElementById('eye-icon-register');
    if (registerPasswordField.type == 'password') {
        registerPasswordField.type = 'text';
        eyeIconRegister.classList.remove('fa-eye');
        eyeIconRegister.classList.add('fa-eye-slash');
    } else {
        registerPasswordField.type = 'password';
        eyeIconRegister.classList.remove('fa-eye-slash');
        eyeIconRegister.classList.add('fa-eye');
    }
}

// Función para mostrar/ocultar la confirmación de contraseña
function toggleConfirmPassword() {
    const confirmPasswordField = document.getElementById('confirm-password');
    const eyeIconConfirm = document.getElementById('eye-icon-confirm');
    if (confirmPasswordField.type == 'password') {
        confirmPasswordField.type = 'text';
        eyeIconConfirm.classList.remove('fa-eye');
        eyeIconConfirm.classList.add('fa-eye-slash');
    } else {
        confirmPasswordField.type = 'password';
        eyeIconConfirm.classList.remove('fa-eye-slash');
        eyeIconConfirm.classList.add('fa-eye');
    }
}

// Función para validar el formulario
function validateForm(event) {
    event.preventDefault(); // Evita el envío del formulario para validación
    
    // Limpiar mensajes de advertencia
    const warnings = document.querySelectorAll('.warning-message');
    warnings.forEach(warning => warning.style.display = 'none');
    
    let valid = true;

    // Validar campos requeridos
    const fields = ['first-name', 'last-name', 'register-email', 'phone', 'address', 'user', 'register-password', 'confirm-password'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            document.getElementById(`${field}-warning`).style.display = 'block';
            valid = false;
        }
    });
document.getElementById('register-form').addEventListener('submit', function(event) {
    let valid = true; // Asume que el formulario es válido al principio
    

});
    // Validar formato de correo electrónico
    const email = document.getElementById('register-email').value;
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
        document.getElementById('email-format-warning-2').style.display = 'block';
        valid = false;
    }

    // Validar coincidencia de contraseñas
    const registerpassword = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (registerpassword !== confirmPassword) {
        document.getElementById('password-match-warning').style.display = 'block';
        valid = false;
    }
    

    // Enviar formulario si es válido
    if (valid) {
        document.getElementById('register-form').submit();
    }
}
document.getElementById('phone').addEventListener('input', function() {
    const phoneField = document.getElementById('phone');
    const phoneFormatWarning = document.getElementById('phone-format-warning');

    // Expresión regular para números de teléfono (ajustar según formato permitido)
    const phonePattern = /^[0-9]{0,10}$/; // Permite solo hasta 10 números

    // Asegurarse de que solo se ingresen números y limitar a 10 dígitos
    phoneField.value = phoneField.value.replace(/[^0-9]/g, '').slice(0, 10);

    // Verificar si el número es válido
    if (phoneField.value.length === 0) {
        phoneFormatWarning.style.display = 'none'; // Ocultar si está vacío
    } else if (!phonePattern.test(phoneField.value) || phoneField.value.length < 10) {
        phoneFormatWarning.style.display = 'block'; // Mostrar si no cumple con el patrón o tiene menos de 10 dígitos
    } else {
        phoneFormatWarning.style.display = 'none'; // Ocultar si es válido
    }

    
});
// Asignar la función de validación al evento submit del formulario
document.getElementById('register-form').addEventListener('submit', validateForm);
