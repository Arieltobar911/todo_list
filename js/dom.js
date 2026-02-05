export const overTog = overlay => overlay.classList.toggle('bye'); // overlay toggle

export function newTask(list, title, desc, overlay, reset){
  list.innerHTML += `
    <div class="task" data-status="active">
      <div class="task-left">
        <input type="checkbox" class="task-check">
        <div class="task-text">
          <h3 class="task-title">${title}</h3>
          <p class="task-desc">${desc}</p>
        </div>
      </div>
      <button class="task-delete" >🗑️</button>
    </div>`;
  overTog(overlay);
  reset();
};
