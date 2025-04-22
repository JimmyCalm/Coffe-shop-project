document.addEventListener('DOMContentLoaded', function() {
    const menuControls = document.querySelectorAll('.menu__control');
    const menuItems = document.querySelectorAll('.menu__item');
  
    menuControls.forEach(control => {
      control.addEventListener('click', function() {
        // Удаляем активный класс у всех кнопок
        menuControls.forEach(btn => btn.classList.remove('active'));
        
        // Добавляем активный класс текущей кнопке
        this.classList.add('active');
        
        // Получаем выбранную категорию
        const category = this.dataset.category;
        
        // Плавное скрытие всех карточек
        menuItems.forEach(item => {
          item.classList.add('hidden');
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        });
        
        // Плавное отображение выбранной категории
        setTimeout(() => {
          menuItems.forEach(item => {
            if (item.dataset.category === category) {
              item.style.display = 'flex';
              setTimeout(() => {
                item.classList.remove('hidden');
              }, 10);
            }
          });
        }, 300);
      });
    });
  
    // По умолчанию показываем кофе
    document.querySelector('.menu__control[data-category="coffee"]').classList.add('active');
  });