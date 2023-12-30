<script>
    import { createEventDispatcher } from "svelte";

    const canvas = document.querySelector("canvas");
    // @ts-ignore
    const c = canvas.getContext("2d");

    // @ts-ignore
    canvas.width = window.innerWidth;
    // @ts-ignore
    canvas.height = window.innerHeight;

    const mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2,
    };

    // @ts-ignore
    const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
    let stopped = false;
    let leftStop = false;

    // Event Listeners
    addEventListener("mousemove", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    addEventListener("resize", () => {
        // @ts-ignore
        canvas.width = innerWidth;
        // @ts-ignore
        canvas.height = innerHeight;

        init();
    });

    // @ts-ignore
    var sleepSetTimeout_ctrl;

    // @ts-ignore
    function sleep(ms) {
        // @ts-ignore
        clearInterval(sleepSetTimeout_ctrl);
        return new Promise(
            (resolve) => (sleepSetTimeout_ctrl = setTimeout(resolve, ms))
        );
    }

    let isDrawing = false;
    const characterDelay = 20;
    let textAnimOver = false;

    async function drawText() {
        const text = "DSVedic Astrology";
        let index = 0;

        function drawNextCharacter() {
            // @ts-ignore
            c.clearRect(0, 0, canvas.width, canvas.height);
            // @ts-ignore
            c.beginPath();
            // @ts-ignore
            c.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
            // @ts-ignore
            c.fillStyle = ball.color;
            // @ts-ignore
            c.fill();
            // @ts-ignore
            c.closePath();
            const currentText = text.substring(0, index + 1);
            // @ts-ignore
            c.fillStyle = "white";
            // @ts-ignore
            c.font = "40px Arial";
            // @ts-ignore
            c.fillText(
                currentText,
                window.innerWidth / 2 - 150,
                window.innerHeight / 2 - 5
            );

            if (index < text.length) {
                index++;
                setTimeout(drawNextCharacter, characterDelay);
            } else {
                textAnimOver = true;
                // isDrawing = false;
                // sleep(1000);
            }
        }

        drawNextCharacter();
    }

    function startAnimation() {
        if (!isDrawing) {
            isDrawing = true;
            drawText();
        }
    }

    // Objects
    class Ball {
        // @ts-ignore
        constructor(x, y, dx, dy, radius, stop_x, stop_y, color) {
            this.x = x;
            this.y = y;
            this.dx = -dx;
            this.dy = dy;
            this.stop_x = stop_x;
            this.stop_y = stop_y;
            this.radius = radius;
            this.color = color;
            this.isDrawing = false;
            this.index = 0;
        }

        draw() {
            // @ts-ignore
            c.beginPath();
            // @ts-ignore
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // @ts-ignore
            c.fillStyle = this.color;
            // @ts-ignore
            c.fill();
            // @ts-ignore
            c.closePath();
        }

        async update() {
            // @ts-ignore
            c.clearRect(0, 0, canvas.width, canvas.height);
            if (this.y + this.radius > this.stop_y) {
                this.dy = -this.dy * 0.5;
                if (
                    (this.y <= this.stop_y + 10 ||
                        this.y >= this.stop_y - 10) &&
                    this.dy < 0.1 &&
                    this.dy > 0
                ) {
                    stopped = true;
                }
            } else {
                this.dy += 1;
            }
            if (stopped == true) {
                if (this.x + this.radius >= this.stop_x) {
                    this.x += this.dx;
                } else {
                    leftStop = true;
                }
            }

            this.y += this.dy;
            this.draw();
        }
    }

    // Implementation
    // @ts-ignore
    let ball;
    function init() {
        ball = new Ball(
            window.innerWidth / 2,
            -50,
            13,
            2,
            25,
            window.innerWidth / 2 - 150,
            window.innerHeight / 2,
            "#73e8ef"
        );
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        // c.clearRect(0, 0, canvas.width, canvas.height);
        // ball.update();
        if (leftStop == true) {
            startAnimation();
            if (textAnimOver) {
                //Create an event dispatcher to send a event to the parent component which will destroy the canvas
                // and display the main page
                const dispatch = createEventDispatcher();
                dispatch("animationOver", { remove: true });
                return;
            }
        } else {
            // @ts-ignore
            ball.update();
        }
    }
    init();
    animate();
</script>

<section>
    <canvas bind:this={canvas}></canvas>
</section>

<style>
    section {
        margin: 0;
    }
    canvas {
        background-color: #212121;
        display: block;
    }
</style>
