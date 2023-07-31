const icon = document.querySelector('#toggle-button');
const timeInput = document.querySelector('#inputTime input');

const splitTime = (time) => {
    const re = time.split(":");
    return re;
}

const startCountdown = () => {
    const timeValue = timeInput.value;
    const timeArray = splitTime(timeValue);
    let minute = Number(timeArray[0]);
    let second = Number(timeArray[1]);

    const updateTime = () => {
        second = second - 1;
        if (second < 0) {
            second = 59;
            minute = minute - 1;
        }
        document.getElementById('second').innerText = String(second).padStart(2, '0');
        document.getElementById('minute').innerText = String(minute).padStart(2, '0');

        icon.innerHTML = `
                    <div id="circle"></div>
                    <i class="fa-solid fa-pause" style="color: #0bb58e;"></i>`;
        if (minute === 0 && second === 0) {
            document.querySelector(".ring-sound").play();
            clearInterval(intervalId);
            icon.innerHTML = `
                    <div id="circle"></div>
                    <i onclick="startAgain()" class="fa-solid fa-hourglass-end fa-bounce"></i>
                `;
        }
    };

    updateTime(); // Gọi hàm ngay lập tức để cập nhật hiển thị trước khi bắt đầu interval

    const intervalId = setInterval(updateTime, 10);
}

// const startAgain = () => {
//         clearInterval(intervalId);
//         document.getElementById('second').innerText = String(second).padStart(2, '0');
//         document.getElementById('minute').innerText = String(minute).padStart(2, '0');
// }
// /**-------------------------------------------------------------- */
