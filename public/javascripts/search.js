const search = document.querySelector('.searchbar')

search.addEventListener('input', async (e) => {

  const res = await fetch('/search');
  const { tasks } = await res.json();
  const value = search.value.toLowerCase();
  const taskContainer = document.querySelectorAll('.task-item');
  const nodeList = document.querySelectorAll('.tasks');
  const listOfTasks = Array.from(nodeList)

  for (let i = 0; i < listOfTasks.length; i++) {
    let task = listOfTasks[i];
    let container = taskContainer[i];
    let content = task.innerHTML;

    if (!content.toLowerCase().includes(value)) {
      container.style.display = 'none';
    } else {
      container.style.display = 'flex'
    }
  }
})
