// script.js: form validation and success modal
(function(){
  // Initialize Bootstrap modal
  var successModalEl = document.getElementById('successModal');
  var successModal = successModalEl ? new bootstrap.Modal(successModalEl) : null;

  // Get the registration form
  var form = document.getElementById('regForm');
  if (!form) return;

  // Listen for form submission
  form.addEventListener('submit', function(e){
    e.preventDefault();
    e.stopPropagation();

    // Run HTML5 validation
    if (!form.checkValidity()){
      form.classList.add('was-validated');
      return;
    }

    // Custom checks (email + phone)
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();

    // Simple email format check
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)){
      document.getElementById('email').classList.add('is-invalid');
      return;
    }

    // Phone number digits check
    var phoneDigits = phone.replace(/[^\d]/g, '');
    if (phoneDigits.length < 6){
      document.getElementById('phone').classList.add('is-invalid');
      return;
    }

    // If all good, show success modal or alert
    if (successModal){
      successModal.show();
    } else {
      alert('Registration received — thank you!');
    }

    // Reset form after submission
    form.reset();
    form.classList.remove('was-validated');
  }, false);

})();
