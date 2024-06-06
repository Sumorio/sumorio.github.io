document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.zIndex = "2147483647";
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const particles = [];

  function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: Math.random() * 4 - 2,
      y: Math.random() * 4 - 2,
    };
    this.alpha = 1;
  }

  Particle.prototype.draw = function () {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();
  };

  Particle.prototype.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= 0.02;
  };

function createParticles(x, y, hue) {
  const particleCount = 20;
  const radius = Math.random() * 2 + 1;
  const angleIncrement = (Math.PI * 2) / particleCount;

  for (let i = 0; i < particleCount; i++) {
    const angle = i * angleIncrement;
    const randomVelocity = Math.random() * 6 + 2;
    const vx = Math.cos(angle) * randomVelocity;
    const vy = Math.sin(angle) * randomVelocity;

    // 修改颜色和透明度
    const color = `hsla(${(angle * 180) / Math.PI}, 100%, 50%, 0.8)`; // 根据角度生成彩虹色
    particles.push(new Particle(x, y, radius, color, vx, vy));
  }
}



  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
      particle.update();
      particle.draw();
      if (particle.alpha <= 0) {
        particles.splice(index, 1);
      }
    });
  }

  document.addEventListener("click", function (event) {
    const { clientX, clientY } = event;
    createParticles(clientX, clientY);
  });

  animate();
});
