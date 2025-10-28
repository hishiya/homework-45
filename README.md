# Проєкт: Лічильник на React з Redux Toolkit

Це навчальний проєкт, створений на React + Vite, що демонструє основи роботи з **Redux Toolkit** для керування глобальним станом.

Замість локального стану (`useState`) додаток використовує Redux store для зберігання та оновлення поточного значення лічильника.

---

## Опис реалізації

Проєкт ілюструє ключові концепції Redux Toolkit:

1.  **`createSlice` (counterSlice.js):** Створює "зріз" стану для лічильника. Він автоматично генерує `actions` ( `increment`, `decrement`) та `reducer` на основі наданих функцій.
2.  **`configureStore` (store.js):** Створює та налаштовує Redux store, комбінуючи всі `reducer` (у цьому випадку, лише `counterReducer`).
3.  **`Provider` (main.jsx):** "Огортає" весь додаток, роблячи Redux store доступним для будь-якого компонента.
4.  **Хуки `react-redux` (NumberCounter.jsx):**
    * `useSelector`: "Читає" дані ( `state.counter.value`) з Redux store.
    * `useDispatch`: Отримує функцію `dispatch` для відправки `actions` ( `increment()` або `decrement()`) до store.

## Стек технологій

* **React**
* **Vite**
* **@reduxjs/toolkit**
* **react-redux**

---

## Встановлення та запуск

1.  **Клонуйте репозиторій:**
    ```bash
    # Замініть [URL] на посилання вашого репозиторію
    git clone [URL-ВАШОГО-РЕПОЗИТОРІЮ]
    ```

2.  **Перейдіть до каталогу проєкту:**
    ```bash
    # Назва папки з вашого завдання
    cd my-redux-app
    ```

3.  **Встановіть базові залежності:**
    ```bash
    npm install
    ```

4.  **Встановіть Redux Toolkit та React Redux:**
    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

5.  **Запустіть проєкт у режимі розробки:**
    ```bash
    npm run dev
    ```

    Проєкт буде доступний за адресою `http://localhost:5173/` (або іншим портом, вказаним у терміналі).

---

## Демо-версія

Ви можете переглянути живу (live) демо-версію проєкту, розгорнуту на Vercel
