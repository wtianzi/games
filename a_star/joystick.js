export function createJoystick(onMoveCallback) {
  const base = document.createElement('div');
  base.id = 'joystick-base';
  base.style.cssText = `
    position: fixed; width: 120px; height: 120px;
    background: rgba(200,200,200,0.3); border-radius: 50%;
    touch-action: none; display: none; z-index: 9999;
  `;

  const thumb = document.createElement('div');
  thumb.id = 'joystick-thumb';
  thumb.style.cssText = `
    position: absolute; width: 60px; height: 60px;
    background: orange; border-radius: 50%;
    top: 30px; left: 30px; transition: all 0.1s ease;
  `;

  base.appendChild(thumb);
  document.body.appendChild(base);

  let dragging = false;
  let origin = { x: 0, y: 0 };
  const radius = 60;

  function setThumb(x, y) {
    thumb.style.left = `${60 + x - 30}px`;
    thumb.style.top = `${60 + y - 30}px`;
  }

  function start(e) {
    dragging = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    origin = { x, y };
    base.style.left = `${x - 60}px`;
    base.style.top = `${y - 60}px`;
    base.style.display = 'block';
    setThumb(0, 0);
    onMoveCallback(0, 0);
  }

  function end() {
    dragging = false;
    setThumb(0, 0);
    onMoveCallback(0, 0);
    base.style.display = 'none';
  }

  function move(e) {
    if (!dragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dx = x - origin.x;
    const dy = y - origin.y;
    const dist = Math.min(Math.hypot(dx, dy), radius);
    const angle = Math.atan2(dy, dx);
    const ox = dist * Math.cos(angle);
    const oy = dist * Math.sin(angle);
    setThumb(ox, oy);

    const nx = ox / radius;
    const ny = oy / radius;
    onMoveCallback(
      Math.abs(nx) > 0.3 ? Math.sign(nx) : 0,
      Math.abs(ny) > 0.3 ? Math.sign(ny) : 0
    );
  }

  document.addEventListener('touchstart', start, { passive: false });
  document.addEventListener('touchmove', move, { passive: false });
  document.addEventListener('touchend', end, { passive: false });
  document.addEventListener('mousedown', start);
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', end);
}
