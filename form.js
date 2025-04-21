const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // отмена стандартной отправки

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const comment = document.getElementById('comment').value;

      // Здесь можно отправить данные на сервер через fetch или XMLHttpRequest
      console.log("Данные формы:");
      console.log("Имя:", name);
      console.log("Телефон:", phone);
      console.log("Комментарий:", comment);

      // Очистка формы после отправки
      form.reset();

      // Сообщение пользователю
      alert("Спасибо! Ваша заявка отправлена.");
    });