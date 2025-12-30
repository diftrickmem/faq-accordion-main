// 1. Знаходимо всі кнопки (заголовки), на які можна натиснути
const faqItems = document.querySelectorAll('.faq-item__btn');

faqItems.forEach(btn => {
    btn.addEventListener('click', () => {
        // 2. Знаходимо батьківський елемент (faq-item)
        const parent = btn.parentElement;
        
        // 3. Знаходимо текст та іконку саме всередині цього елемента
        const text = parent.querySelector('.faq-item__text');
        const icon = parent.querySelector('.faq-item__image');

        // 4. Перемикаємо клас приховання для тексту
        text.classList.toggle('hidden');

        // 5. Змінюємо іконку (плюс на мінус і навпаки)
        if (text.classList.contains('hidden')) {
            icon.src = './assets/images/icon-plus.svg';
        } else {
            icon.src = './assets/images/icon-minus.svg';
        }
    });
});