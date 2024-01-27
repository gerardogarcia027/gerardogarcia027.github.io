function validateForm() {
            
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                showError("Por favor, ingrese un correo electrónico válido.");
                return false;
            }

            if (password.length < 8) {
                showError("La contraseña debe tener al menos 8 caracteres.");
                return false;
            }

            return true;
        }

        function showError(message) {
            var errorDiv = document.createElement("div");
            errorDiv.style.color = "green";
            errorDiv.innerHTML = message;

                    

            var form = document.querySelector("form");
            form.parentNode.insertBefore(errorDiv, form);
        }
  
