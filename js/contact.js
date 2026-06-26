export function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn-submit');
        const originalBtnText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = '...';

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.innerHTML = `
                    <div class="form-success-card">
                        <span class="success-icon">✓</span>
                        <h3>Mesajınız Alındı!</h3>
                        <p>İletişime geçtiğiniz için teşekkürler. En kısa sürede dönüş yapacağım.</p>
                    </div>
                `;
            } else {
                throw new Error('Network error');
            }
        } catch (error) {
            alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}