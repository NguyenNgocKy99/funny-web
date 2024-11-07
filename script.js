document.addEventListener('DOMContentLoaded', () => {
    const notWantButton = document.getElementById('not-want');
    const wantButton = document.getElementById('want');
    const backhomeButton = document.getElementById('backhome');
    const notification = document.getElementById('notification');

    let notWantClickCount = 0; // Đếm số lần nhấn "嫌"

    if (backhomeButton) {
        backhomeButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    notWantButton.addEventListener('click', () => {
        notWantClickCount++;

        if (notWantClickCount > 3) {
            // Hiển thị thông báo với hiệu ứng
            notification.classList.add('show');

            // Sau 2 giây, ẩn thông báo
            setTimeout(() => {
                notification.classList.remove('show');
                notWantClickCount = 0; // Reset đếm
            }, 2000);
        } else {
            // Di chuyển nút "嫌" đến vị trí ngẫu nhiên
            const randomX = Math.random() * (window.innerWidth - 100);
            const randomY = Math.random() * (window.innerHeight - 100);
            notWantButton.style.position = 'absolute';
            notWantButton.style.left = randomX + 'px';
            notWantButton.style.top = randomY + 'px';
        }
    });

    wantButton.addEventListener('click', () => {
        window.location.href = 'result.html';
    });
});
